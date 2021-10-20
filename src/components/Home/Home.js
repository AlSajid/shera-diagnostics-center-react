import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container my-5">
        <h2 className="text-center">We Provide</h2>
        <hr />
        <div className="row">
          <div className="col-lg-3 col-sm-12 g-5 shadow bg-light p-5 text-center">
            <h3>Personal Health Consultant</h3>
          </div>
          <div className="col-lg-3 col-sm-12 g-5 shadow bg-light p-5 text-center">
            <h3>Specialist Doctors</h3>
          </div>
          <div className="col-lg-3 col-sm-12 g-5  shadow bg-light p-5 text-center">
            <h3>Medical Tests</h3>
          </div>
          <div className="col-lg-3 col-sm-12 g-5 shadow bg-light p-5 text-center">
            <h3>Regular checkup</h3>
          </div>

        </div>
      </div>
      <Services></Services>
      <div className="container my-5">
        <h2 className="text-center">Book Appointment</h2>
        <hr />
        <div className="container">
          <div className="my-3">
            <input type="text" className="form-control my-3" placeholder="Name" />
            <input type="email" className="form-control my-3" placeholder="Email" />
            <input type="tel" className="form-control my-3" placeholder="Phone Number" />
            <button className="btn btn-secondary">Book NOW</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
