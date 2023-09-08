import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Privacy } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          
        </div>
        <Routes>
          <Route path="/" element={
            <>
            <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero />
              </div>
              </div>
              <About />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
                <Footer />
              </div>
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div className="hidden md:block">
    // <Tech />
    // </div>
    // <Experience />
  )
}

export default App;
