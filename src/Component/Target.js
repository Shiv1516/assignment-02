import React from "react";
import Image from "next/image";

function Target() {
  return (
    <div className="bg1">
      <div className="targets-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc2 mb32 pt32 pb48">
          Target Segment Definition
        </h2>
        <div className="target-cards df fww pt48">
          <div className="target-card flx25">
            <div className="target-inn-card mlr12 bg6 ptb40 plr12 tac br24 pr">
              <Image
                src="/images/target-01.png"
                alt="target-img"
                width={150}
                height={150}
                className="target-img br50 pa t0 l0 r0"
              />
              <h3 className="target-card-heading fs20 mb24 fw6 pt48 mb24">
                Student
              </h3>
              <p className="target-card-subheading lh24 mb24 fs15">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis molestiae eius expedita obcaecati adipisci quis.
              </p>
              <button className="target-button bg5 h48 plr24 br24 fw6 cp">
                Read More
              </button>
            </div>
          </div>
          <div className="target-card flx25">
            <div className="target-inn-card mlr12 bg6 ptb40 plr12 tac br24 pr">
              <Image
                src="/images/target-01.png"
                alt="target-img"
                width={150}
                height={150}
                className="target-img br50 pa t0 l0 r0"
              />
              <h3 className="target-card-heading fs20 mb24 fw6 pt48 mb24">
                Student
              </h3>
              <p className="target-card-subheading lh24 mb24 fs15">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis molestiae eius expedita obcaecati adipisci quis.
              </p>
              <button className="target-button bg5 h48 plr24 br24 fw6 cp">
                Read More
              </button>
            </div>
          </div>
          <div className="target-card flx25">
            <div className="target-inn-card mlr12 bg6 ptb40 plr12 tac br24 pr">
              <Image
                src="/images/target-01.png"
                alt="target-img"
                width={150}
                height={150}
                className="target-img br50 pa t0 l0 r0"
              />
              <h3 className="target-card-heading fs20 mb24 fw6 pt48 mb24">
                Student
              </h3>
              <p className="target-card-subheading lh24 mb24 fs15">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis molestiae eius expedita obcaecati adipisci quis.
              </p>
              <button className="target-button bg5 h48 plr24 br24 fw6 cp">
                Read More
              </button>
            </div>
          </div>
          <div className="target-card flx25">
            <div className="target-inn-card mlr12 bg6 ptb40 plr12 tac br24 pr">
              <Image
                src="/images/target-01.png"
                alt="target-img"
                width={150}
                height={150}
                className="target-img br50 pa t0 l0 r0"
              />
              <h3 className="target-card-heading fs20 mb24 fw6 pt48 mb24">
                Student
              </h3>
              <p className="target-card-subheading lh24 mb24 fs15">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis molestiae eius expedita obcaecati adipisci quis.
              </p>
              <button className="target-button bg5 h48 plr24 br24 fw6 cp">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Target;
