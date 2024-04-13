import React from "react";
import "./updates.css";
import data from "../../data/updates.json";

const Updates = () => {
  return (
    <div id="container-updates">
      <h1>Exam Updates</h1>
      <div id="main-container">
        {data.map((val) => {
          return (
            <div id="card" key={val.id}>
              <h1>{val.title}</h1>
              <h3>{val.subject}</h3>
              <p>{val.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Updates;
