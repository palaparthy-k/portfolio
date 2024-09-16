import { BrowserRouter } from "react-router-dom";
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
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          </div>
          <div className="relative z-0 bg-black">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App