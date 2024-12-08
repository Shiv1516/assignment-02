import React from "react";
import Image from "next/image";
import { LuDot } from "react-icons/lu";

function Jobboard() {
  return (
    <div className="bg4 ptb40">
      <div className="jobboard-section ptb48 df aic fww wrapper">
        <div className="jobboard-card flx50 tac">
          <div className="jobboard-inn-card mlr24 bg1 br8 plr24 ptb40 fc2">
            <h3 className="jobboard-heading fs20 fw6 mb16">
              Placement Assistance & Process
            </h3>
            <Image
              width={150}
              height={150}
              src="/images/placement.svg"
              alt="jobboard-img"
              className="jobboard-img"
            />
            <ul className="jobboard-list">
              <li className="jobboard-item df mb16 tal">
                <LuDot className="mr8" /> Personalized guidance to help you
                secure your ideal job.
              </li>
              <li className="jobboard-item df tal">
                <LuDot className="mr8" /> Personalized guidance to help you
                secure your ideal job.
              </li>
            </ul>
          </div>
        </div>
        <div className="jobboard-card flx50 tac">
          <div className="jobboard-inn-card mlr24 bg1 br8 plr24 ptb40 fc2">
            <h3 className="jobboard-heading fs20 fw6 mb16">
              Placement Assistance & Process
            </h3>
            <Image
              width={150}
              height={150}
              src="/images/cv.svg"
              alt="jobboard-img"
              className="jobboard-img"
            />
            <ul className="jobboard-list">
              <li className="jobboard-item df mb16 tal">
                <LuDot className="mr8" /> Personalized guidance to help you
                secure your ideal job.
              </li>
              <li className="jobboard-item df tal">
                <LuDot className="mr8" /> Personalized guidance to help you
                secure your ideal job.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobboard;
