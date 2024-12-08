import Link from "next/link";
import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";

function Hero() {
  return (
    <div className="hero bg5">
      <div className="hero-section ptb48 wrapper">
        <h2 className="section-heading fs44 lh34 fw6 tac ptb32">
          Certified Corporate Accounting
        </h2>
        <div className="hero-cards df fww pt32 aie">
          <div className="hero-left-card flx50">
            <div className="hero-left-sec-content mlr32 mb32">
              <div className="hero-timing bg6 df fww br8 p16 mb32">
                <div className="hero-duration flx50">
                  <h3 className="hero-duration-heading fw6 mb12 fs20">
                    Duration
                  </h3>
                  <p className="hero-duration-subheading fs14"> 9 Months</p>
                </div>
                <div className="hero-duration flx50">
                  <h3 className="hero-duration-heading fw6 mb12 fs20">
                    Starts
                  </h3>
                  <p className="hero-duration-subheading fs14">in 15 days</p>
                </div>
              </div>
              <div className="hero-buttons df fww">
                <Link
                  href="#"
                  className="hero-download-btn  bg1 h48 plr24 ttu br8 df aic fc2 mr16"
                >
                  Download Brochure
                </Link>
                <Link
                  href="#"
                  className="hero-apply-btn bg4 h48 plr24 ttu br8 aic df"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-right-card flx1 bg1 br24 ptb48 plr32 tac mlr24">
            <h4 className="hero-offer fs18 mb24 fc2 ptb16 bs1 br24">
              Limited Time Offer
            </h4>
            <h3 className="hero-scholarship fw6 fs18 mb24 fc2">
              Get Scholarship Up To 50%
            </h3>
            <Link
              href="#"
              className="hero-download wsnw h48 jcc df aic plr24 fw6 bg4 mb40"
            >
              <MdOutlineDownloadForOffline className="mr12 fs32 fw4" />
              DOWNLOAD PROSPECTUS
            </Link>
            <ul className="hero-right-timing df fww ptb24">
              <li className="hero-right-timging-list flx33">
                <div className="timing bg6 tac mlr16 p16 br8">
                  <h3 className="fs24 mb8 fw6">00</h3>
                  <p className="fs12">Days</p>
                </div>
              </li>
              <li className="hero-right-timging-list flx33">
                <div className="timing bg6 tac mlr16 p16 br8">
                  <h3 className="fs24 mb8 fw6">00</h3>
                  <p className="fs12">Days</p>
                </div>
              </li>
              <li className="hero-right-timging-list flx33">
                <div className="timing bg6 tac mlr16 p16 br8">
                  <h3 className="fs24 mb8 fw6">00</h3>
                  <p className="fs12">Days</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
