import "../../styles/theme1.css"

export default function Theme2Step4() {

const prohibitionSigns = [

{
text:"ممنوع الجولان على عربات نقل البضائع",
img:"/images/prohibition-trucks.png"
},

{
text:"ممنوع الجولان على العربات التي يفوق علوها باعتبار الحمولة العلو المبين بالعلامة",
img:"/images/height-limit.png"
},

{
text:"ممنوع الجولان على العربات التي يفوق عرضها باعتبار الحمولة العرض المبين بالعلامة",
img:"/images/width-limit.png"
},

{
text:"ممنوع الجولان على العربات التي يفوق طولها باعتبار الحمولة الطول المبين بالعلامة",
img:"/images/length-limit.png"
},

{
text:"ممنوع الجولان على العربات الناقلة لمواد خطرة",
img:"/images/dangerous-goods.png"
},

{
text:"ممنوع الجولان على العربات التي يفوق وزنها على المغزل الواحد طنين اثنين",
img:"/images/axle-weight.png"
},

{
text:"ممنوع الجولان في الاتجاهين",
img:"/images/no-entry-both.png"
},

{
text:"ممنوع الجولان على الحافلات",
img:"/images/no-bus.png"
},

{
text:"ممنوع الجولان على العربات المجرورة باليد",
img:"/images/no-hand-cart.png"
},

{
text:"ممنوع الجولان على الدراجات",
img:"/images/no-bicycle.png"
},

{
text:"ممنوع الجولان على الدراجات النارية الصغيرة",
img:"/images/no-small-motorcycle.png"
},

{
text:"ممنوع الجولان على العربات التي يفوق وزنها الجملي المرخص فيه الحد المبين بالعلامة",
img:"/images/weight-limit.png"
},

{
text:"ممنوع الجولان على المترجلين",
img:"/images/no-pedestrians.png"
},

{
text:"ممنوع الجولان على العربات ذات محرك",
img:"/images/no-motor-vehicles.png"
},

{
text:"ممنوع الجولان على المعدات الفلاحية ذات محرك",
img:"/images/no-tractor.png"
},

{
text:"ممنوع الجولان على الدراجات النارية المتوسطة و الكبيرة",
img:"/images/no-motorcycle.png"
},

{
text:"يمنع تجاوز السرعة المبينة بالعلامة",
img:"/images/speed-limit.png"
},

{
text:"ممنوع الدوران على اليسار في المفترق القادم",
img:"/images/no-left-turn.png"
},

{
text:"ممنوع الدوران على اليمين في المفترق القادم",
img:"/images/no-right-turn.png"
},

{
text:"يمنع الرجوع على الأعقاب",
img:"/images/no-u-turn.png"
},
{
text:"ممنوع الجولان على العربات المجرورة بحيوان",
img:"/images/prohibition-animal.png"
},

{
text:"ممنوع المرور دون التوقف شرطة",
img:"/images/stop-police.png"
},

{
text:"ممنوع المرور دون التوقف مركز استخلاص",
img:"/images/stop-peage.png"
},

{
text:"ممنوع المرور دون التوقف ديوانة",
img:"/images/stop-douane.png"
},

{
text:"ممنوع المرور دون التوقف حرس وطني",
img:"/images/stop-gendarmerie.png"
},

{
text:"أولوية المرور للعربات القادمة من الاتجاه المقابل",
img:"/images/priority-opposite.png"
},

{
text:"ممنوع الجولان على العربات الناقلة لكمية معينة من مواد متفجرة أو سريعة الالتهاب",
img:"/images/explosive.png"
},

{
text:"ممنوع استعمال المنبهات الصوتية",
img:"/images/no-horn.png"
},

{
text:"اتجاه محجر على كل العربات",
img:"/images/no-entry.png"
},

{
text:"يمنع الجولان دون ترك مسافة أمان بين العربات لا تقل عن المسافة المبينة بالعلامة",
img:"/images/distance-70.png"
},

{
text:"مواقع أخرى يقع التنصيص عليها بكتابة على العلامة",
img:"/images/other-prohibition.png"
},
{
text:"منطقة تحديد السرعةممنوع على السيارات وعلى العربات المركبة وعلى العربات المزدوجة وعلى مجموعات العربات المعدّة لنقل البضائع التي يفوق وزنها الجملي المرخّص فيه أو الوزن الجملي للناقل المرخّص فيه 3500 كلغ، مجاوزة العربات ذات محرّك، باستثناء تلك التي لها عجلتان وبدون عربة جانبية.",
img:"/images/Overtake3500.png"
},
{
text:"ممنوع مجاوزة كل العربات ذات محرك باستثناء تلك التي لها عجلتان و بدون عربة جانبية",
img:"/images/no-overtake.png"
},

{
text:"منطقة تحديد السرعة",
img:"/images/zone-30.png"
},

{
text:"دخول منطقة وقوف محدد بالوقت و مراقب بأسطوانة",
img:"/images/parking-disk-zone.png"
},

{
text:"ممنوع الوقوف و التوقف",
img:"/images/no-stop11.png"
},

{
text:"ممنوع الجولان على العربات الناقلة لكمية معينة من مواد يمكنها تلويث المياه",
img:"/images/no-pollution.png"
},

{
text:"دخول منطقة وقوف بمقابل",
img:"/images/paid-parking-zone.png"
},

{
text:"ممنوع الوقوف",
img:"/images/no-parking.png"
},

{
text:"ممنوع الوقوف بجانب العلامة في الأيام الفردية",
img:"/images/no-parking-odd.png"
},

{
text:"ممنوع الوقوف بجانب العلامة في الأيام الزوجية",
img:"/images/no-parking-even.png"
},

{
text:"ممنوع الوقوف بالنسبة لعربات نقل البضائع",
img:"/images/no-parking-truck.png"
},

{
text:"دخول منطقة يمنع فيها الوقوف",
img:"/images/no-parking-zone.png"
},

{
text:"الوقوف محدد في الوقت و مراقب بأسطوانة",
img:"/images/parking-disk.png"
},

{
text:"ممنوع الوقوف على يسار العلامة",
img:"/images/no-parking-left.png"
},

{
text:"ممنوع الوقوف على يمين العلامة",
img:"/images/no-parking-right.png"
},

{
text:"الوقوف محدد في الوقت و بمقابل",
img:"/images/paid-parking.png"
},

{
text:"ممنوع الوقوف ابتداء من العلامة",
img:"/images/no-parking-start.png"
},

{
text:"ممنوع الوقوف إلى غاية العلامة",
img:"/images/no-parking-end.png"
},

{
text:"ممنوع الوقوف قبل و بعد العلامة",
img:"/images/no-parking-both.png"
}

]


const endSigns = [

{
text:"نهاية منع مجاوزة كل العربات ذات محرك باستثناء تلك التي لها عجلتين و بدون عربة جانبية",
img:"/images/end-no-overtake.png"
},

{
text:"نهاية منع استعمال المنبهات الصوتية",
img:"/images/end-horn.png"
},

{
text:"نهاية المنع على السيارات و على العربات المركبة و على العربات المزدوجة و على مجموعات العربات المعدة لنقل البضائع و التي يفوق وزنها الجملي المرخص فيه 3500 كلغ",
img:"/images/end-heavy-vehicles.png"
},

{
text:"نهاية تحديد السرعة",
img:"/images/end-speed.png"
},

{
text:"نهاية منع يقع التنصيص عليه بكتابة على العلامة",
img:"/images/end-specific.png"
},

{
text:"نهاية كل الموانع المحلية المفروضة الا نهاية منع الوقوف",
img:"/images/end-all-local.png"
},

{
text:"نهاية منطقة تحديد السرعة",
img:"/images/end-zone-speed.png"
},

{
text:"خروج منطقة وقوف بمقابل",
img:"/images/end-paid-parking.png"
},

{
text:"خروج منطقة وقوف محدد بالوقت و مراقب بأسطوانة",
img:"/images/end-parking-disc.png"
},

{
text:"خروج منطقة يمنع فيها الوقوف",
img:"/images/end-no-parking-zone.png"
},



]


return (

<div className="lesson-page">

<h1 className="lesson-title">قائمة علامات المنع و إنتهاء المنع</h1>



<h2 className="lesson-subtitle">علامات المنع</h2>

<div className="signs-container">

{prohibitionSigns.map((sign,index)=>(

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



<h2 className="lesson-subtitle">علامات نهاية المنع</h2>

<div className="signs-container">

{endSigns.map((sign,index)=>(

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

<li>علامات المنع تمنع القيام بسلوك معين.</li>

<li>علامات نهاية المنع تعني أن المنع لم يعد ساريا.</li>

</ul>


</div>

)

}