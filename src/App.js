
import {Routes, Route} from "react-router-dom"
import Home from "./Routes/Home"
import  About  from "./Routes/About"
import  Contacts  from "./Routes/Contact"
import Course  from "./Routes/Course"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
