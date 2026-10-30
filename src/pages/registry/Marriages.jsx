import RecordManager from "../../components/RecordManager";

const columns = [
  { key: "regNo", label: "Reg. No." }, { key: "husband", label: "Husband" }, { key: "wife", label: "Wife" },
  { key: "dateOfMarriage", label: "Date" }, { key: "place", label: "Place" }, { key: "officiant", label: "Officiant" },
  { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "regNo", label: "Registry number" }, { key: "dateOfMarriage", label: "Date of marriage", type: "date" },
  { key: "husband", label: "Husband full name" }, { key: "wife", label: "Wife full name" },
  { key: "place", label: "Place of marriage" }, { key: "officiant", label: "Solemnizing officer" },
  { key: "status", label: "Status", type: "select", options: ["Registered", "Pending", "Rejected"] },
];

export default function Marriages() {
  return (
    <RecordManager
      storeKey="marriages"
      title="Marriage Records"
      description="Register and manage marriage records."
      addLabel="Add marriage record"
      columns={columns}
      fields={fields}
    />
  );
}