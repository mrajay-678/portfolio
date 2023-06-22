import React from "react";

const Profile = () => {
  return (
    <>
      <div className="d-flex flex-md-column h-md-100 text-center overflow-auto side-card">
        <img
          className="w-md-75 animate__bounceIn animate__animated profile-img img-fluid  my-2"
          src="img/profile.png"
          alt="Image"
        />
        <div className="profile-content">
          <h1 className="text-secondary mt-2">Ajay Tiwari</h1>
          <div className="typed-text">Frontend Developer</div>
          <div className="d-flex justify-content-center mt-auto mb-3">
            <a
              className="btn btn-secondary btn-square mx-1"
              href="mailto:theajay678@gmail.com"
            >
              <i className="fa fa-envelope"></i>
            </a>
            <a
              className="btn btn-secondary btn-square mx-1"
              target="_blank"
              href="https://github.com/mrajay-678"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn btn-secondary btn-square mx-1"
              target="_blank"
              href="https://www.linkedin.com/in/ajay-tiwari-baa44522b/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-secondary btn-square mx-1" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="d-flex align-items-end justify-content-between border-top">
            <a href="https://drive.google.com/file/d/1IJ6mykARyu4Axx4G0nglPjfMmZcZ4xqo/view" className="p-3 w-50 border-end">
              Download CV
            </a>
            <a
              href="mailto:theajay678@gmail.com"
              className="p-3 w-50 btn-scroll"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
