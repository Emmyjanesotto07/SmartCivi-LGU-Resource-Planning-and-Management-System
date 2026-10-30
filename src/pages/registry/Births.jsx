import RecordManager from "../../components/RecordManager";

const columns = [
  { key: "regNo", label: "Reg. No." }, { key: "childName", label: "Child" }, { key: "sex", label: "Sex" },
  { key: "dob", label: "Date of birth" }, { key: "placeOfBirth", label: "Place of birth" },
  { key: "mother", label: "Mother" }, { key: "father", label: "Father" }, { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "regNo", label: "Registry number" }, { key: "childName", label: "Child full name", full: true },
  { key: "sex", label: "Sex", type: "select", options: ["Male", "Female"] }, { key: "dob", label: "Date of birth", type: "date" },
  { key: "placeOfBirth", label: "Place of birth" }, { key: "mother", label: "Mother full name" },
  { key: "father", label: "Father full name" },
  { key: "status", label: "Status", type: "select", options: ["Registered", "Pending", "Rejected"] },
];

export default function Births() {
  return (
    <RecordManager
      storeKey="births"
      title="Birth Records"
      description="Register and manage birth records."
      addLabel="Add birth record"
      columns={columns}
      fields={fields}
    />
  );
}