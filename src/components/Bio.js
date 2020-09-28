import React from "react";
import "../App.css";
import "./Bio.css";
import { Resume } from "./Resume";

function Bio() {
  return (
    <div className="bio-container">
      <h2>Bio</h2>
      <p>
      I'm currently a Retail Salesperson at Hope Ace Hardware and Plumbing in Colchester, CT and enrolled in the FullStack Development Boot Camp from UConn. I have a Bachelor's of Science in Animal Science from UConn, and an Associate's in Liberal Arts and Sciences from Three Rivers Community College.
I consider myself to be well-rounded. My skills and interests are diverse because I think that every aspect of the world is worth exploring. I love adding new skills and knowledge to my ever-growing collection and becoming a more complete person because of it.{" "}
      </p>
      <div className="bio-btns">
        <Resume
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          RESUME
        </Resume>
      </div>
    </div>
  );
}

export default Bio;
