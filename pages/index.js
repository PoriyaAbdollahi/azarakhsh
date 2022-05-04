import About from "../components/About";
import Info from "../components/Info";
import Protfolio from "../components/Protfolio";
import Skills from "../components/Skills";
import Technologys from "../components/Technologys";
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto ">
    <About/>
    <Skills/>
    <Protfolio/>
    <Info/>
    <Technologys/>
    </div>
  )
}
