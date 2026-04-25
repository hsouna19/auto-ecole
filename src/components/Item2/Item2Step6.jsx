import "../../styles/theme1.css"

export default function Theme2Step6() {

const obligationSigns = [

{
text:"سبيل إجباري للمترجلين",
img:"/images/mandatory-pedestrian.png"
},

{
text:"سبيل إجباري لركبي الخيول",
img:"/images/mandatory-horse.png"
},

{
text:"استعمال سلاسل الثلوج إجباري على مستوى عجلتين محركتين على الأقل",
img:"/images/snow-chains.png"
},

{
text:"إتجاه إلى اليسار إجباري في المفترق القادم",
img:"/images/mandatory-left.png"
},

{
text:"حاجز يجب الإحاطة به من اليسار",
img:"/images/keep-left.png"
},

{
text:"حاجز يجب الإحاطة به من اليمين",
img:"/images/keep-right.png"
},

{
text:"إتجاه إلى الأمام إجباري في المفترق القادم",
img:"/images/mandatory-straight.png"
},

{
text:"إتجاه إلى اليمين إجباري في المفترق القادم",
img:"/images/mandatory-right.png"
},

{
text:"إتجاه إلى اليمين أو إلى اليسار إجباري في المفترق القادم",
img:"/images/mandatory-right-left.png"
},

{
text:"إتجاه إلى الأمام أو إلى اليسار إجباري في المفترق القادم",
img:"/images/mandatory-straight-left.png"
},

{
text:"إتجاه إلى الأمام أو إلى اليمين إجباري في المفترق القادم",
img:"/images/mandatory-straight-right.png"
},

{
text:"نهاية جبر منصوص عليه بكتابة على العلامة",
img:"/images/end-text.png"
},

{
text:"مسلك أو سبيل إجباري للدراجات بدون عربة جانبية أو مجرورة",
img:"/images/mandatory-bicycle.png"
},

{
text:"إتجاه دوراني إجباري",
img:"/images/mandatory-roundabout.png"
},

{
text:"الدوران إلى اليمين إجباري قبل العلامة",
img:"/images/turn-right-before.png"
},

{
text:"مسلك خاص بعربات الخدمات المنتظمة للنقل العمومي للأشخاص",
img:"/images/mandatory-bus.png"
},

{
text:"أدنى سرعة إجبارية",
img:"/images/minimum-speed.png"
},

{
text:"الدوران إلى اليسار إجباري قبل العلامة",
img:"/images/turn-left-before.png"
},

{
text:"مسلك خاص بعربات الخدمات المنتظمة للنقل العمومي للأشخاص",
img:"/images/mandatory-tram.png"
}

]


const endObligationSigns = [

{
text:"نهاية سبيل إجباري للمترجلين",
img:"/images/end-pedestrian.png"
},

{
text:"نهاية جبر استعمال سلاسل الثلوج",
img:"/images/end-snow-chains.png"
},

{
text:"نهاية مسلك أو سبيل إجباري للدراجات",
img:"/images/end-bicycle.png"
},

{
text:"نهاية أدنى سرعة إجبارية",
img:"/images/end-minimum-speed.png"
},

{
text:"نهاية الممر خاص بعربات الخدمات المنتظمة للنقل العمومي للأشخاص",
img:"/images/end-bus.png"
},

{
text:"نهاية الممر خاص بعربات الخدمات المنتظمة للنقل العمومي للأشخاص",
img:"/images/end-tram.png"
},

{
text:"نهاية سبيل إجباري لركبي الخيول",
img:"/images/end-horse.png"
}

]


return (

<div className="lesson-page">

<h1 className="lesson-title">
قائمة علامات الجبر و إنتهاء الجبر
</h1>




<h2 className="lesson-subtitle">
علامات الجبر
</h2>

<div className="signs-container">

{obligationSigns.map((sign,index)=>(

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



<h2 className="lesson-subtitle">
علامات نهاية الجبر
</h2>

<div className="signs-container">

{endObligationSigns.map((sign,index)=>(

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



<h2 className="lesson-subtitle">
تلخيص
</h2>

<ul className="lesson-list">

<li>علامات الجبر تفرض اتجاه أو مسلك معين.</li>

<li>علامات نهاية الجبر تعني أن الإجبار لم يعد ساريا.</li>

</ul>


</div>

)

}