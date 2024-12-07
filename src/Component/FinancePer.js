import React from "react";
import Image from "next/image";
function FinancePer() {
  return (
    <div className="bg3">
      <div className="finances-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc1 tb32">
          Our Finance Partner
        </h2>
        <div className="finance-cards df fww aic pt32">
          <div className="finance-content flx60">
            <p className="finance-subtext lh24 pr24">
              With Our Finance Partner, You Can Now Enjoy Easy And Affordable
              Payment Options, Making Quality Education More Accessible Than
              Ever Which Ensures Financial Flexibility Without Any Hassle.
              Discover The Benefits Of Our New EMI Plans And Take The Next Step
              In Your Learning Journey With Confidence.​
            </p>
          </div>
          <div className="finance-img-card flx1 df jcc">
            <div className="finance-img br50 bg6 p32 ofc">
              <Image
                src="/images/finance-img.png"
                alt="finance"
                width={200}
                height={100}
                className="finance-img ptb24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancePer;
