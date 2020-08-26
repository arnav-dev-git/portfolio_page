import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum iusto, amet repellat libero recusandae pariatur quo porro
              accusantium eos.
            </p>
            <NavLink to="#" className="card-btn">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
