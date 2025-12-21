import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Home from "./sections/Home";
import React from "react";
import IntroAnimation from "./components/IntroAnimation";
// import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";



export default function App() {

  const [introDone , setIntroDone] = React.useState(false);
  return(


<>

{!introDone && <IntroAnimation onFinish={() => setIntroDone (true)}/>}
{introDone && (

<div className="relative gradient text-white h-20px">
<CustomCursor/>
{/* <ParticlesBackground /> */}

  <Navbar/>
  <Home/>
  <About/>
  <div className="h-auto">
  <Skills/>
  </div>
  <Projects/>
  <Experience/>
  <Testimonials/>
  <Contact/>
  <Footer/>
  



</div>

)}
</>

  )
}