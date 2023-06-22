import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Expericence from './Component/Expericence';
// import Spinner from './Component/Spinner';
import Profile from './Component/Profile';
import Testimonial from './Component/Testimonial';
import Skills from './Component/Skills';
import 'animate.css';

function App() {
  return (
    <>
      {/* <Spinner /> */}
      <div className="container-outer">
        <div className="container-inner">
          <div className=" profile-card sticky-md-top py-3 vh-md-100">
            <Profile />
          </div>
          <div className="right-card">
            <About />
            <Skills/>
            <Expericence/>
            <Testimonial/>
            <Contact/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
