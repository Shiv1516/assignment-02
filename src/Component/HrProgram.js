import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HrProgram() {
  const hrProgramsData = [
    { imgSrc: "/images/hr-01.png", title: "HR Payroll Program" },
    { imgSrc: "/images/hr-01.png", title: "HR Management Program" },
    { imgSrc: "/images/hr-01.png", title: "HR Analytics Program" },
    { imgSrc: "/images/hr-01.png", title: "HR Compliance Program" },
    { imgSrc: "/images/hr-01.png", title: "HR Leadership Program" },
    { imgSrc: "/images/hr-01.png", title: "HR Training Program" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg1">
      <div className="hrprograms-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc2 mb32 pt32 pb48">
          HR Programs
        </h2>
        <Slider {...settings}>
          {hrProgramsData.map((program, index) => (
            <div key={index} className="hrprograms-card df fdc jcc ptb32">
              <div className="hrprograms-inner-card mlr16 df fdc aic">
                <Image
                  src={program.imgSrc}
                  width={200}
                  height={200}
                  alt="HR programs"
                  className="mb16"
                />
                <h4 className="hrprogram-heading fs18 lh24 fw6 fc2">
                  {program.title}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HrProgram;
