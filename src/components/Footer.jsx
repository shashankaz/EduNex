import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div id="container-footer">
        <div id="logo">
          <Link to={"/"}>
            <h1>
              Edu<span>Nex</span>
            </h1>
          </Link>
        </div>
        <div id="links">
          <div id="box">
            <ul>
              <li id="head">Quick Links</li>
              <li>
                <Link to={"/notes"}>Notes</Link>
              </li>
              <li>
                <Link to={"/pyq"}>Previous Year Papers (PYQ)</Link>
              </li>
              <li>
                <Link to={"/resources"}>Study Resources</Link>
              </li>
              <li>
                <Link to={"/updates"}>Exam Updates</Link>
              </li>
            </ul>
          </div>
          <div id="box">
            <ul>
              <li id="head">About Us</li>
              <li>
                <Link to={"/members"}>Team Members</Link>
              </li>
              <li>
                <Link to={"/info"}>Contact Information</Link>
              </li>
            </ul>
          </div>
          <div id="box">
            <ul>
              <li id="head">Help & Support</li>
              <li>
                <Link to={"/faq"}>FAQs</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/feedback"}>Feedback Form</Link>
              </li>
            </ul>
          </div>
          <div id="box">
            <ul>
              <li id="head">Connect with Us</li>
              <li>
                <Link to={"https://www.facebook.com/"} target="_blank">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to={"https://www.instagram.com/"} target="_blank">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to={"https://twitter.com/"} target="_blank">
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link to={"https://www.youtube.com/"} target="_blank">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="copy">
        <p>&copy; 2024 EduNex. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
