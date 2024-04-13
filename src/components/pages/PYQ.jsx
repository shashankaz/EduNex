import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pyq.css";
import data from "../../data/pyq.json";

const Pyq = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="container-pyq">
      <h1>PYQ</h1>
      <div id="search-bar">
        <input
          type="text"
          placeholder="Search pyq here"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div id="main-container">
        {data
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <Link to={val.slug} target="_blank">
                <div id="card" key={val.id}>
                  <img src={val.image.src} alt={val.image.alt} />
                  <h1>{val.title}</h1>
                  <h3>{val.subject}</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Pyq;
