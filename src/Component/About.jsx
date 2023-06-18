import React from "react";

// Set the start date
let startDate = new Date('2021-07-01');

// Get the current date
let currentDate = new Date();

// Calculate the difference in years and months
let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
let monthsDiff = currentDate.getMonth() - startDate.getMonth();

// Adjust the difference if the current month is before the start month
if (currentDate.getMonth() < startDate.getMonth()) {
  yearsDiff--;
  monthsDiff += 12;
}

const About = () => {
    
  return (
    <>
      <section className="py-5 border-bottom fadeInUp">
        <h1 className="title pb-3 mb-5">About Me</h1>
        <p>
        Experienced frontend developer with 2 years of hands-on experience in HTML, CSS, Sass, Bootstrap, ES6, JavaScript,
        jQuery, and 1 year of specialized knowledge in React. Proficient in creating visually appealing web pages, customizing
        styles, and utilizing modern JavaScript features. Skilled in developing interactive user interfaces using React. A
        valuable asset with a strong track record of 2 years in frontend development, delivering high-quality projects and
        expertise in the mentioned technologies.
        </p>
        <div className="row mb-4">
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-secondary">Birthday:</span> 08 November
            1998
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-secondary">Degree:</span> BscIT
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-secondary">Experience:</span> {`${yearsDiff} Years and ${monthsDiff} Months`}
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-secondary">Phone:</span> +91 8828286629
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-secondary">Email:</span>
            theajay678@gmail.com
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-secondary">Address:</span> Bhayender,
            Thane 401 105, India
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
