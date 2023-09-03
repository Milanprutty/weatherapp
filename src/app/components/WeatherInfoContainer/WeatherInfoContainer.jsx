"use client";
import React, { useEffect, useState } from "react";
import "./WeatherInfo.css";
import Input from "../Input/Input";

import Image from "next/image";
import WeatherApi from "../api/WeatherApi";
import { images } from "./WeatherPics";
import { BiWater, BiWind } from "react-icons/bi";
//
const WeatherInfoContainer = () => {
  const [apiInfo, setApiInfo] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const [currentStyle, setCurrentStyle] = useState({});
  const [currHour, setCurrHour] = useState();

  const fetchHours = () => {
    const date = new Date().getHours();

    return date;
  };

  const getData = async (currentText) => {
    try {
      const res = await WeatherApi(currentText);
      setCurrHour(fetchHours());

      setApiInfo(res);
    } catch (error) {
      setApiInfo();
      console.log(error);
    }
  };

  useEffect(() => {
    switch (apiInfo?.data?.weather[0]?.main) {
      case "Clear":
        if (currHour > 20 && currHour < 6) {
          setCurrentImg(images.moonImg);
          setCurrentStyle({
            background: "linear-gradient(#30d0dbd0, #4b54b6)",
          });
        } else {
          setCurrentImg(images.sunImg);
          setCurrentStyle({
            background: "linear-gradient(#fd6906d0, #4b54b6)",
          });
        }

        break;
      case "Clouds":
        setCurrentImg(images.cloudImg);
        setCurrentStyle({ background: "linear-gradient(#1c494dd0, #3a4194)" });
        break;

      case "Rain":
        setCurrentImg(images.rainyImg);

        setCurrentStyle({ background: " linear-gradient(#2342ccd0, #081285)" });

        break;
      case "Thunderstorm":
        setCurrentImg(images.thunderstormImg);

        setCurrentStyle({ background: "linear-gradient(#19224bd0, #010424)" });

        break;
      case "Snow":
        setCurrentImg(images.snowflakeImg);
        setCurrentStyle({ background: "linear-gradient(#535355d0, #e1e1e2)" });
        break;
      case "Mist":
        setCurrHour(images.mistImg);
        setCurrentStyle({ background: "linear-gradient(#535355d0, #e1e1e2)" });
        break;
      default:
        break;
    }
  }, [apiInfo]);

  return (
    <div className="InfoBoxContainer">
      <div className="InfoBox" style={currentStyle}>
        <Input getData={getData} />
        {!apiInfo ? (
          ""
        ) : (
          <div className="infos">
            <div className="ImgDiv">
              <Image src={currentImg} alt="Enter a city" />
            </div>
            <div className="InfoContainer">
              <div>{Math.floor(apiInfo?.data?.main?.temp)}°C</div>
              <div>{apiInfo?.data?.name}</div>
              <div className="IconContainer">
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BiWater />
                    {apiInfo?.data?.main?.humidity}%
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    humidity
                  </p>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BiWind />
                    {apiInfo?.data?.wind?.speed}km/h
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    windspeed
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherInfoContainer;
