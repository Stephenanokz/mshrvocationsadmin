import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img src="https://ik.imagekit.io/stephenanokz98/o/imgs%2FLOGO1.png?alt=media&token=7e16973d-39e2-462e-9f90-1a3404424520" className="homeImg" alt="logo" />
      <h1 className="homeTitle">
        Welcome back, {JSON.parse(localStorage.getItem("user")).username}.
      </h1>
      <span className="homeSubTitle">
        To create and edit any Module, please use the appropriate tab on the Sidebar
      </span>
    </div>
  );
};

export default Home;
