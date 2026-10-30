import RecordManager from "../../components/RecordManager";

const columns = [
  { key: "requestNo", label: "Request No." }, { key: "requester", label: "Requester" }, { key: "type", label: "Certificate" },
  { key: "purpose", label: "Purpose" }, { key: "dateRequested", label: "Date" }, { key: "fee", label: "Fee", money: true },
  { key: "status", label: "Status", badge: true },
];
const fields = [
  { key: "requestNo", label: "Request number" }, { key: "requester", label: "Requester name" },
  { key: "type", label: "Certificate type", type: "select", options: ["Birth Certificate", "Marriage Certificate", "Death Certificate", "CENOMAR"] },
  { key: "purpose", label: "Purpose" }, { key: "dateRequested", label: "Date requested", type: "date" },
  { key: "fee", label: "Fee (PHP)", type: "number" },
  { key: "status", label: "Status", type: "select", options: ["Pending", "Processing", "Released", "Rejected"] },
];

export default function Certificates() {
  return (
    <RecordManager
      storeKey="certificates"
      title="Certificate Requests"
      description="Process requests for civil registry certificates."
      addLabel="Add request"
      columns={columns}
      fields={fields}
    />
  );
}