import React, { useState } from "react";
import Chatbot from "../chatbots/Chatbot";
import { FaBriefcase, FaSearch, FaTimes } from "react-icons/fa";
import "./job.css";
import Readmore from "./Readmore";
import data from "./templateData.json";
function Job() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <FaBriefcase className="job-icon" />
            <span className="logo-text">JOBS PORTAL</span>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search job role here ..."
              className="search-input"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <div className="search-icon">
              {searchTerm.length === 0 ? <FaSearch /> : <FaTimes />}
            </div>
          </div>
        </div>
      </nav>
      <div className="templateContainer">
        <div className="template_Container">
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
                <div className="template" key={val.id}>
                  <div className="img">
                    <img src={val.image} alt="" />
                  </div>
                  <div className="content">
                    <h3>{val.comp}</h3>
                    <label>
                      Role:&nbsp;&nbsp;<b>{val.title}</b>
                    </label>

                    <p>
                      {val.desc} <br></br>
                      <br></br>Qualifications:
                    </p>
                    <Readmore text={val.Qfication} maxlength={100} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Chatbot />
    </>
  );
}

export default Job;
