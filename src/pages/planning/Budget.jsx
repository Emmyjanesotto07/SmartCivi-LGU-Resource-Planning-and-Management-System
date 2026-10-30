import RecordManager from "../../components/RecordManager";

const columns = [
  { key: "department", label: "Department" }, { key: "item", label: "Budget item" }, { key: "fiscalYear", label: "FY" },
  { key: "allocated", label: "Allocated", money: true }, { key: "spent", label: "Spent", money: true },
];
const fields = [
  { key: "department", label: "Department" }, { key: "item", label: "Budget item" },
  { key: "fiscalYear", label: "Fiscal year", type: "number" }, { key: "allocated", label: "Allocated (PHP)", type: "number" },
  { key: "spent", label: "Spent (PHP)", type: "number" },
];

export default function Budget() {
  return (
    <RecordManager
      storeKey="budget"
      title="Budget"
      description="Plan and monitor department budgets."
      addLabel="Add budget item"
      columns={columns}
      fields={fields}
    />
  );
}