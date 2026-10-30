import RecordManager from "../../components/RecordManager";

const columns = [
  { key: "regNo", label: "Reg. No." }, { key: "deceased", label: "Deceased" }, { key: "sex", label: "Sex" },
  { key: "dod", label: "Date of death" }, { key: "age", label: "Age" }, { key: "cause", label: "Cause" },
  { key: "place", label: "Place" }, { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "regNo", label: "Registry number" }, { key: "deceased", label: "Deceased full name", full: true },
  { key: "sex", label: "Sex", type: "select", options: ["Male", "Female"] }, { key: "age", label: "Age", type: "number" },
  { key: "dod", label: "Date of death", type: "date" }, { key: "place", label: "Place of death" },
  { key: "cause", label: "Cause of death", full: true },
  { key: "status", label: "Status", type: "select", options: ["Registered", "Pending", "Rejected"] },
];

export default function Deaths() {
  return (
    <RecordManager
      storeKey="deaths"
      title="Death Records"
      description="Register and manage death records."
      addLabel="Add death record"
      columns={columns}
      fields={fields}
    />
  );
}