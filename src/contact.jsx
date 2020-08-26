import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Your Name is ${data.fullname}, You mail Id is -> ${data.email}, 
    your phone number is -> ${data.phone}, You want to say --->>
    ${data.message} !!`);
    setData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <div className="my-5">
        <div className="text-center h1">Contact US</div>
      </div>
      <div className="container contact__div" style={{ marginBottom: "200px" }}>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInputName"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInputName"
                  placeholder="Enter Your Name"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInputEmail"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInputEmail"
                  placeholder="example@email.com"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInputPh"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInputPh"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextareaMessage"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextareaMessage"
                  placeholder="Leave us some message ..."
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  rows="3"
                  data-gramm_editor="false"
                ></textarea>
              </div>
              <div className="col-12">
                <div
                  className="btn btn-outline-info"
                  type="submit"
                  onClick={formSubmit}
                >
                  Sumbmit Now
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
