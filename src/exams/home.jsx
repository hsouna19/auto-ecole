import "./home.css"
import { Link } from "react-router-dom"

const exams = [
  {
    id: 1,
    title: "الصيانة الوقائية والتحكم في الطاقة",
  },
  {
    id: 2,
    title: "السائق والعربة",
  },
  {
    id: 3,
    title: "إشارات وعلامات الطريق",
  },
  {
    id: 4,
    title: "الإسعافات الأولية",
  },
  {
    id: 5,
    title: "أولوية المرور",
  },
  {
    id: 6,
    title: "جرائم الجولان",
  },
  {
    id: 7,
    title: "نقل المواد الخطرة عبر الطرقات",
  },
  {
    id: 8,
    title: "الوقوف والتوقف",
  }
]

export default function Exams() {
  return (
    <div className="exams-page" dir="rtl">
      {exams.map((exam) => (
        <div key={exam.id} className="exam-card">

          <div className="exam-left">
            <Link to={`/exam/${exam.id}`} className="exam-btn">
              إجراء الاختبار
            </Link>

            <Link to={`/exam/result/${exam.id}`} className="exam-btn">
              النتيجة
            </Link>
          </div>

          <div className="exam-center">
            <h2>{exam.title}</h2>
          </div>

        </div>
      ))}
    </div>
  )
}