import React from "react";
import Image from "next/image";
function Programs() {
  return (
    <div className="program-section ptb48 wrapper bg6">
      <h2 className="section-heading fs36 lh34 fw6 tac fc1 ptb32">Programs</h2>
      <div className="program-cards df fww pt32">
        <div className="program-card flx25">
          <div className="program-inn-card mlr16 ptb24 plr12 bg4 tac br8">
            <Image
              src="/images/corporate-01.png"
              width={42}
              height={42}
              alt="program"
              className="program-img mb16"
            />
            <h3 className="program-card-heading fs20 mb24 fw6 mb24">
              Overall Approach
            </h3>
            <p className="program-subheading lh24">
              Prepare to make your mark in accounting with a course designed to
              equip you for success.
            </p>
          </div>
        </div>
        <div className="program-card flx25">
          <div className="program-inn-card mlr16 ptb24 plr12 bg4 tac br8">
            <Image
              src="/images/corporate-01.png"
              width={42}
              height={42}
              alt="program"
              className="program-img mb16"
            />
            <h3 className="program-card-heading fs20 mb24 fw6 mb24">
              Overall Approach
            </h3>
            <p className="program-subheading lh24">
              Prepare to make your mark in accounting with a course designed to
              equip you for success.
            </p>
          </div>
        </div>
        <div className="program-card flx25">
          <div className="program-inn-card mlr16 ptb24 plr12 bg4 tac br8">
            <Image
              src="/images/corporate-01.png"
              width={42}
              height={42}
              alt="program"
              className="program-img mb16"
            />
            <h3 className="program-card-heading fs20 mb24 fw6 mb24">
              Overall Approach
            </h3>
            <p className="program-subheading lh24">
              Prepare to make your mark in accounting with a course designed to
              equip you for success.
            </p>
          </div>
        </div>
        <div className="program-card flx25">
          <div className="program-inn-card mlr16 ptb24 plr12 bg4 tac br8">
            <Image
              src="/images/corporate-01.png"
              width={42}
              height={42}
              alt="program"
              className="program-img mb16"
            />
            <h3 className="program-card-heading fs20 mb24 fw6 mb24">
              Overall Approach
            </h3>
            <p className="program-subheading lh24">
              Prepare to make your mark in accounting with a course designed to
              equip you for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
