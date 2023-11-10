import React from "react";
import { useState } from "react";
import NavBar from "../LandingPage/NavBar";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data);
  };

  return (
    <>
      <NavBar />
      <div className="ui container" style={{ marginTop: "10em" }}>
        <form className="ui form" method="POST" onSubmit={handleSubmit}>
          <div className="field">
            <h1>
              Contact <span>Us</span>
            </h1>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              type="text"
              name="Name"
              id=" "
              onChange={handleChange}
              value={data.name}
              placeholder="Enter name"
            />
          </div>

          <div className="field">
            <input
              type="email"
              name="Email"
              id=" "
              onChange={handleChange}
              value={data.email}
              placeholder="Enter email"
            />
          </div>

          <div className="field">
            <input
              type="number"
              name="phone"
              id=" "
              onChange={handleChange}
              value={data.phone}
              placeholder="Enter phone"
            />
          </div>

          <div className="field">
            <textarea
              name="Message"
              id=""
              cols="38"
              onChange={handleChange}
              value={data.message}
              rows="10"
              placeholder="Type here"
            ></textarea>
          </div>
          <button className="fluid ui button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
