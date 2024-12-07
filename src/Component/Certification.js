import React from "react";

function Certification() {
  return (
    <div className="certificate wrapper df fww ptb48 aic">
      <div className="certificate-text flx50">
        <h2 className="certificate-heading fs36 lh34 fw6 fc1">
          Get Industry Recognised Certification
        </h2>
      </div>
      <div className="certificate-img flx1">
        <img
          src="images/certificate-01.png"
          alt="certificate-img"
          className="certificate-img"
          width={600}
          height={400}
        />
        {/* <img src="images/certificate-01.png" alt="" className="w100" /> */}
      </div>
    </div>
  );
}

export default Certification;
