import "../styles/theme1.css"

export default function Theme10(){

const hazardGroups = [

{
title:<><strong>صنف 1:</strong> مواد متفجرة</>,
items:[
{ text:"مواد متفجرة", img:"/images/explosive11.png" }
]
},

{
title:<><strong>صنف 2:</strong> الغازات</>,
items:[
{ text:"الغازات القابلة للاشتعال", img:"/images/flammable-gas.png" },
{ text:"الغازات غير السامة و غير القابلة للاشتعال", img:"/images/nonflammable-gas.png" },
{ text:"الغازات السامة", img:"/images/toxic-gas.png" }
]
},

{
title:<><strong>صنف 3:</strong> السوائل القابلة للاشتعال</>,
items:[
{ text:"سوائل قابلة للاشتعال", img:"/images/flammable-liquid.png" }
]
},

{
title:<><strong>صنف 4:</strong></>,
items:[
{ text:"المواد الصلبة القابلة للاشتعال", img:"/images/flammable-solid.png" },
{ text:"احتراق تلقائي", img:"/images/spontaneous-combustion.png" },
{ text:"خطير عندما تكون الرطوبة مرتفعة", img:"/images/dangerous-when-wet.png" }
]
},

{
title:<><strong>صنف 5:</strong> مواد مؤكسدة</>,
items:[
{ text:"المؤكسدات", img:"/images/oxidizing.png" },
{ text:"البيروكسيدات العضوية", img:"/images/organic-peroxide.png" }
]
},

{
title:<><strong>صنف 6:</strong></>,
items:[
{ text:"السم", img:"/images/toxic.png" },
{ text:"المواد المعدية", img:"/images/infectious.png" }
]
},

{
title:<><strong>صنف 7:</strong> مواد مشعة</>,
items:[
{ text:"المواد المشعة", img:"/images/radioactive.png" }
]
},

{
title:<><strong>صنف 8:</strong> المواد المسببة للتآكل</>,
items:[
{ text:"تآكل", img:"/images/corrosive.png" }
]
},

{
title:<><strong>صنف 9:</strong> مواد وسلع خطرة متنوعة</>,
items:[
{ text:"مواد خطرة متنوعة", img:"/images/misc-dangerous.png" },
{ text:"بطاريات ليثيوم أيون", img:"/images/lithium-battery.png" }
]
}

]


const prohibitionSigns = [

{ text:"ممنوع الجولان على العربات الناقلة لكمية معينة من مواد يمكنها تلويث المياه", img:"/images/no-water-pollution.png" },

{ text:"ممنوع الجولان على العربات الناقلة لكمية معينة من مواد متفجرة أو سريعة الالتهاب", img:"/images/no-explosive.png" },

{ text:"ممنوع الجولان على العربات الناقلة لمواد خطرة", img:"/images/no-dangerous-goods.png" }

]


return(

<div className="lesson-page">


<h1 className="lesson-title">نقل المواد الخطرة</h1>


<p className="lesson-text">
ينظم القانون نقل المواد الخطرة . و علاوة على رخصة السياقة يجب أن يتحصل كل سائق عربة ناقلة لمواد خطرة على شهادة في التكوين يتم تسليمها إثر متابعة تكوين مختص حول الأخطار الناجمة عن هذا النقل.
</p>

<p className="lesson-text">
ويجب على السائق أن يفرق بين مختلف المواد وعلامات المنع التي لها علاقة بالمواد الخطرة.
</p>



<h2 className="lesson-subtitle">كيف نشير إلى نقل المواد الخطرة؟</h2>

<p className="lesson-text">
لنقل المواد الخطرة، يجب أن نشير إلى ذلك على العربة الناقلة . و يتم ذلك عن طريق نوعين من الملصقات:
</p>



<div >
<img src="/images/danger-symbol.png" />
</div>



<h2 className="lesson-subtitle">الملصقة البرتقالية</h2>

<p className="lesson-text">
على جميع ناقلات المواد الخطرة حمل لوحة برتقالية . قد تكون هذه اللوحة اما مرقمة او فارغة .
</p>

<p className="lesson-text">
كود الخطر يحدد المميزات المفصلة عن نوع المادة ، و قد يتكون من رقم واحد او مركب من رقمين او ثلاثة.
</p>

<p className="lesson-text">
اذا كان الرقم مكررا مثل 33 هنا ، فهذا يأكد شدة الخطورة ( مادة شديدة الاشتعال ).
</p>

<p className="lesson-text">
مثلا رقم 336 : مادة سائلة – شديدة الاشتعال – و سامة.
</p>

<p className="lesson-text">
كود تعريف المادة هو رقم تسلسلي مستند عن منظمة الامم المتحدة ، يتكون من اربعة ارقام و يحدد الميزات الفيزيائية للمادة المنقولة .
مثلا 1203 تعني البنزين ، 1202 الغازوال ، 1965 غاز البوتان او البروبان.
</p>



<div className="info-box">

<h3 className="lesson-subsubtitle">معلومة</h3>

<p className="lesson-text">
ليس من الواجب معرفة مختلف الأرقام و ما تشير إليه ، يكفي فقط أن هذه العلامة تشير إلى أن العربة تنقل مواد خطرة.
</p>

</div>



<h2 className="lesson-subtitle">رمز الخطر</h2>

<p className="lesson-text">
تشير رموز الخطر إلى نوعية الخطر و تنقسم إلى 9 أصناف:
</p>



{hazardGroups.map((group,index)=>(

<div key={index}>

<h3 className="lesson-class-title">
{group.title}
</h3>

<div className="signs-container">

{group.items.map((sign,i)=>(

<div key={i} className="sign-card">

<div className="sign-text">
{sign.text}
</div>

<div className="sign-image-box">
<img src={sign.img} className="sign-image"/>
</div>

</div>

))}

</div>

</div>

))}



<div className="lesson-box">

<h3 className="lesson-subsubtitle">أين توضع هذه الملصقات</h3>

<ul className="lesson-list">

<li>العلامة البرتقالية توضع من الأمام و من الخلف بالعربة.</li>

<li>رمز الخطر يوضع من الخلف و من الجانب.</li>

</ul>




</div>
<div><img src="/images/Where.png" /></div>


<h2 className="lesson-subtitle">علامات المنع</h2>

<p className="lesson-text">
يمنع جولان العربات الناقلة لمواد خطرة ببعض المناطق عن طريق العلامات . إليك قائمة بعض هذه العلامات
</p>



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



<h2 className="lesson-subtitle">تلخيص</h2>

<ul className="lesson-list">

<li>يجب على العربات الناقلة للمواد الخطرة وضع الملصقة البرتقالية و رمز الخطر</li>

<li>تنقسم المواد الخطرة إلى 9 أصناف</li>

</ul>



</div>

)

}