import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./FocusedGolas.css";
function FocusedGolas() {
  return (
    <nav className="focused-container">
      <div className="learning-container">
        {" "}
        <h3>Learning focused on your goals</h3>{" "}
      </div>
      <div className="all-containers">
        <div className="heads-on-container">
          <div className="hands-img">
            <img src="./hands-on-practice.png"></img>
          </div>
          <div className="hands-text">
            <h3>Hands-on training</h3>
          </div>
          <div className="hands-subtext">
            <h5>
              Upskill effectively with AI-powered coding exercises, <br />{" "}
              practice tests, skills assessments, labs, and workspaces.
            </h5>
          </div>
        </div>
        <div className="certificate-container">
          <div className="certificate-img">
            <img src="./certificate.png"></img>
          </div>
          <div className="certificate-text">
            <h3>Certification prep</h3>
          </div>
          <div className="certificate-subtext">
            <h5>
            Prep for industry-recognized certifications by solving <br />real-world challenges and earn badges along the way.
            </h5>
          </div>
        </div>
        <div className="insight-container">
          <div className="insight-img">
            <img src="./hands-on-practice.png"></img>
          </div>
          <div className="insight-text">
            <h3>Insights and analytics</h3> <button>Enterprice plan</button>
          </div>
          <div className="insight-subtext">
            <h5>
              Upskill effectively with AI-powered coding exercises, <br />{" "}
              practice tests, skills assessments, labs, and workspaces.
            </h5>
            <a href="#" >Find out more <FaArrowRightLong /> </a>
          </div>
        </div>

        <div className="customizable-container">
          <div className="customizable-img">
            <img src="./organizations-2.png"></img>
          </div>
          <div className="customizable-text">
            <h3>Customizable content</h3> <button>Enterprice plan</button>
          </div>
          <div className="customizable-subtext">
            <h5>
            Create tailored learning paths for team and organization <br /> goals and even host your own content and resources.
            </h5>
            <a href="#">Find out more <FaArrowRightLong /> </a>
          </div>
        </div>
      </div>

      <div className="long-img-container"> 
      <img src="./desktop-hands-on-learning-2x.png" alt="" />
      </div>
    </nav>
  );
}

export default FocusedGolas;
