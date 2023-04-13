import React from "react";

const Skills = () => {
  return (
    <>
      <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="title pb-3 mb-5">Skills</h1>
        <div className="slider h-100">
          <div className="slide-track">
            <div className="slide h-100">
              <img src="img/html.jpeg" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="img/css.jpeg" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="img/bootstrap.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="img/sass.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="img/ts.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="img/es6.png" height="100" width="250" alt="" />
            </div>
            <div className="slide ">
              <img src="img/jquery.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="img/react.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="img/redux.png" height="100" width="250" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
