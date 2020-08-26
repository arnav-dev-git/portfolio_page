import React from "react";
import Card from "./Card";
import Sdata from "./sourceData";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Sevices</h1>
        <div className="container-fluid nav__bg">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row gy-5 mt-4">
                {Sdata.map((val, index) => {
                  return (
                    <Card img={val.imgSrc} title={val.title} key={index} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
