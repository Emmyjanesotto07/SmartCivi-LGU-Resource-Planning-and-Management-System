import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { sections } from "./config/modules";

const allItems = sections.flatMap((s) => s.items);

function App() {
  const [current, setCurrent] = useState("dashboard");
  const Page = allItems.find((i) => i.key === current).component;

  return (
    <div className="app">
      <Sidebar current={current} onNavigate={setCurrent} />
      <div className="main">
        <header className="topbar">
          <h1>SmartCivi</h1>
          <small>A Smart Civil Registry and Resource Planning Platform for Local Government Units (LGUs)</small>
        </header>
        <main className="content">
          <Page key={current} />
        </main>
      </div>
    </div>
  );
}

export default App;