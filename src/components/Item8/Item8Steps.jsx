import "../ItemSteps.css"
import { Link, useLocation } from "react-router-dom"

const steps = [
  { id: 1, title: "الحوادث", path: "/theme8" },
  { id: 2, title: "الإسعافات الأولية", path: "/theme8/first-aid" }
]

function Item8Steps() {
  const location = useLocation()

  return (
    <div className="lessonSteps">

      {steps.map((step) => (
        <Link
          key={step.id}
          to={step.path}
          className={`stepItem ${location.pathname === step.path ? "active" : ""}`}
        >
          <span className="stepTitle">{step.title}</span>
          <span className="stepCircle">{step.id}</span>
        </Link>
      ))}

      <div className="verticalLine"></div>

    </div>
  )
}

export default Item8Steps