import "../../styles/theme1.css"

export default function Theme6Step3() {

return (

<div className="lesson-page">

<h1 className="lesson-title">تغيير الاتجاه</h1>

<p className="lesson-text">
يجب على كل سائق قبل الانعطاف إلى اليمين أو إلى اليسار ليسلك طريق أخرى أو ليدخل إلى
مسلك مجاور أن يتأكد سلفا من إمكانية القيام بذلك بدون خطر أو عرقلة الجولان و أن ينتبه
غيره من مستعملي الطريق.
</p>

<h2 className="lesson-subtitle">الانعطاف إلى اليمين</h2>

<p className="lesson-text">
في هذه الحالة يجب على السائق الانحياز قدر الإمكان إلى الحافة اليمنى مع القيام بهذه العملية
في فضاء ضيق
</p>

<div>
<img
src="/images/right-turn-tight-space.png"
className="lesson-img"
/>
</div>


<h2 className="lesson-subtitle">الانعطاف إلى اليسار</h2>

<p className="lesson-text">
إذا كان الجولان في الاتجاهين: فيجب على السائق أن ينحاز قدر الإمكان إلى محور المعبد من غير
أن يسلك السبل الخاصة بالعربات القادمة من الاتجاه المقابل
</p>

<div>
<img
src="/images/left-turn-two-way.png"
className="lesson-img"
/>
</div>


<p className="lesson-text">
إذا كان الجولان في اتجاه واحد: فيجب على السائق الذي يريد الدوران إلى اليسار أن ينحاز
بسيارته إلى أقصى يسار المعبد
</p>

<div>
<img
src="/images/left-turn-one-way.png"
className="lesson-img"
/>
</div>


<h2 className="lesson-subtitle">الأولوية عند الانعطاف</h2>

<p className="lesson-text">
يجب على السائق خلال تغيير اتجاهه أن يعطي الأولوية:
</p>

<ul className="lesson-list">

<li>
للعربات القادمة من الاتجاه المعاكس ما لم توجد علامة تقضي خلاف ذلك.
</li>

<li>
للدراجات و الدراجات النارية المتجولة على المسالك الخاصة بالدراجات.
</li>

<li>
للمترجلين الذين يجتازون ذلك المعبد على الممرات الخاصة بهم.
</li>

</ul>

<div>
<img
src="/images/priority-turn.png"
className="lesson-img"
/>
</div>

</div>

)
}