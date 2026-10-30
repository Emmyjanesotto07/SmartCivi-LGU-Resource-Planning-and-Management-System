import { useState, useMemo } from "react";
import useLocalStore from "../hooks/useLocalStore";
import { seed } from "../data/seed";

const money = (n) => "₱" + Number(n || 0).toLocaleString("en-PH");
const badgeClass = (v) => {
  const s = String(v).toLowerCase();
  if (["registered", "released", "active", "good"].includes(s)) return "badge ok";
  if (["pending", "processing", "on leave", "fair", "low stock"].includes(s)) return "badge warn";
  if (["rejected", "poor", "inactive"].includes(s)) return "badge bad";
  return "badge";
};

function toCSV(columns, rows) {
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const head = columns.map((c) => esc(c.label)).join(",");
  return [head, ...rows.map((r) => columns.map((c) => esc(r[c.key])).join(","))].join("\n");
}

// Generic na table + form para sa lahat ng module.
export default function RecordManager({ storeKey, title, description, columns, fields, addLabel }) {
  const [items, setItems] = useLocalStore(storeKey, seed[storeKey] || []);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null); // null | {} (bago) | record
  const [form, setForm] = useState({});

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((r) => Object.values(r).some((v) => String(v).toLowerCase().includes(q)));
  }, [items, query]);

  const openNew = () => {
    const blank = {};
    fields.forEach((f) => (blank[f.key] = f.type === "select" ? f.options[0] : ""));
    setForm(blank);
    setEditing({});
  };
  const openEdit = (r) => { setForm(r); setEditing(r); };
  const close = () => setEditing(null);

  const save = (e) => {
    e.preventDefault();
    const clean = { ...form };
    fields.forEach((f) => { if (f.type === "number") clean[f.key] = Number(clean[f.key] || 0); });
    if (editing.id) setItems(items.map((r) => (r.id === editing.id ? { ...clean, id: editing.id } : r)));
    else setItems([...items, { ...clean, id: Date.now() }]);
    close();
  };
  const remove = (r) => {
    if (window.confirm("Burahin ang record na ito?")) setItems(items.filter((x) => x.id !== r.id));
  };
  const exportCSV = () => {
    const blob = new Blob([toCSV(columns, rows)], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${storeKey}.csv`;
    a.click();
  };

  return (
    <div>
      <div className="page-head">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button className="btn teal no-print" onClick={openNew}>{addLabel || "Add record"}</button>
      </div>

      <div className="toolbar no-print">
        <input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search records" />
        <button className="btn ghost" onClick={exportCSV}>Export CSV</button>
        <button className="btn ghost" onClick={() => window.print()}>Print</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((c) => <th key={c.key}>{c.label}</th>)}
              <th className="no-print">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                {columns.map((c) => (
                  <td key={c.key}>
                    {c.badge ? <span className={badgeClass(r[c.key])}>{r[c.key]}</span>
                      : c.money ? money(r[c.key]) : r[c.key]}
                  </td>
                ))}
                <td className="actions no-print">
                  <button className="btn ghost sm" onClick={() => openEdit(r)}>Edit</button>
                  <button className="btn danger sm" onClick={() => remove(r)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <div className="empty">Walang nahanap na record. I-click ang "{addLabel || "Add record"}" para magdagdag.</div>}
      </div>

      {editing && (
        <div className="modal-bg" onClick={close}>
          <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={save}>
            <h3>{editing.id ? "Edit record" : addLabel || "Add record"}</h3>
            <div className="form-grid">
              {fields.map((f) => (
                <div key={f.key} className={f.full ? "full" : ""}>
                  <label htmlFor={f.key}>{f.label}</label>
                  {f.type === "select" ? (
                    <select id={f.key} value={form[f.key] ?? ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}>
                      {f.options.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input id={f.key} type={f.type || "text"} required
                      value={form[f.key] ?? ""} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
                  )}
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <button type="button" className="btn ghost" onClick={close}>Cancel</button>
              <button type="submit" className="btn teal">Save record</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}