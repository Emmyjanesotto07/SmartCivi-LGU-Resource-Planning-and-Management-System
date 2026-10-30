import { readStore } from "../hooks/useLocalStore";
import { seed } from "../data/seed";

const get = (k) => readStore(k, seed[k]);
const peso = (n) => "₱" + n.toLocaleString("en-PH");

export default function Dashboard() {
  const births = get("births"), marriages = get("marriages"), deaths = get("deaths");
  const certs = get("certificates"), resources = get("resources"), budget = get("budget"), staff = get("personnel");

  const pendingRegs = [...births, ...marriages, ...deaths].filter((r) => r.status === "Pending").length;
  const openRequests = certs.filter((c) => c.status !== "Released" && c.status !== "Rejected").length;
  const collected = certs.filter((c) => c.status === "Released").reduce((s, c) => s + Number(c.fee), 0);
  const allocated = budget.reduce((s, b) => s + Number(b.allocated), 0);
  const spent = budget.reduce((s, b) => s + Number(b.spent), 0);
  const overBudget = budget.filter((b) => b.spent > b.allocated);
  const lowResources = resources.filter((r) => ["Poor", "Low stock"].includes(r.condition));

  const stats = [
    ["Birth records", births.length], ["Marriage records", marriages.length], ["Death records", deaths.length],
    ["Pending registrations", pendingRegs], ["Open certificate requests", openRequests],
    ["Fees collected", peso(collected)], ["Resources tracked", resources.length], ["Active personnel", staff.filter((s) => s.status === "Active").length],
  ];

  return (
    <div>
      <div className="page-head"><div><h2>Dashboard</h2><p>Overview of civil registry records and LGU resources.</p></div></div>

      <div className="stats">
        {stats.map(([label, value]) => (
          <div className="stat" key={label}><b>{value}</b><span>{label}</span></div>
        ))}
      </div>

      <div className="panel">
        <h3>Budget used: {peso(spent)} of {peso(allocated)} ({allocated ? Math.round((spent / allocated) * 100) : 0}%)</h3>
        {budget.map((b) => {
          const pct = b.allocated ? Math.round((b.spent / b.allocated) * 100) : 0;
          return (
            <div className="bar-row" key={b.id}>
              <span className="lbl">{b.department}</span>
              <div className="bar" style={{ width: Math.min(pct, 100) * 3, background: pct > 100 ? "#b42318" : undefined }} />
              <span>{pct}%</span>
            </div>
          );
        })}
      </div>

      <div className="panel">
        <h3>Needs attention</h3>
        {overBudget.length === 0 && lowResources.length === 0 && pendingRegs === 0 && <p>Walang kailangang asikasuhin ngayon.</p>}
        <ul>
          {pendingRegs > 0 && <li>{pendingRegs} registration(s) ang naghihintay ng approval.</li>}
          {overBudget.map((b) => <li key={b.id}>{b.department} ({b.item}) ay lampas na sa budget ng {peso(b.spent - b.allocated)}.</li>)}
          {lowResources.map((r) => <li key={r.id}>{r.name} ay {r.condition.toLowerCase()} sa {r.department}.</li>)}
        </ul>
      </div>
    </div>
  );
}