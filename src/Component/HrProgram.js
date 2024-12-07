import React from "react";
import Image from "next/image";
function HrProgram() {
  return (
    <div className="bg1">
      <div className="hrprograms-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc2 mb32 pt32 pb48">
          HR Programs
        </h2>
        <div className="hrprograms-cards df fww pt32">
          <div className="hrprograms-card flx20 df fdc jcc">
            <div className="hrprograms-inner-card mlr16">
              <Image
                src="/images/hr-01.png"
                width={200}
                height={200}
                alt="Hr programs"
                className="mb16"
              />
              <h4 className="hrprogram-heading fs18 fw6 fc2">
                HR Payroll Program
              </h4>
            </div>
          </div>
          <div className="hrprograms-card flx20 df fdc jcc">
            <div className="hrprograms-inner-card mlr16">
              <Image
                src="/images/hr-01.png"
                width={200}
                height={200}
                alt="Hr programs"
                className="mb16"
              />
              <h4 className="hrprogram-heading fs18 fw6 fc2">
                HR Payroll Program
              </h4>
            </div>
          </div>
          <div className="hrprograms-card flx20 df fdc jcc">
            <div className="hrprograms-inner-card mlr16">
              <Image
                src="/images/hr-01.png"
                width={200}
                height={200}
                alt="Hr programs"
                className="mb16"
              />
              <h4 className="hrprogram-heading fs18 fw6 fc2">
                HR Payroll Program
              </h4>
            </div>
          </div>
          <div className="hrprograms-card flx20 df fdc jcc">
            <div className="hrprograms-inner-card mlr16">
              <Image
                src="/images/hr-01.png"
                width={200}
                height={200}
                alt="Hr programs"
                className="mb16"
              />
              <h4 className="hrprogram-heading fs18 fw6 fc2">
                HR Payroll Program
              </h4>
            </div>
          </div>
          <div className="hrprograms-card flx20 df fdc jcc">
            <div className="hrprograms-inner-card mlr16">
              <Image
                src="/images/hr-01.png"
                width={200}
                height={200}
                alt="Hr programs"
                className="mb16"
              />
              <h4 className="hrprogram-heading fs18 fw6 fc2">
                HR Payroll Program
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrProgram;
