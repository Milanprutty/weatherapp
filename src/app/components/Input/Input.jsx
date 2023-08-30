"use client";
import React, { useState } from "react";
import WeatherApi from "../api/WeatherApi";
import "./Input.css";

const Input = () => {
  const [currentText, setCurrentText] = useState("");
  const [apiInfo, setApiInfo] = useState("");

  const getData = async () => {
    try {
      const res = await WeatherApi(currentText);

      setApiInfo(res);
      console.log(apiInfo);
    } catch (error) {
      setApiInfo();
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleSubmit = (e) => {
    getData();
    e.preventDefault();
    setCurrentText("");
  };

  return (
    <div>
      <div className="inputContainer">
        <form onSubmit={handleSubmit}>
          <label>enter a city name</label>
          <input onChange={handleChange} value={currentText} required />
          <button>submit</button>
          {apiInfo?.data?.name}
        </form>
      </div>
    </div>
  );
};

export default Input;
