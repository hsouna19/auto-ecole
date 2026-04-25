import "../../styles/theme1.css"

export default function Theme2Step2() {
  return (
    <div className="lesson-page">

      <h1 className="lesson-title">الإشارات العمودية</h1>


      <p className="lesson-text">
        ستتمكن من خلال هذا الدرس من فهم معاني مختلف العلامات العمودية. لن نتعرض بالتفصيل لجميع العلامات لكن سنفهم معنى كل مجموعة منها.
      </p>

      <p className="lesson-text">
        توجد أشكال مختلفة لعلامات المرور و يدل شكلها على دلالة العلامة.
      </p>


      {/* image */}
      <div className="lesson-card">
        <img src="/images/sign-shapes.png" className="lesson-img"/>
      </div>



      {/* triangle */}
      <h2 className="lesson-subtitle">شكل المثلث = خطر</h2>

      <p className="lesson-text">
        العلامات المثلثة تدل على الخطر. إذا كانت العلامة حمراء و بيضاء فالخطر دائم. أما إذا كانت صفراء و حمراء فالخطر مؤقت.
      </p>

      <div className="lesson-card">
        <img src="/images/danger-triangle.png" className="lesson-img"/>
      </div>



      {/* important */}
      <div className="info-box">
        <h3>هام</h3>

        <p>
          داخل مواطن العمران سواء كان الخطر دائم أو وقتي توضع علامة الخطر على بعد 50 مترا من الخطر المعلن (3 ثواني عندما أسير بسرعة 50 كم في الساعة)
        </p>

        <p>
          خارج مواطن العمران توضع علامة الخطر على بعد 150 مترا من الخطر المعلن.
        </p>

        <p>
          يمكن أن توضع علامة الخطر على مسافة أقرب. في هذه الحالة ترفق بعلامة تكميلية تدل على المسافة بين العلامة و الخطر.
        </p>

        <p>
          نستثني علامة "الجولان في الإتجاهين" حيث توضع في بداية المنطقة المعنية.
        </p>
      </div>
<div className="info-box">
        <h3>هام</h3>
         <p> عند وجود علامة خطر أتأهّب و أزيد من اليقظة كي أتعامل مع الخطر.
 </p>
      </div>

      {/* circle */}
      <h2 className="lesson-subtitle">شكل دائري = أمر</h2>

      <p className="lesson-text">
        تلزمك هذه العلامات بإتباعها و تنقسم إلى نوعين:
      </p>

      <ul className="lesson-list">
        <li>منع و نهاية المنع</li>
        <li>جبر و نهاية الجبر</li>
      </ul>


      <h3 className="lesson-subsubtitle">المنع و نهاية المنع</h3>

      <p className="lesson-text">
        علامات المنع لونها أبيض و محاطة باللون الأحمر. تحمل تعليمات للسائق تمنعه من القيام بأشياء معينة كالمجاوزة أو تجاوز سرعة محددة مثلا. و تكون نوعية المنع مجسمة وسط العلامة.
      </p>

      <p className="lesson-text">
        أما علامات نهاية المنع فلونها أبيض و مشطوبة بلون أسود.
      </p>

      <div className="lesson-card">
        <img src="/images/no-entry.png" className="lesson-img"/>
      </div>



      {/* question */}
      <div className="lesson-question">
        <h3>سؤال</h3>

        <p>
          ما معنى العلامات التالية؟ حاول أن تحزر قبل قراءة الإجابة.
        </p>

        <img src="/images/question1.png" className="lesson-img"/>
      </div>



      {/* answer */}
      <div className="lesson-answer">

        <h3>الجواب</h3>

        <ol>
          <li>يمنع الجولان دون ترك مسافة أمان بين العربات لا تقل عن المسافة المبينة بالعلامة و هي 70 متر</li>

          <li>علامة منع جولان. في هذه الحالة حافلة.</li>

          <li>علامة منع جولان. في هذه الحالة يمنع الجولان على جميع العربات ذات محرك بما فيه الدراجات النارية.</li>

          <li>نهاية كل الموانع المحلية المفروضة إلا نهاية منع الوقوف و/أو منع الوقوف و التوقف إذا وجدت.</li>

          <li>نهاية منع المجاوزة.</li>

          <li>نهاية تحديد السرعة. في هذه الحالة 50 كلم في الساعة.</li>
        </ol>

      </div>



      {/* stop no stop */}
      <h2 className="lesson-subsubtitle">علامات منع الوقوف و التوقف</h2>

      <p className="lesson-text">
        علامات منع الوقوف و التوقف هي أيضا علامات منع لكن لها ألوانها الخاصة على عكس اللون الأحمر و الأبيض المستعمل عادة. سنستعرض لها لاحقا بالتفصيل في محور الوقوف و التوقف.
      </p>

      <div className="lesson-card">
        <img src="/images/no-stop.png" className="lesson-img"/>
      </div>



      {/* obligation */}
      <h2 className="lesson-subsubtitle">الجبر و نهاية الجبر</h2>

      <p className="lesson-text">
        علامات الجبر ذات الخلفية الزرقاء، يجسد فيها نوع الجبر باللون الأبيض و يجبر السائق على إتباعه. يتم الإعلان عن نهاية منع الجبر بشطب العلامة باللون الأحمر.
      </p>

      <div className="lesson-card">
        <img src="/images/obligation.png" className="lesson-img"/>
      </div>



      {/* question 2 */}
      <div className="lesson-question">
        <h3>سؤال</h3>

        <p>
          ما معنى العلامات التالية؟ حاول أن تحزر قبل قراءة الإجابة.
        </p>

        <img src="/images/question2.png" className="lesson-img"/>
      </div>



      <div className="lesson-answer">

        <h3>الجواب</h3>

        <ol>

          <li>تجبرك هذه العلامة على السير بسرعة لا تقل عن 30 كلم في الساعة.</li>

          <li>علامة اتجاه إجباري. في هذه الحالة يجب عليك السير إلى الأمام أو الدوران إلى اليمين.</li>

          <li>مسلك أو سبيل إجباري للدراجات بدون عربة جانبية أو مجرورة.</li>

          <li>نهاية سبيل إجباري للمترجلين.</li>

          <li>نهاية سبيل إجباري للدراجات.</li>

          <li>نهاية الممر الخاص بعربات الخزنات المنتظمة للنقل العمومي للأشخاص.</li>

        </ol>

      </div>



{/* important */}
<div className="info-box">

  <h3>هام</h3>

  <p>
    يبدأ مفعول العلامات ذات الشكل الدائري بداية من العلامة داخل و خارج مواطن العمران.
  </p>

</div>



{/* square signs */}
<h2 className="lesson-subtitle">
الأشكال ذات أربع أضلاع = إرشاد
</h2>


<h3 className="lesson-subsubtitle">
شكل مربع = إرشاد
</h3>

<p className="lesson-text">

تعطي علامات الإرشاد معلومات مفيدة للسائق. و هي لا تنبه بخطر.
يمكن إستعمالها للإشارة إلى مرآب مثلا.

</p>



<div className="lesson-card">

  <img
    src="/images/guidance-square.png"
    className="lesson-img"
  />

</div>



{/* question */}
<div className="lesson-question">

  <h3>سؤال</h3>

  <p>
    ما معنى العلامات التالية؟ حاول أن تحزر قبل قراءة الإجابة.
  </p>

  <img
    src="/images/guidance-question.png"
    className="lesson-img"
  />

</div>



{/* answer */}
<div className="lesson-answer">

<h3>الجواب</h3>

<ol>

<li>
علامة إرشاد تدل على ممر بدون منفذ على اليمين
</li>

<li>
ترشدك هذه العلامة إلى وجود مأوى للوقوف (parking).
والصورة الصغيرة في أسفل اليمين تدل على أن المأوى بمقابل.
</li>

<li>
ممر لذوي الاحتياجات الخصوصية
</li>

<li>
ترشدك هذه العلامة إلى السرعة المحددة.
في هذه الحالة 30 كلم في الساعة.
(لست ملزما بالسير بهذه السرعة)
</li>

</ol>

</div>



{/* rectangle signs */}
<h3 className="lesson-subsubtitle">

شكل مستطيل = إرشاد له علاقة بالمكان

</h3>


<p className="lesson-text">

تعطي علامات الإرشاد ذات الشكل المستطيل معلومات حول الإتجاه و المكان.

</p>


<p className="lesson-text">

في حالة عدم وجود الأسهم، تدل العلامة على دخول مناطق عمران.
و إذا كانت مشطوبة باللون الأحمر فنحن نغادرها

</p>



<div className="lesson-card">

<img
src="/images/city-entry-exit.png"
className="lesson-img"
/>

</div>



<p className="lesson-text">

عندما تكون العلامة مرفقة بسهم أو في شكل سهم فهي تدل على الاتجاه

</p>



<div className="lesson-card">

<img
src="/images/directions-signs.png"
className="lesson-img"
/>

</div>



<p className="lesson-text">

قبل المفترقات يمكن أن توضع علامة بها رسم المفترق و تدل على الإتجاهات أيضا.

</p>



<div className="lesson-card">

<img
src="/images/roundabout-directions.png"
className="lesson-img"
/>

</div>



{/* priority signs */}
<h2 className="lesson-subtitle">

علامات الأولوية

</h2>


<p className="lesson-text">

و أخيرا توجد علامات الأولوية و التي لها شكل خاص.
سنراها بالتفصيل في محور الأولوية.
في الصورة التالية بعض من هذه العلامات

</p>



<div className="lesson-card">

<img
src="/images/priority-signs.png"
className="lesson-img"
/>

</div>



<ul className="lesson-list">

<li>طريق ذات أولوية.</li>

<li>نهاية طريق ذات أولوية.</li>

<li>علامة قف.</li>

<li>علامة فسح المجال.</li>

</ul>



{/* additional panels */}
<h2 className="lesson-subtitle">

اللافتات التكميلية

</h2>


<p className="lesson-text">

يمكن أن ترفق علامات الطريق بلافتات تكميلية لتفسيرها أو تحديد مفعولها أو مسافتها
في الصورة الموالية بعض الأمثلة

</p>



<div className="lesson-card">

<img
src="/images/additional-panels.png"
className="lesson-img"
/>

</div>



<p className="lesson-text">

دلالة هذه العلامات:

</p>



<ol className="lesson-list">

<li>
بعد مسافة 150 متر توجد علامة قف.
</li>

<li>
بعد مسافة 100 متر يوجد مأوى بمقابل.
</li>

<li>
رسم للمفترق القادم. حيث يمثل الطريق الذي تتمتع فيه بالأولوية بالخط العريض.
</li>

<li>
على مسافة 4.5 كلم تحديد السرعة بـ 70 كلم في الساعة.
</li>

<li>
الأمر يخص العربات من الصنف الموجود بالعلامة.
إذ إجبارية الدوران على اليسار بالنسبة لعربات نقل البضائع.
</li>

</ol>

<div className="lesson-card">
 <h2 className="lesson-subtitle">تلخيص</h2>
<img
src="/images/Summary.png"
className="lesson-img"
/>

</div>

    </div>
  )
}