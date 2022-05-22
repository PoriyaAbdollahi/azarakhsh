import Info from "../components/Info";
import AboutUs from "../components/AboutUs";
import Protfolio from "../components/Protfolio";
import Skills from "../components/Skills";
import Technologys from "../components/Technologys";
import ContactUs from "../components/ContactForm";
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto ">
    <Info/>
    <Skills/>
    <Protfolio/>
    <AboutUs/>
    <Technologys/>
    {/* <ContactUs/> */}
    </div>
  )
}
