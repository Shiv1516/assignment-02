import React from "react";

function Companies() {
  return (
    <div className="companies-section ptb48 wrapper pr">
      <img
        src="images/section-img-02.png"
        alt="bg-img"
        className="section-img-02 pa df"
      />
      <h2 className="section-heading fs36 lh34 fw6 tac fc1 ptb32">
        Trusted by 200+ Companies Worldwide
      </h2>
      <div className="companies-cards df fww mt32 ptb24 bg1">
        <div className="companies-card flx20 df aic">
          <div className="companies-inner-card mlr24">
            <img
              src="images/companies-01.png"
              alt="companies-icon"
              className="companies-img w100 p12"
            />
          </div>
        </div>
        <div className="companies-card flx20 df aic">
          <div className="companies-inner-card mlr24">
            <img
              src="images/companies-02.png"
              alt="companies-icon"
              className="companies-img w100 p12"
            />
          </div>
        </div>
        <div className="companies-card flx20 df aic">
          <div className="companies-inner-card mlr24">
            <img
              src="images/companies-03.png"
              alt="companies-icon"
              className="companies-img w100 p12"
            />
          </div>
        </div>
        <div className="companies-card flx20 df aic">
          <div className="companies-inner-card mlr24">
            <img
              src="images/companies-01.png"
              alt="companies-icon"
              className="companies-img w100 p12"
            />
          </div>
        </div>
        <div className="companies-card flx20 df aic">
          <div className="companies-inner-card mlr24">
            <img
              src="images/companies-02.png"
              alt="companies-icon"
              className="companies-img w100 p12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
