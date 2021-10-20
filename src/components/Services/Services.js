import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/data/services.json')
      .then(result => result.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center">Our Packages</h2>
      <hr />
      <div className="row">
        {
          services.map(service =>
            <div className="col-lg-4 col-sm-12 my-3" >
              <div className="card shadow-sm p-3">
                <img className="img-thumbnail" src={service["image"]} alt={service["image"]} />
                <div className="my-3">
                  <h5 className="card-title">{service["Title"]}</h5>
                  <p className="card-body">{service["Info"]}</p>
                </div>

                <NavLink exact to={`/services/${service["ID"]}`} className="text-center">
                  <button className="btn btn-secondary">Price <b>{service["Price"]} Taka</b></button>
                </NavLink>
              </div>
            </div>
          )
        }
      </div>
    </div >

  );
};

export default Services;
