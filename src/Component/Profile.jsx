import React from "react";

const Profile = () => {
  return (
    <>
      <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
        <img
          className="w-75 profile-img img-fluid  my-2"
          src="img/profile.jpg"
          alt="Image"
        />
        <h1 className="text-primary mt-2">Ajay Tiwari</h1>
        <div className="mb-4" style={{ height: "22px" }}>
          <h4 className="typed-text-output d-inline-block text-light"></h4>
          <div className="typed-text d-none">Front End Developer</div>
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3">
          <a className="btn btn-secondary btn-square mx-1" href="mailto:theajay678@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a className="btn btn-secondary btn-square mx-1" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-secondary btn-square mx-1" target="_blank" href="https://www.linkedin.com/in/ajay-tiwari-baa44522b/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-secondary btn-square mx-1" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="d-flex align-items-end justify-content-between border-top">
          <a href="" className="btn w-50 border-end">
            Download CV
          </a>
          <a href="mailto:theajay678@gmail.com" className="btn w-50 btn-scroll">
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
