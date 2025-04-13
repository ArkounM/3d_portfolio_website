import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Footer, Works, StarsCanvas } from './components';
import ProjectDetails from "./components/ProjectDetails"; // Create this component next

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Works />
                <Experience />                
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
        <div>
        <Footer />
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;