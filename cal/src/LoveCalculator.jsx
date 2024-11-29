import React, { useState, useEffect } from "react";
import "./App.css";

function LoveCalculator() {
  const [nameFirst, setNameFirst] = useState("");
  const [nameSecond, setNameSecond] = useState("");
  const [message, setMessage] = useState("");
  const [btnStyle, setBtnStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  useEffect(() => {
    const handleMouseEnter = () => {
      setBtnStyle({ backgroundColor: "#df003f", color: "white" });
    };

    const handleMouseLeave = () => {
      setBtnStyle({ backgroundColor: "white", color: "black" });
    };

    const button = document.querySelector(".btn");
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const calculateLove = () => {
    if (nameFirst && nameSecond) {
      const lovePercentage = Math.ceil(Math.random() * 100);
      setMessage(
        `${nameFirst} and ${nameSecond} love calculation is ${lovePercentage}%`
      );
    } else {
      setMessage("Please enter both names.");
    }
  };

  return (
    <div className="main">
      <div className="box">
        <h1>
          Calculate <span style={{ color: "red" }}>your</span> Love %
        </h1>
        <img
          src="https://imgs.search.brave.com/FVDAANCQiPJihVijM5OI9sJcCpNKWFkTJCBSeHAdkd4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cucG5nYWxsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNy9Db3VwbGUtUE5HLUltYWdlcy5wbmc"
          alt=""
          width="79px"
          height="79px"
        />
        <div className="name_first">
          <label htmlFor="firstName">Enter your Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="first"
            value={nameFirst}
            onChange={(e) => setNameFirst(e.target.value)}
          />
        </div>
        <br />
        <div className="name_second">
          <label htmlFor="secondName">Enter your Partner's Name</label>
          <input
            type="text"
            placeholder="Enter your partner"
            className="second"
            value={nameSecond}
            onChange={(e) => setNameSecond(e.target.value)}
          />
        </div>
        <br />
        <img
          src="https://imgs.search.brave.com/XoShE-w3aEuPTLQdnxJxHZGBp80fuN1DvV5mw9XJ5yo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVzcG5nLmNvbS9pbWctcG5nL3JlZC1oZWFydC1sb3ZlLXBuZy1pbWFnZS0zMDg3Ny0xNjAwLnBuZw"
          alt=""
          width="130px"
          height="100px"
        />
        <div>
          <button
            type="button"
            className="btn"
            onClick={calculateLove}
            style={btnStyle}
          >
            Calculate Love
          </button>
        </div>
        <br />
        <h3 className="message">{message}</h3>
      </div>
    </div>
  );
}

export default LoveCalculator;
