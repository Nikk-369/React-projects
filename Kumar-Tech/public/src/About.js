import React from "react";
import web from "./Images/images.jpeg";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <section id="header" className="display-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1 style={{ paddingTop: "30%" }}>
                    Welcome to About page....
                    <strong style={{ color: "blueviolet" }}>
                      KumarTechnical{" "}
                    </strong>
                  </h1>
                  <h4>
                    We are the team of talented developers making websites
                  </h4>
                </div>
                <div className="col-lg-6 order-lg-2" style={{ padding: "15%" }}>
                  <img src={web} alt="home.img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
