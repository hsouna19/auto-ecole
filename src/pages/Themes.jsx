import "../styles/themes.css"
import { Link } from "react-router-dom"

const themes = [

{
id: 1,
title: "السائق والعربة",
image: process.env.PUBLIC_URL + "/images/theme1.jpg",
color: "#19b5c9",
path: "/theme1"
},

{
id: 2,
title: "إشارات وعلامات الطريق",
image: process.env.PUBLIC_URL + "/images/theme2.jpg",
color: "#6c63ff",
path: "/theme2"
},

{
id: 3,
title: "الوقوف والتوقف",
image: process.env.PUBLIC_URL + "/images/theme3.jpg",
color: "#52b788",
path: "/theme3"
},

{
id: 4,
title: "المقاطعة والمجاوزة",
image: process.env.PUBLIC_URL + "/images/theme4.jpg",
color: "#2a9d8f",
path: "/theme4"
},

{
id: 5,
title: "أولوية المرور",
image: process.env.PUBLIC_URL + "/images/theme5.jpg",
color: "#4361ee",
path: "/theme5"
},

{
id: 6,
title: "قواعد الجولان",
image: process.env.PUBLIC_URL + "/images/theme6.jpg",
color: "#f15bb5",
path: "/theme6"
},

{
id: 7,
title: "جرائم الجولان",
image: process.env.PUBLIC_URL + "/images/theme7.jpg",
color: "#4895ef",
path: "/theme7"
},

{
id: 8,
title: "الإسعافات الأولية",
image: process.env.PUBLIC_URL + "/images/theme8.jpg",
color: "#f94144",
path: "/theme8"
},

{
id: 9,
title: "الصيانة الوقائية والتحكم في الطاقة",
image: process.env.PUBLIC_URL + "/images/theme9.jpg",
color: "#6c757d",
path: "/theme9"
},

{
id: 10,
title: "نقل المواد الخطرة عبر الطرقات",
image: process.env.PUBLIC_URL + "/images/theme10.jpg",
color: "#f9a826",
path: "/theme10"
}

]

function Themes(){

return(

<div className="container">

<h1 className="title">المحاور</h1>

<div className="grid">

{themes.map(theme => (

<Link
to={theme.path}
key={theme.id}
className="card-link"
>

<div className="card">

<div
className="card-header"
style={{ backgroundColor: theme.color }}
>

{theme.id} - {theme.title}

</div>

<img
src={theme.image}
alt={theme.title}
className="card-image"
/>

</div>

</Link>

))}

</div>

</div>

)

}

export default Themes