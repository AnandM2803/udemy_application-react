import React from "react";
import { HiUser } from "react-icons/hi2";
import "./AccelerateGrowth.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
function AccelerateGrowth() {
  return (
    <div className="accelerate-main-container">
      <div className="accelerate-text-container">
        <h2>Accelerate growth-for you organization</h2>
        <h4>
          Reach goals faster with one of our plans or programs. Try one free
          today or contact sales to learn more.
        </h4>
      </div>
      <div className="plan-main-container">
        <div className="plan-container">
          <div className="plan-text">
            <h3>Personal Plan</h3>
            <h5>For you</h5>
            <h6>
              <HiUser /> Individual
            </h6>
          </div>
          <div className="plan-sub-text">
            <h3>Starting at ₹850 per month</h3>
            <h4>Billed monthly or annually. Cancel anytime.</h4>
            <button>
              Start subscription <FaArrowRightLong className="rightarrow" />
            </button>
            <ul>
              <li>
                {" "}
                <FaRegCircleCheck className="rightarrow" />
                <p>Access to 11,000+ top courses</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Certification prep</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Goal-focused recommendations</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow"/>
                <p>AI-powered coding exercises</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="plan-container">
          <div className="plan-text">
            <h3>Team Plan</h3>
            <h5>For your team</h5>
            <h6>
            <ImUsers /> 2 to 20 people
            </h6>
          </div>
          <div className="plan-sub-text">
            <h3>₹1,167 a month per user</h3>
            <h4>Billed annually. Cancel anytime.</h4>
            <button>
              Start subscription <FaArrowRightLong className="rightarrow" />
            </button>
            <ul>
              <li>
                {" "}
                <FaRegCircleCheck className="rightarrow" />
                <p> Access to 11,000+ top courses</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Certification prep</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Goal-focused recommendations</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>AI-powered coding exercises</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Analytics and adoption reports</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="plan-container">
          <div className="plan-text">
            <h3>Enterprise Plan</h3>
            <h5>For your whole Org</h5>
            <h6>
            <ImUsers /> More than 20 people
            </h6>
          </div>
          <div className="plan-sub-text">
            <h3>Contact sales for pricing</h3> <br />
            {/* <h4>Billed monthly or annually. Cancel anytime.</h4> */}
            <button>
              Request a demo  <FaArrowRightLong className="rightarrow" />
            </button>
            <ul>
              <li>
                {" "}
                <FaRegCircleCheck className="rightarrow" />
                <p>Access to 25,000+ top courses</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Certification prep</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Goal-focused recommendations</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>AI-powered coding exercises</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Advanced analytics and insights</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Dedicated customer success team</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Customizable content</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Hands-on tech training with add-on</p>
              </li>

            </ul>
          </div>
        </div>

        <div className="plan-container">
          <div className="plan-text">
            <h3>Personal Plan</h3>
            <h5>For you</h5>
            <h6>
              <HiUser /> Individual
            </h6>
          </div>
          <div className="plan-sub-text">
            <h3>Starting at ₹850 per month</h3>
            <h4>Billed monthly or annually. Cancel anytime.</h4>
            <button>
              Start subscription <FaArrowRightLong className="rightarrow" />
            </button>
            <ul>
              <li>
                {" "}
                <FaRegCircleCheck className="rightarrow" />
                <p>Access to 11,000+ top courses</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Certification prep</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>Goal-focused recommendations</p>
              </li>
              <li>
                <FaRegCircleCheck className="rightarrow" />
                <p>AI-powered coding exercises</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccelerateGrowth;
