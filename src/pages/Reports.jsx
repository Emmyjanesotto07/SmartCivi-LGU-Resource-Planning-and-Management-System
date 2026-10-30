import { readStore } from "../hooks/useLocalStore";
import { seed } from "../data/seed";

const get = (k) => readStore(k, seed[k]);
const peso = (n) => "₱" + Number(n).toLocaleString("en-PH");
const countBy = (rows, key) => rows.reduce((m, r) => ((m[r[key]] = (m[r[key]] || 0) + 1), m), {});

function Breakdown({ title, data }) {
  const entries = Object.entries(data);
  const max = Math.max(1, ...entries.map(([, v]) => v));
  return (
    <div className="panel">
      <h3>{title}</h3>
      {entries.length === 0 && <p>Walang data.</p>}
      {entries.map(([k, v]) => (
        <div className="bar-row" key={k}>
          <span className="lbl">{k}</span>
          <div className="bar" style={{ width: (v / max) * 240 }} />
          <span>{v}</span>
        </div>
      ))}
    </div>
  );
}

export default function Reports() {
  const births = get("births"), marriages = get("marriages"), deaths = get("deaths");
  const certs = get("certificates"), budget = get("budget"), resources = get("resources");
  const byDept = budget.reduce((m, b) => {
    m[b.department] = m[b.department] || { allocated: 0, spent: 0 };
    m[b.department].allocated += Number(b.allocated);
    m[b.department].spent += Number(b.spent);
    return m;
  }, {});

  return (
    <div>
      <div className="page-head">
        <div><h2>Reports</h2><p>Summary of registry and resource planning data. Generated {new Date().toLocaleDateString("en-PH")}.</p></div>
        <button className="btn teal no-print" onClick={() => window.print()}>Print report</button>
      </div>

      <Breakdown title="Registry records" data={{ Births: births.length, Marriages: marriages.length, Deaths: deaths.length }} />
      <Breakdown title="Certificate requests by type" data={countBy(certs, "type")} />
      <Breakdown title="Certificate requests by status" data={countBy(certs, "status")} />
      <Breakdown title="Resources by category" data={countBy(resources, "category")} />

      <div className="panel">
        <h3>Budget by department</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Department</th><th>Allocated</th><th>Spent</th><th>Remaining</th></tr></thead>
            <tbody>
              {Object.entries(byDept).map(([d, v]) => (
                <tr key={d}>
                  <td>{d}</td><td>{peso(v.allocated)}</td><td>{peso(v.spent)}</td>
                  <td style={{ color: v.allocated - v.spent < 0 ? "#b42318" : undefined }}>{peso(v.allocated - v.spent)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}