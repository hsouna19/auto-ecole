import Themes from "./pages/Themes"
import Theme1 from "./pages/Theme1"
import Theme2 from "./pages/Theme2"
import Theme3 from "./pages/Theme3"
import Theme4 from "./pages/Theme4"
import Theme5 from "./pages/Theme5"
import Theme6 from "./pages/Theme6"
import Theme8 from "./pages/Theme8"
import Theme9 from "./pages/Theme9"
import Theme10 from "./pages/Theme10"
import Exams from "./exams/home"


import Item1Steps from "./components/Item1Steps"
import Item2Steps from "./components/Item2/Item2Steps"
import Theme2Step2 from "./components/Item2/Item2Step2"
import Theme2Step3 from "./components/Item2/Item2Step3"
import Sidebar from "./components/Sidebar"

import Theme2Step4 from "./components/Item2/Item2Step4"
import Item1Step2 from "./components/Item1Step2"
import Theme2Step5 from "./components/Item2/Item2Step5"
import Theme2Step6 from "./components/Item2/Item2Step6"
import Theme2Step7 from "./components/Item2/Item2Step7"
import Theme2Step8 from "./components/Item2/Item2Step8"

import Theme4Step2 from "./components/Item4/Item4Step2"
import Theme4Step3 from "./components/Item4/Item4Step3"
import Item4Steps from "./components/Item4/Item4Sidebar"

import Item6Steps from "./components/Item6/Item6Steps"
import Theme6Step2 from "./components/Item6/Item6Step2"
import Theme6Step3 from "./components/Item6/Item6Step3"
import Theme6Step4 from "./components/Item6/Item6Step4"

import Item8Steps from "./components/Item8/Item8Steps"
import Theme8Step2 from "./components/Item8/Item8Step2"



import { useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import "./layout.css"

function App() {

  const [open, setOpen] = useState(true)

  const location = useLocation()

  /* detect active theme */
  const showTheme1Steps = location.pathname.startsWith("/theme1")
  const showTheme2Steps = location.pathname.startsWith("/theme2")
  const showTheme4Steps = location.pathname.startsWith("/theme4")
  const showTheme6Steps = location.pathname.startsWith("/theme6")
  const showTheme8Steps = location.pathname.startsWith("/theme8")
  return (

    <div className="layout">

      <Sidebar open={open} setOpen={setOpen} />

      <main
        className={`content
        ${open ? "sidebar-open" : "sidebar-closed"}
        ${showTheme1Steps || showTheme2Steps || showTheme4Steps || showTheme6Steps || showTheme8Steps ? "withSteps" : ""}
        `}
      >

        {/* show steps depending on theme */}

        {showTheme1Steps && <Item1Steps />}

        {showTheme2Steps && <Item2Steps />}

        {showTheme4Steps && <Item4Steps />}
        {showTheme6Steps && <Item6Steps />}
        {showTheme8Steps && <Item8Steps />}

        <div className="content-inner">

          <Routes>

            <Route path="/" element={<Themes />} />

            {/* THEME 1 */}
            <Route path="/theme1" element={<Theme1 />} />
            <Route path="/theme1/lights" element={<Item1Step2 />} />

            {/* THEME 2 */}
            <Route path="/theme2" element={<Theme2 />} />
            <Route path="/theme2/vertical-signs" element={<Theme2Step2 />} />
            <Route path="/theme2/road-markings" element={<Theme2Step3 />} />
            <Route path="/theme2/prohibition" element={<Theme2Step4 />} />
            <Route path="/theme2/danger" element={<Theme2Step5 />} />
            <Route path="/theme2/obligation" element={<Theme2Step6 />} />
            <Route path="/theme2/information" element={<Theme2Step7 />} />
            <Route path="/theme2/temporary" element={<Theme2Step8 />} />

            {/* THEME 3 */}
            <Route path="/theme3" element={<Theme3 />} />

            {/* THEME 4 */}
            <Route path="/theme4" element={<Theme4 />} />
            <Route path="/theme4/temporary" element={<Theme4Step2 />} />
            <Route path="/theme4/xxxxx" element={<Theme4Step3 />} />

            {/* THEME 5 */}
            <Route path="/theme5" element={<Theme5 />} />

             {/* THEME 6 */}
            <Route path="/theme6" element={<Theme6 />} />
            <Route path="/theme6/speed-distance" element={<Theme6Step2 />} />
            <Route path="/theme6/direction" element={<Theme6Step3 />} />
            <Route path="/theme6/highway" element={<Theme6Step4 />} />
            {/* THEME 8 */}
            <Route path="/theme8" element={<Theme8 />} />
            <Route path="/theme8/first-aid" element={<Theme8Step2 />} />
            {/* THEME 9 */}
            <Route path="/theme9" element={<Theme9 />} />
            {/* THEME 10 */}
            <Route path="/themes10" element={<Theme10 />} />
            {/* exams */}
            <Route path="/tests" element={<Exams />} />
          </Routes>

        </div>

      </main>

    </div>

  )

}

export default App