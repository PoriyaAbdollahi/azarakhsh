import Info from "../components/Info";
import AboutUs from "../components/AboutUs";
import Protfolio from "../components/Protfolio";
import Skills from "../components/Skills";
import Technologys from "../components/Technologys";
import ContactUs from "../components/ContactForm";
import Head from 'next/head'

export default function Home() {

  return (
    <>
    <Head>
        <title>تیم توسعه آذرخش</title>
        <meta name="description" content="هدف تیم  آذرخش  تحویل  پروژه ها  باسرعت  وکیفیت عالی هست این تیم تشکیل شده از از دوستان صمیمی و  باتجربه است که سردی و گرمی  پروژه هارو باهم دیدن" />
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400&family=Work+Sans:wght@300&display=swap" rel="stylesheet"/>
        
    </Head>
      <div className="max-w-4xl mx-auto">
        <Info/>
        <Skills/>
        <Protfolio/>
        <AboutUs/>
        <Technologys/>
        <ContactUs/>
    </div>
    </>
  )
}
