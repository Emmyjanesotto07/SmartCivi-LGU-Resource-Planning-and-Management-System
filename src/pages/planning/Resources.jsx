import RecordManager from "../../components/RecordManager";

const columns = [
  { key: "name", label: "Resource" }, { key: "category", label: "Category" }, { key: "department", label: "Department" },
  { key: "quantity", label: "Qty" }, { key: "condition", label: "Condition", badge: true }, { key: "location", label: "Location" },
];
const fields = [
  { key: "name", label: "Resource name", full: true },
  { key: "category", label: "Category", type: "select", options: ["Equipment", "Vehicle", "Facility", "Supplies"] },
  { key: "department", label: "Department" }, { key: "quantity", label: "Quantity", type: "number" },
  { key: "condition", label: "Condition", type: "select", options: ["Good", "Fair", "Poor", "Low stock"] },
  { key: "location", label: "Location", full: true },
];

export default function Resources() {
  return (
    <RecordManager
      storeKey="resources"
      title="Resources"
      description="Track LGU equipment, facilities, vehicles, and supplies."
      addLabel="Add resource"
      columns={columns}
      fields={fields}
    />
  );
}