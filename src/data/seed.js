export const seed = {
  births: [
    { id: 1, regNo: "B-2026-0001", childName: "Juan Miguel Dela Cruz", sex: "Male", dob: "2026-01-12", placeOfBirth: "Lucena City", mother: "Maria Dela Cruz", father: "Jose Dela Cruz", status: "Registered" },
    { id: 2, regNo: "B-2026-0002", childName: "Angelica Santos", sex: "Female", dob: "2026-02-03", placeOfBirth: "Tayabas", mother: "Liza Santos", father: "Ramon Santos", status: "Registered" },
    { id: 3, regNo: "B-2026-0003", childName: "Mark Anthony Reyes", sex: "Male", dob: "2026-03-21", placeOfBirth: "Lucena City", mother: "Ana Reyes", father: "Carlos Reyes", status: "Pending" },
  ],
  marriages: [
    { id: 1, regNo: "M-2026-0001", husband: "Pedro Garcia", wife: "Elena Mendoza", dateOfMarriage: "2026-02-14", place: "Lucena City Hall", officiant: "Hon. Mayor", status: "Registered" },
    { id: 2, regNo: "M-2026-0002", husband: "Luis Navarro", wife: "Rosa Bautista", dateOfMarriage: "2026-04-10", place: "St. Ferdinand Cathedral", officiant: "Fr. Antonio Cruz", status: "Pending" },
  ],
  deaths: [
    { id: 1, regNo: "D-2026-0001", deceased: "Teodoro Ramos", sex: "Male", dod: "2026-01-30", age: 78, cause: "Cardiac arrest", place: "Lucena City", status: "Registered" },
    { id: 2, regNo: "D-2026-0002", deceased: "Felisa Aquino", sex: "Female", dod: "2026-03-05", age: 84, cause: "Natural causes", place: "Sariaya", status: "Pending" },
  ],
  certificates: [
    { id: 1, requestNo: "CR-0001", requester: "Maria Dela Cruz", type: "Birth Certificate", purpose: "School enrollment", dateRequested: "2026-10-20", fee: 155, status: "Released" },
    { id: 2, requestNo: "CR-0002", requester: "Pedro Garcia", type: "Marriage Certificate", purpose: "Passport", dateRequested: "2026-10-25", fee: 155, status: "Processing" },
    { id: 3, requestNo: "CR-0003", requester: "Jose Dela Cruz", type: "Death Certificate", purpose: "Insurance claim", dateRequested: "2026-10-28", fee: 155, status: "Pending" },
  ],
  resources: [
    { id: 1, name: "Ambulance Unit 1", category: "Vehicle", department: "Health Office", quantity: 1, condition: "Good", location: "Health Center" },
    { id: 2, name: "Desktop Computers", category: "Equipment", department: "Civil Registry", quantity: 12, condition: "Good", location: "Registry Office" },
    { id: 3, name: "Multipurpose Hall", category: "Facility", department: "General Services", quantity: 1, condition: "Fair", location: "City Hall" },
    { id: 4, name: "Bond Paper (reams)", category: "Supplies", department: "Admin", quantity: 40, condition: "Low stock", location: "Supply Room" },
  ],
  budget: [
    { id: 1, department: "Civil Registry", item: "Office supplies", allocated: 150000, spent: 82000, fiscalYear: 2026 },
    { id: 2, department: "Health Office", item: "Medical supplies", allocated: 500000, spent: 410000, fiscalYear: 2026 },
    { id: 3, department: "General Services", item: "Building maintenance", allocated: 300000, spent: 305000, fiscalYear: 2026 },
  ],
  personnel: [
    { id: 1, name: "Emmy Jane Rivera", position: "Civil Registrar", department: "Civil Registry", status: "Active", contact: "0917-000-0001" },
    { id: 2, name: "Carlo Mendoza", position: "Registry Clerk", department: "Civil Registry", status: "Active", contact: "0917-000-0002" },
    { id: 3, name: "Dr. Ana Villanueva", position: "Health Officer", department: "Health Office", status: "On leave", contact: "0917-000-0003" },
  ],
};