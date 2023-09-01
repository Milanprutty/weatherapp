"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./Input.css";

const Input = ({ getData }) => {
  const [currentText, setCurrentText] = useState("");

  const handleChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleSubmit = (e) => {
    getData(currentText);
    e.preventDefault();
    setCurrentText("");
  };

  return (
    <div>
      <div className="inputContainer">
        <form onSubmit={handleSubmit}>
          <input
            id="cityInput"
            onChange={handleChange}
            value={currentText}
            required
            placeholder="Enter A City"
          />
          <button className="formBtn">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
