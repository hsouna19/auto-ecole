import "../ItemSteps.css"
import { Link, useLocation } from "react-router-dom"

const steps = [
  { id: 1, title: "السرعة", path: "/theme6" },
  { id: 2, title: "السرعة و المسافات", path: "/theme6/speed-distance" },
  { id: 3, title: "تغيير الإتجاه", path: "/theme6/direction" },
  { id: 4, title: "الطريق السيّارة", path: "/theme6/highway" }
]

function Item6Steps() {
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

export default Item6Steps