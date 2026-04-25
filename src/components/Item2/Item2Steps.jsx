import "../ItemSteps.css"
import { Link, useLocation } from "react-router-dom"

const steps = [

  {
    id:1,
    title:"تقديم علامات المرور",
    path:"/theme2"
  },

  {
    id:2,
    title:"الإشارات العمودية",
    path:"/theme2/vertical-signs"
  },

  {
    id:3,
    title:"رسوم الطريق",
    path:"/theme2/road-markings"
  },

  {
    id:4,
    title:"قائمة علامات المنع و إنتهاء المنع",
    path:"/theme2/prohibition"
  },

  {
    id:5,
    title:"قائمة علامات الخطر",
    path:"/theme2/danger"
  },

  {
    id:6,
    title:"قائمة علامات الجبر و إنتهاء الجبر",
    path:"/theme2/obligation"
  },

  {
    id:7,
    title:"قائمة علامات الإرشاد",
    path:"/theme2/information"
  },

  {
    id:8,
    title:"علامات وقتية",
    path:"/theme2/temporary"
  }

]

function Lesson2Steps(){

  const location = useLocation()

  return (

    <div className="lessonSteps">

      <div className="verticalLine"></div>

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

    </div>

  )

}

export default Lesson2Steps