import React from "react";
import web from "./Images/new.avif"
import Button from "react-bootstrap/Button";
const Home = () => {
  return (
    <>
      <section className="display-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1 style={{paddingTop: "30%"}}>
                    Grow your business with{" "}
                    <strong style={{color:"blueviolet"}}>KumarTechnical </strong>
                  </h1>
                  <h4>
                    We are the team of talented developers making websites
                  </h4>
                  <div >
                    <a href="./service">
                      <Button variant="primary">Get Started</Button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2" style={{paddingLeft: "10%", paddingTop: "10%"}}>
                  <img
                    src={web}
                    alt="home.img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
