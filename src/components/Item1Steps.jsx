import "./ItemSteps.css"
import { Link, useLocation } from "react-router-dom"

const steps = [

  {
    id:1,
    title:"لوحة القيادة",
    path:"/theme1"
  },

  {
    id:2,
    title:"أضواء السيارة",
    path:"/theme1/lights"
  }

]

function LessonSteps(){

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

export default LessonSteps