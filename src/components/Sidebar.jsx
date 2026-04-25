import "./sidebar.css"
import { useNavigate, useLocation } from "react-router-dom"

const menuItems = [
  { label: "قواعد الجولان", key: "rules", path: "/rules" },
  { label: "حوصلة", key: "summary", path: "/summary" },
  { label: "إختبارات", key: "tests", path: "/tests" },
  { label: "دروس", key: "lessons", path: "/" },
  { label: "أسئلة ومتابعة", key: "questions", path: "/questions" },
  { label: "تفاصيل التدريب 📷", key: "training", path: "/training", className: "training" },
]

function Sidebar({ open, setOpen }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <button
        className={`toggle-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ➤
      </button>

      <aside className={`sidebar ${open ? "open" : "closed"}`}>
        <h3 className="logo">
          auto-école Mohamed Ali Falfoul
        </h3>

        <hr />

        <ul>
          {menuItems.map(item => (
            <li
              key={item.key}
              onClick={() => navigate(item.path)}
              className={`${location.pathname === item.path ? "active" : ""} ${item.className || ""}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar