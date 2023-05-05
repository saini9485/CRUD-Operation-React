import React, { useState } from "react";

import "./style/Create.css";
import axios from "axios";

export function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


const handleSubmit = () =>{
    axios.post("https://mockapi.io/projects/6454180ee9ac46cedf375daf",{
name: "name",
email: "email"


    }
      

    )
}

  return (
    <div className="form-container">
      <h1>Create Form</h1>
      <form className="form">
        <div className="name">
          <label className="form-label">Name</label>
          <input
            type="text"
            placeholder="name"
            className="name input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="email input"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
        </div>
        <div className="btn">
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
