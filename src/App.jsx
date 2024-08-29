import {BrowserRouter} from 'react-router-dom';
import {About,Contact,Experience,Education,Hero,Navbar, Tech, Works, StarsCanvas, Footer} from './components';


const App = () => {
  return (
    <BrowserRouter>
    <div className = "relative z-0 bg-primary">
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education/>
        <Tech />
        <Works />
        <div className = "relative z-0"> 
          <Contact/>
          <StarsCanvas />
        </div>
        <div className = "relative z-0"> 
            <Footer/>
            <StarsCanvas />
          </div>
    </div>
    </BrowserRouter>
  )
}

export default App
