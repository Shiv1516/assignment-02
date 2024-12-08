import React from "react";
import Link from "next/link";
function Counseling() {
  return (
    <div className="pr bg1 ptb40 t0 l0">
      <img
        src="/images/section-bg-img.png"
        alt="bg-img"
        className="section-img-01 pa df"
      />
      <div className="counseling-section wrapper df fww ptb48 aic">
        <div className="counseling-section-heading flx50">
          <h2 className="counseling-heading fs36 lh34 fc2 fw6 plr24 mb40">
            Want to take a customised counselling before enrolling?
          </h2>
          <div className="counseling-btn-box df fww pl32 pt32">
            <Link
              href="#"
              className="counseling-btn mr24 h48 bg6 plr24 br8 ttu fw5 df aic"
            >
              Download Brochure
            </Link>
            <Link
              href="#"
              className="counseling-btn bg3 h48 plr24 br8 ttu fw5 df aic"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="counseling-form-box flx1 plr24 ptb48 br24 bg6">
          <h3 className="counseling-form-heading fs20 mb32 fw6">
            Enroll for Free Counseling
          </h3>
          <div className="counseling-form bg5 plr12 ptb24  df fdc">
            <input
              type="text"
              placeholder="Name"
              className="pb16 brd-b1 pl8 fw6 bg5  mb16"
            />
            <input
              type="number"
              placeholder="Phone No."
              className="pb16 brd-b1 pl8 fw6 bg5  mb16"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="pb16 brd-b1 pl8 fw6 bg5  mb16"
            />
            <input
              type="text"
              placeholder="I am a:"
              className="pb16 brd-b1 pl8 fw6 bg5  mb16"
            />
            <input
              type="text"
              placeholder="City/State"
              className="pb16 brd-b1 pl8 fw6 bg5  mb16"
            />
            <input
              type="text"
              placeholder="Why you want to take the counseling session"
              className="pb16 brd-b1 pl8 fw6 bg5  mb16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counseling;
