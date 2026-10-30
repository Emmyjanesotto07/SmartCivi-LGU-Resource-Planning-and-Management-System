import { sections } from "../config/modules";

function Sidebar({ current, onNavigate }) {
  return (
    <aside className="sidebar">
      <h2>SmartCivi</h2>
      {sections.map((section) => (
        <div className="grp" key={section.title}>
          <div className="grp-title">{section.title}</div>
          {section.items.map((item) => (
            <button key={item.key} className={current === item.key ? "active" : ""} onClick={() => onNavigate(item.key)}>
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;