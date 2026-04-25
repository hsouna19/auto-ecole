import "../../styles/theme1.css"

export default function Theme2Step8() {

const temporaryDangerSigns = [

{
text:"أشغال",
img:"/images/works.png"
},

{
text:"مقذوفات حصى",
img:"/images/gravel.png"
},

{
text:"طريق ضيق",
img:"/images/narrow-road1.png"
},

{
text:"أخطار أخرى",
img:"/images/other-danger1.png"
},

{
text:"معبد زلق",
img:"/images/slippery-road1.png"
},

{
text:"طريق مسنم",
img:"/images/bumpy-road1.png"
},

{
text:"إعلان عن إشارات ضوئية تنظم الجولان",
img:"/images/temporary-traffic-light.png"
},

{
text:"علامة موضعية تشير إلى حدود حواجز وقتية",
img:"/images/cone.png"
},

{
text:"تحديد مسلك السير",
img:"/images/temporary-lane.png"
},

{
text:"علامة موضعية تشير إلى تغيير الاتجاه أو إلى تقلص عرض المعبد مؤقتا",
img:"/images/temporary-chevron.png"
},

{
text:"أوتاد متحركة : يسمح أو يمنع المرور",
img:"/images/temporary-post.png"
},

{
text:"علامة إرشاد",
img:"/images/temporary-direction1.png"
},

{
text:"علامة إرشاد",
img:"/images/temporary-direction2.png"
},

{
text:"علامة إرشاد",
img:"/images/temporary-direction3.png"
},

{
text:"تغيير الاتجاه",
img:"/images/temporary-tunis.png"
},

{
text:"تغيير الاتجاه",
img:"/images/deviation.png"
},

{
text:"يمنع تجاوز السرعة المبينة بالعلامة",
img:"/images/deviation-speed.png"
},

{
text:"تغيير الاتجاه",
img:"/images/deviation-bizerte.png"
},



{
text:"نهاية تغيير الاتجاه",
img:"/images/deviation-end.png"
},



]

return (

<div className="lesson-page">

<h1 className="lesson-title">علامات الخطر المؤقت</h1>

<h2 className="lesson-subtitle">علامات الخطر المؤقت</h2>

<div className="signs-container">

{temporaryDangerSigns.map((sign,index)=>(

<div key={index} className="sign-card">

<div className="sign-text">
{sign.text}
</div>

<div className="sign-image-box">
<img src={sign.img} className="sign-image"/>
</div>

</div>

))}

</div>

<h2 className="lesson-subtitle">تلخيص</h2>

<ul className="lesson-list">

<li>علامات الخطر المؤقت تنبه السائق إلى وجود أشغال أو تغيير مؤقت في الطريق.</li>

<li>يجب التخفيض من السرعة والانتباه جيداً عند مشاهدة هذه العلامات.</li>

</ul>

</div>

)

}