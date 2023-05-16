import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            admin@mshr.org
          </span>
        </div>
        <div className="topRight">
          <img
            src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fmshr.jpg?alt=media&token=58f4cee0-5149-42fc-a5c3-02ff3a24f845"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
