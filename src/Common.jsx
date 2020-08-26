import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
    const brandName = props.brandName;
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav__bg" style={{marginBottom:"80px"}}>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row pl-3">
                <div className="col-md-6 pt-5 pt-lg-1 order-2 order-lg-1 mt-0 d-flex justify-content-center flex-column hero-tx-out">
                  <h1>
                    {props.name}
                    {
                      <strong
                        className="brand-name"
                        style={{ color: "#6C63FF" }}
                      >
                        {brandName}
                      </strong>
                    }
                  </h1>
                  <h2 style={{ fontWeight: "400" }} className="my-3">
                    We are the group of Talented Developers making Websites
                  </h2>
                  <h3 style={{ fontWeight: "100" }}>
                    <NavLink className="mt-3 btn-get-started" to={props.where}>
                      {props.btnName}
                    </NavLink>
                  </h3>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  {/* <img src={heroImgBg} alt="hero img bg" className="hero_svg_bg"></img> */}

                  <img
                    src={props.imgsrc}
                    alt="hero img"
                    className="image-fluid vert-move hero_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
