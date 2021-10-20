import React from "react";

const Footer = () => {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-12 my-3">
            <h3>About Us</h3>
            <hr />
            <p>
              <b>Shera Diagnostic Center</b> started its journey with the vision
              of taking the health care services into a new height through
              providing the most accurate and reliable test results to all its
              customers and caring the patients at the top of its values.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 my-3">
            <h3>Contact Info</h3>
            <hr />
            <p>225, Bablu Road, Block-B, Shyamoli, Dhaka-1207</p>
            <p>info@sheragroup.com</p>
            <p>123456</p>
          </div>
          <div className="col-lg-4 col-sm-12 my-3">
            <h3>Stay in Touch</h3>
            <hr />
            <div className="my-3">
              <input type="email" className="form-control my-3" placeholder="example@shera.com" />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
            <div>
              <h6 className="mt-5">&copy; All rights reserved by Shera Diagnostic Center 2021</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
