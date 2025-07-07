import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";
import "../styles/Home.css";

function Home() {
  const { setName } = useContext(UserContext);
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleStart = () => {
    if (inputName.trim() === "") {
      alert("Please enter your name");
      return;
    }
    setName(inputName.trim());
    navigate("/topics");
  };

  return (
    <div className="home-wrapper">
      <Header />
      <img
        src="/akaza.png"
        alt="Left Visual"
        className="corner-image left"
      />
      <img
        src="/attack.png"
        alt="Right Visual"
        className="corner-image right"
      />
      <div className="home-container">
        <h1 className="main-title"> Demon Slayer Quiz Portal </h1>
        <p className="sub-title">Sharpen your dev skills. Start your quest!</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="name-input"
        />
        <br />
        <br />
        <button className="start-btn" onClick={handleStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;
