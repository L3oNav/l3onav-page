import React from "react";

function UserInf(props) {
  return (
    <div className="Center-img">
      <div className="Header-user">
        <img src={props.UsrImg} alt="" className="UserImg" />
        <div className="User-text">
          <a href="https://platzi.com/@L3oNav/" target="_blank" className="a-container">
            <h1>{props.UsrName}</h1>
            <h3>{props.UsrJob}</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserInf;
