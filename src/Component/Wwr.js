import React from "react";
import Image from "next/image";

function Wwr() {
  return (
    <div className="bg4">
      <div className="wwe-section ptb48 df aic fww wrapper">
        <div className="wwe-img flx50 df jcc">
          <Image
            src="/images/wwr-01.png"
            width={400}
            height={400}
            alt="wwr-img"
            className="wwr-images"
          />
        </div>
        <div className="wwe-contend flx1">
          <h3 className="eer-text lh28 fs18 plr24">
            At Skill Mantra, we are dedicated to empowering individuals with the
            practical skills and knowledge needed to excel in today’s
            competitive job market. Specialising in short-term, job-oriented
            courses, we bridge the gap between academic learning and real-world
            demands. Our mission is to equip our students with industry-relevant
            expertise, ensuring they are job-ready from day one. With a focus on
            fields like accounting, HR, tax, and financial modelling, we provide
            hands-on training and career support to help you succeed in your
            chosen profession.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Wwr;
