  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import{About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

  function App() {

    return (
      <>
        <BrowserRouter>
          <div classNmae='relative z-0 bg-primary'>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <br></br><br></br><br></br>
              <Navbar/>
              <Hero/>
            </div>
            <div  className='bg-black'>
            <section id="about"><About/></section>
            <section id="experience"><Experience/></section>
            <Tech/>
            <section id="works"><Works/></section>
            <Feedbacks/>
            </div>
            <div className="relative z-0 bg-black">
            <section id="contact"><Contact/></section>
              <StarsCanvas/>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  }

  export default App