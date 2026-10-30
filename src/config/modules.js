import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import Births from "../pages/registry/Births";
import Marriages from "../pages/registry/Marriages";
import Deaths from "../pages/registry/Deaths";
import Certificates from "../pages/registry/Certificates";
import Resources from "../pages/planning/Resources";
import Budget from "../pages/planning/Budget";
import Personnel from "../pages/planning/Personnel";

export const sections = [
  { title: "Overview", items: [{ key: "dashboard", label: "Dashboard", component: Dashboard }] },
  {
    title: "Civil Registry",
    items: [
      { key: "births", label: "Births", component: Births },
      { key: "marriages", label: "Marriages", component: Marriages },
      { key: "deaths", label: "Deaths", component: Deaths },
      { key: "certificates", label: "Certificates", component: Certificates },
    ],
  },
  {
    title: "Resource Planning",
    items: [
      { key: "resources", label: "Resources", component: Resources },
      { key: "budget", label: "Budget", component: Budget },
      { key: "personnel", label: "Personnel", component: Personnel },
    ],
  },
  { title: "Analytics", items: [{ key: "reports", label: "Reports", component: Reports }] },
];