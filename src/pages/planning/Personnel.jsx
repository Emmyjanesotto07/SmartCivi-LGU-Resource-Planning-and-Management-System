import RecordManager from "../../components/RecordManager";

const columns = [
  { key: "name", label: "Name" }, { key: "position", label: "Position" }, { key: "department", label: "Department" },
  { key: "contact", label: "Contact" }, { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "name", label: "Full name", full: true }, { key: "position", label: "Position" }, { key: "department", label: "Department" },
  { key: "contact", label: "Contact number" },
  { key: "status", label: "Status", type: "select", options: ["Active", "On leave", "Inactive"] },
];

export default function Personnel() {
  return (
    <RecordManager
      storeKey="personnel"
      title="Personnel"
      description="Manage staff and assignments."
      addLabel="Add personnel"
      columns={columns}
      fields={fields}
    />
  );
}