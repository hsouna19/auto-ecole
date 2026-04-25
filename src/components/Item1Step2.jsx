import "./Item1Step2.css"

function Item1Step2() {
  return (



  <div className="lesson-page">

    <h1 className="lesson-title">إضاءة العربات</h1>



      {/* INTRO */}
      <p className="lesson-text">
        تحتوي العربات على أضواء مختلفة منها الإجباري و منها الإختياري.
        في هذا الدرس سنتعرّف على مختلف الأضواء و على خصائصها و كيفية استعمالها بشكل قانوني.
      </p>



      {/* FRONT LIGHTS */}
      <h2 className="lesson-subtitle">الأضواء الأمامية</h2>

      <div >

        <img
          src="/images/front-lights.png"
          className="front-back"
        />

      </div>



      {/* REAR LIGHTS */}
      <h2 className="lesson-subtitle">الأضواء الخلفية</h2>

      <div >

        <img
          src="/images/rear-lights.png"
          className="front-back"
        />

      </div>



      {/* POSITION LIGHT */}
      <h2 className="lesson-subtitle">أضواء الوضعية</h2>

      <p className="lesson-text">
        أضواء الوضعية عددها اثنان من الأمام ذات لون أبيض أو أصفر و اثنان من الخلف ذات لون أحمر.
        تمكن من رؤية العربة عندما يكون الطقس صاف على مسافة 150 متر.
      </p>

      <img
        src="/images/position-light.png"
        className="lesson-icon"
      />



      {/* USAGE BOX */}
      <div className="lesson-box">

        <h3>إستعمالاتها</h3>

        <ul>
          <li>التوقف و الوقوف ليلا خارج مواطن العمران.</li>
          <li>التوقف و الوقوف ليلا داخل مواطن العمران في صورة عدم وجود إنارة عمومية.</li>
        </ul>

      </div>



      {/* LOW BEAM */}
      <h2 className="lesson-subtitle">أضواء المقاطعة</h2>

      <p className="lesson-text">
        أضواء المقاطعة عددها اثنان فقط من الأمام ذات لون أبيض.
        يرسلان عند تشغيلها نورا أبيض يضيء على مسافة 30 متر.
      </p>

      <img
        src="/images/low-beam.png"
        className="lesson-icon"
      />



      <div className="lesson-box">

        <h3>إستعمالاتها</h3>

        <ul>
          <li>في بداية الليل بصفة عامة.</li>
          <li>عند التقاطع.</li>
          <li>عند السير وراء عربة أخرى.</li>
          <li>إذا كانت إنارة الطريق غير كافية.</li>
          <li>في الطرقات الضيقة.</li>
        </ul>

      </div>



      {/* WARNING */}
      <div className="lesson-warning">

        <h3>حذار</h3>

        <p>
          عند إستعمال أضواء المقاطعة يجب أن لا تزيد السرعة عن 50كم في الساعة
          لأن مسافة التوقف لا يجب أن تتجاوز مدى الرؤية (30 مترا).
        </p>

      </div>



      {/* HIGH BEAM */}
      <h2 className="lesson-subtitle">أضواء الطريق</h2>

      <p className="lesson-text">
        أضواء الطريق عددها اثنان ترسلان إلى الأمام نورا أبيض يضيء الطريق بصفة جيدة
        عندما يكون الطقس صاف على مسافة 100 متر على الأقل.
      </p>

      <img
        src="/images/high-beam.png"
        className="lesson-icon"
      />



      <div className="lesson-box">

        <h3>إستعمالاتها</h3>

        <ul>
          <li>عند الجولان ليلا في طريق غير مضاءة.</li>
          <li>ليلا أثناء المجاوزة.</li>
        </ul>

      </div>



      {/* FOG LIGHT */}
      <h2 className="lesson-subtitle">أضواء الضباب</h2>

      <p className="lesson-text">
        أضواء الضباب هي أضواء غير إجبارية تستعمل عندما تتقلص الرؤية بسبب الضباب أو المطر.
      </p>

      <img
        src="/images/fog-light.png"
        className="lesson-icon"
      />



      <div className="lesson-box">

        <h3>ملاحظة</h3>

        <p>
          عندما تسوء الرؤية و تكون العربة غير مجهزة بأضواء الضباب نستعمل أضواء المقاطعة.
        </p>

      </div>
{/* LICENSE PLATE LIGHT */}
<h2 className="lesson-subtitle">أضواء لوحة التسجيل</h2>

<p className="lesson-text">
يمكن جهاز إضاءة لوحة التسجيل الخلفية من قراءة اللوحة ليلاً في طقس صاف
على مسافة 20 متراً.
</p>

<img
  src="/images/license-plate-light.png"
  className="lesson-img"
/>



{/* REVERSE LIGHT */}
<p className="lesson-subsubtitle">
أضواء الرجوع إلى الخلف (لا يسأل عنها في الإمتحان)
</p>

<p className="lesson-text">
أضواء الرجوع إلى الخلف عددها اثنان من الخلف.
تشتغل عند وضع السيارة في وضعية الرجوع إلى الخلف
و تبعث نوراً أبيض.
</p>



{/* BRAKE LIGHT */}
<p className="lesson-subsubtitle">
(لا يسأل عنها في الامتحان) أضواء الفرملة
</p>

<p className="lesson-text">
أضواء الفرملة عددها اثنان أو ثلاثة من الخلف.
تشتغل عندما يضغط السائق على دواسة الفرامل.
</p>


      {/* SUMMARY */}
      <h2 className="lesson-subtitle">تلخيص</h2>

      <ul className="lesson-list">
        <li>يوجد أضواء إجبارية و أضواء غير إجبارية.</li>
        <li>يجب إستعمال الأضواء بطريقة قانونية.</li>
        <li>الإستعمال الغير قانوني يؤدي إلى مخالفة.</li>
      </ul>


    </div>
  )
}

export default Item1Step2