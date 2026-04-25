import "../../styles/theme1.css"

export default function Theme2Step7() {

const indicationSigns = [

{
text:"الدخول إلى طريق سيارة",
img:"/images/motorway.png"
},

{
text:"مأوى للوقوف",
img:"/images/parking.png"
},

{
text:"مأوى للوقوف محدد بالوقت و مراقب بأسطوانة",
img:"/images/parking-disc.png"
},

{
text:"مأوى للوقوف بمقابل",
img:"/images/paid-parking1.png"
},

{
text:"إشارات مختلفة",
img:"/images/various-signs.png"
},

{
text:"محطة حافلات",
img:"/images/bus-stop.png"
},

{
text:"محطة مترو أو ترامواي",
img:"/images/tram.png"
},

{
text:"جولان في اتجاه واحد",
img:"/images/one-way.png"
},

{
text:"ممر بدون منفذ",
img:"/images/no-through1.png"
},

{
text:"ممر بدون منفذ",
img:"/images/no-through2.png"
},

{
text:"الأولوية بالنسبة للجولان من الإتجاه المعاكس",
img:"/images/priority-opposite1.png"
},

{
text:"السرعة المحددة",
img:"/images/speed-limit1.png"
},

{
text:"نهاية السرعة المحددة",
img:"/images/end-speed-limit1.png"
},

{
text:"علامات لكل مسلك",
img:"/images/lane-signs.png"
},

{
text:"إعلان تقلص عدد مسالك بطريق ذات معدلات منفصلة",
img:"/images/lane-reduction.png"
},

{
text:"فتحة للمجاوزة ذات ثلاث مسالك : مسلكان مع مسلك واحد",
img:"/images/overtaking-lane.png"
},

{
text:"إعلان عن نجدة",
img:"/images/emergency-area.png"
},

{
text:"طريق للسيارات",
img:"/images/road-for-cars.png"
},

{
text:"نهاية طريق للسيارات",
img:"/images/end-road-for-cars.png"
},

{
text:"ممر للمترجلين",
img:"/images/pedestrian-crossing1.png"
},

{
text:"مخفض سرعة من نوع مسنم",
img:"/images/speed-bump1.png"
},

{
text:"مركز هاتف",
img:"/images/emergency-phone.png"
},

{
text:"تجهيزات سهلة البلوغ بالنسبة للمعوقين بدنيا",
img:"/images/disabled-access.png"
},

{
text:"معلومات حول خدمات أو أنشطة سياحية",
img:"/images/tourist-info.png"
},

{
text:"فندق للشباب",
img:"/images/youth-hostel.png"
},

{
text:"موقع للنزهة",
img:"/images/picnic-site.png"
},

{
text:"مستشفى",
img:"/images/hospital2.png"
},

{
text:"مكان تخييم في مقطورات",
img:"/images/caravan-camping.png"
},

{
text:"بيان المسالك المخصصة لكل اتجاه جولان",
img:"/images/lane-direction.png"
},

{
text:"نهاية جزء الطريق المبينة فيه المسالك المخصصة لكل اتجاه جولان",
img:"/images/end-lane-direction.png"
},

{
text:"محطة سيارات تاكسي",
img:"/images/taxi.png"
},

{
text:"الخروج من طريق سيارة",
img:"/images/end-motorway.png"
},

{
text:"علامة اتجاه",
img:"/images/direction-sign.png"
},

{
text:"علامة متقدمة تشير الى التجمعات السكنية القريبة",
img:"/images/advance-direction.png"
},

{
text:"بداية موطن عمران",
img:"/images/start-urban.png"
},

{
text:"نهاية موطن عمران",
img:"/images/end-urban.png"
},

{
text:"علامة اشعار مع بيان المسافة",
img:"/images/distance-sign.png"
}

]


return (

<div className="lesson-page">

<h1 className="lesson-title">علامات الإرشاد</h1>

<h2 className="lesson-subtitle">علامات الإرشاد</h2>

<div className="signs-container">

{indicationSigns.map((sign,index)=>(

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

<li>علامات الإرشاد تقدم معلومات مفيدة لمستعملي الطريق.</li>

<li>تدل على الخدمات أو الاتجاهات أو المرافق المتوفرة.</li>

</ul>

</div>

)

}