import React from "react";
import Link from "next/link";
function Enrolling() {
  return (
    <div className="enroll-section wrapper df fww ptb48 mtb40 aic">
      <div className="enroll-section-heading flx50">
        <h2 className="enroll-heading fs36 lh34 fw6 plr24 mb40">
          Want to take a customised counselling before enrolling?
        </h2>
        <div className="enroll-btn-box dib pl32">
          <Link
            href="#"
            className="enroll-btn bg1 h48 plr24 br8 ttu fw5 fc2 df aic"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div className="enroll-form-box flx1 plr24 ptb48 br24 bg1">
        <h3 className="enroll-form-heading fs20 fc2 mb32 fw6">
          Enroll for Free Counseling
        </h3>
        <div className="enroll-form bg6 plr12 ptb24 fc1 df fdc">
          <input
            type="text"
            placeholder="Name"
            className="pb16 brd-b1 pl8 fw6 mb16"
          />
          <input
            type="number"
            placeholder="Phone No."
            className="pb16 brd-b1 pl8 fw6 mb16"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="pb16 brd-b1 pl8 fw6 mb16"
          />
        </div>
      </div>
    </div>
  );
}

export default Enrolling;
