import  NavBar  from "../components/NavBar/NavBar";
import  Categories  from "../components/Categories/Categories";
import  Courses  from "../components/Courses/Courses";
import  Footer  from "../components/Footer/Footer";
import  Contact  from "../components/Contact/Contact";
import Faq  from "../components/Faq/Faq";
import Header from "../components/Header/Header"
import  Testimonials  from "../components/Testimonials/Testimonials"

export default function Home ()  {
     return(
        <>
        <NavBar/>
        <Header/>
        <Categories/>
        <Courses/>
        <Faq/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </>
     )
};
