import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Expericence from './Component/Expericence';
import Profile from './Component/Profile';
import Skills from './Component/Skills';
import Spinner from './Component/Spinner';
function App() {
  return (
    <>
      {/* <Spinner /> */}
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 sticky-lg-top vh-100">
            <Profile />
          </div>
          <div className="col-lg-8">
            <About />
            <Skills/>
            <Expericence/>
            <Contact/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
