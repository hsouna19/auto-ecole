import "../ItemSteps.css"
import { Link, useLocation } from "react-router-dom"

const steps = [
  { id: 1, title: "المقاطعة", path: "/theme4" },
  { id: 2, title: "قواعد المجاوزة", path: "/theme4/temporary" },
  { id: 3, title: "المجاوزة السليمة", path: "/theme4/xxxxx" }
]

function Item4Steps(){

  const location = useLocation()

  return (

    <div className="lessonSteps">

      {steps.map(step => (

        <Link
          key={step.id}
          to={step.path}
          className={`stepItem ${
            location.pathname === step.path ? "active" : ""
          }`}
        >

          <span className="stepTitle">
            {step.title}
          </span>

          <span className="stepCircle">
            {step.id}
          </span>

        </Link>

      ))}

      <div className="verticalLine"></div>

    </div>

  )

}

export default Item4Steps