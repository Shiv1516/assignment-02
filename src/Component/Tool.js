import React from "react";
import Image from "next/image";

function Tool() {
  return (
    <div className="bg5">
      <div className="tool-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc1 ptb32">
          Tools & Platform
        </h2>
        <div className="tools-cards df fww pt32">
          <div className="tools-card flx20 df jcc">
            <div className="tools-inn-card mlr16">
              <Image
                src="/images/tool-01.png"
                alt="Tool 01"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="tools-card flx20 df jcc">
            <div className="tools-inn-card mlr16">
              <Image
                src="/images/tool-02.png"
                alt="Tool 01"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="tools-card flx20 df jcc">
            <div className="tools-inn-card mlr16">
              <Image
                src="/images/tool-03.png"
                alt="Tool 01"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="tools-card flx20 df jcc">
            <div className="tools-inn-card mlr16">
              <Image
                src="/images/tool-04.png"
                alt="Tool 01"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="tools-card flx20 df jcc">
            <div className="tools-inn-card mlr16">
              <Image
                src="/images/tool-01.png"
                alt="Tool 01"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tool;
