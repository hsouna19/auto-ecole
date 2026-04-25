import "../../styles/theme1.css"

export default function Theme2Step5() {

const dangerSigns = [

{
text:"خطر آخر",
img:"/images/other-danger.png"
},

{
text:"مرتفع ذو إنحناء حاد",
img:"/images/steep-hill.png"
},

{
text:"إعلان عن أضواء ذات ثلاث ألوان",
img:"/images/traffic-lights-ahead.png"
},

{
text:"طريق ضيق من اليمين",
img:"/images/road-narrow-right.png"
},

{
text:"طريق مسنم",
img:"/images/bumpy-road.png"
},

{
text:"ركائز تدل على المسافات",
img:"/images/distance-markers.png"
},

{
text:"معبد زالق",
img:"/images/slippery-road.png"
},

{
text:"طريق ضيق",
img:"/images/narrow-road.png"
},

{
text:"طريق ضيق من اليسار",
img:"/images/road-narrow-left.png"
},

{
text:"مقذوفات حصى",
img:"/images/flying-stones.png"
},

{
text:"خروج دراجات عادية",
img:"/images/bicycle-crossing.png"
},

{
text:"جولان في الإتجاهين",
img:"/images/two-way-traffic.png"
},

{
text:"منحدر خطير",
img:"/images/dangerous-descent.png"
},

{
text:"طريق تنتهي الى رصيف أو حافة نهر",
img:"/images/quay-or-riverbank.png"
},

{
text:"حاشية خطيرة",
img:"/images/dangerous-edge.png"
},

{
text:"تقاطع طريق مع سكة حديدية ذات مسلكين أو أكثر",
img:"/images/railway-crossing-multiple.png"
},

{
text:"تقاطع طريق مع سكة حديدية ذات مسلك واحد",
img:"/images/railway-crossing-single.png"
},

{
text:"مكان يكثر فيه الأطفال",
img:"/images/children.png"
},

{
text:"مرور حيوانات أهلية",
img:"/images/domestic-animals.png"
},

{
text:"تقاطع طريق مع سكة حديدية مجهزة بحواجز و خطوط كهربائية",
img:"/images/railway-barriers-electric.png"
},

{
text:"تقاطع طريق مع سكة حديدية مجهزة بحواجز ذات تشغيل يدوي",
img:"/images/railway-manual-barrier.png"
},

{
text:"تقاطع طريق مع سكة حديدية بدون حواجز أو نصف حواجز",
img:"/images/railway-no-barrier.png"
},

{
text:"عبور خيالة",
img:"/images/horse-riders.png"
},

{
text:"مرور حيوانات وحشية",
img:"/images/wild-animals.png"
},

{
text:"مخفض للسرعة من نوع مسنم",
img:"/images/speed-bump.png"
},

{
text:"جسر متحرك",
img:"/images/movable-bridge.png"
},

{
text:"ممر خاص بالمترجلين",
img:"/images/pedestrian-crossing.png"
},

{
text:"تقاطع طريق مع سكة حديدية مجهزة بإشارات أوتوماتيكية ضوئية و صوتية",
img:"/images/railway-automatic-signals-1.png"
},

{
text:"تقاطع طريق مع سكة حديدية مجهزة بإشارات أوتوماتيكية ضوئية و صوتية",
img:"/images/railway-automatic-signals-2.png"
},

{
text:"خطر سقوط حجارة أو وجود حجارة ساقطة على الطريق",
img:"/images/falling-rocks.png"
},

{
text:"منعرجات متتالية أولها على اليمين",
img:"/images/series-curves-right.png"
},

{
text:"منعرجات متتالية أولها على اليسار",
img:"/images/series-curves-left.png"
},

{
text:"تقاطع طريق مع سكك حديدية ذات مسلكين أو أكثر",
img:"/images/railway-crossing-2plus.png"
},

{
text:"رياح جانبية",
img:"/images/crosswinds.png"
},

{
text:"تقاطع الطريق مع ترامواي أو مترو",
img:"/images/tramway.png"
},

{
text:"عبور منطقة بها خطر طيران",
img:"/images/aircraft-danger.png"
},

{
text:"منعرج خطير على اليسار",
img:"/images/dangerous-curve-left.png"
},

{
text:"منعرج خطير على اليمين",
img:"/images/dangerous-curve-right.png"
}

]


return (

<div className="lesson-page">

<h1 className="lesson-title">علامات الخطر</h1>




<div className="signs-container">

{dangerSigns.map((sign,index)=>(

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

<li>عند وجود علامة خطر أتأهّب و أزيد من اليقظة كي أتعامل مع الخطر.</li>

</ul>


</div>

)

}