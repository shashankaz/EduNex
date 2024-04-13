import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resources.css";
import data from "../../data/resource.json";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="container-resources">
      <h1>Resources</h1>
      <div id="search-bar">
        <input
          type="text"
          placeholder="Search resources here"
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

export default Resources;
