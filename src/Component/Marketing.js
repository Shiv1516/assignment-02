import React from "react";
import Image from "next/image";
const Marketing = () => {
  return (
    <div className="marketing-sectin ptb48 wrapper df fww">
      <div className="marketing-cards flx33 pr">
        <div className="marketinf-card ptb40 ofh plr12 bg5 br24 mlr16">
          <h3 className="marketing-heading fs20 fw6 mb32">Vast Job Market</h3>
          <p className="marketing-subtext lh24 fs15">
            India has more than 10L job openings in accounting and finance every
            year
          </p>
          <Image
            width={150}
            height={150}
            src="/images/marketing-img-01.png"
            alt="marketing-img"
            className="marketing-img pa r5 t15 zi3"
          />
        </div>
      </div>
      <div className="marketing-cards flx33 pr">
        <div className="marketinf-card ptb40 ofh plr12 bg5 br24 mlr16">
          <h3 className="marketing-heading fs20 fw6 mb32">Vast Job Market</h3>
          <p className="marketing-subtext lh24 fs15">
            India has more than 10L job openings in accounting and finance every
            year
          </p>
          <Image
            width={150}
            height={150}
            src="/images/marketing-img-02.png"
            alt="marketing-img"
            className="marketing-img pa r5 t15 zi3"
          />
        </div>
      </div>
      <div className="marketing-cards flx33 pr">
        <div className="marketinf-card ptb40 ofh plr12 bg5 br24 mlr16">
          <h3 className="marketing-heading fs20 fw6 mb32">Vast Job Market</h3>
          <p className="marketing-subtext lh24 fs15">
            India has more than 10L job openings in accounting and finance every
            year
          </p>
          <Image
            width={150}
            height={150}
            src="/images/marketing-img-03.png"
            alt="marketing-img"
            className="marketing-img pa r5 t15 zi3"
          />
        </div>
      </div>
      <div className="marketing-cards flx33 pr">
        <div className="marketinf-card ptb40 ofh plr12 bg5 br24 mlr16">
          <h3 className="marketing-heading fs20 fw6 mb32">Vast Job Market</h3>
          <p className="marketing-subtext lh24 fs15">
            India has more than 10L job openings in accounting and finance every
            year
          </p>
          <Image
            width={150}
            height={150}
            src="/images/marketing-img-03.png"
            alt="marketing-img"
            className="marketing-img pa r5 t15 zi3"
          />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
