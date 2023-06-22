import React from "react";

const Skills = () => {
  return (
    <>
      <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="title pb-3 mb-5">Skills</h1>
        <div className="row mb-4">
          <div className="my-1">
            <span className="fw-bolder text-secondary">Languages:</span>  HTML | CSS | JavaScript | PHP | MySQL
          </div>
          <div className="my-1">
            <span className="fw-bolder text-secondary">Framework & libraries:</span> SASS | LESS | Tailwind | Bootstrap | React.js | jQuery
          </div>
          <div className="my-1">
            <span className="fw-bolder text-secondary">Ksey skills:</span> Debugging | Performance Improvement | Coding | Web-page Optimisation
          </div>
          <div className="my-1">
            <span className="fw-bolder text-secondary">Development Tools:</span> VS code | NPM | Gulp 
          </div>
          <div className="my-1">
            <span className="fw-bolder text-secondary">Others:</span> Git | ClickUP 
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
