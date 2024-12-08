import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Programs() {
  const programsData = [
    {
      imgSrc: "/images/corporate-01.png",
      title: "Overall Approach",
      description:
        "Prepare to make your mark in accounting with a course designed to equip you for success.",
      bgClass: "bg4",
    },
    {
      imgSrc: "/images/corporate-01.png",
      title: "Overall Approach",
      description:
        "Prepare to make your mark in accounting with a course designed to equip you for success.",
      bgClass: "bg3",
    },
    {
      imgSrc: "/images/corporate-01.png",
      title: "Overall Approach",
      description:
        "Prepare to make your mark in accounting with a course designed to equip you for success.",
      bgClass: "bg5",
    },
    {
      imgSrc: "/images/corporate-01.png",
      title: "Overall Approach",
      description:
        "Prepare to make your mark in accounting with a course designed to equip you for success.",
      bgClass: "bg2",
    },
    {
      imgSrc: "/images/corporate-01.png",
      title: "Advanced Accounting",
      description:
        "Deepen your understanding with our advanced accounting techniques and practices with our advanced.",
      bgClass: "bg3",
    },
    {
      imgSrc: "/images/corporate-01.png",
      title: "Financial Planning",
      description:
        "Learn strategies for effective financial planning and management in corporate settings.",
      bgClass: "bg4",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="bg7">
      <div className="program-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc1 ptb32">
          Programs
        </h2>
        <Slider {...settings}>
          {programsData.map((program, index) => (
            <div key={index} className="program-card aisc ptb40 mt32">
              <div
                className={`program-inn-card mlr16 ptb24 plr12 ${program.bgClass} df fdc aic br8`}
              >
                <Image
                  src={program.imgSrc}
                  width={42}
                  height={42}
                  alt="program"
                  className="program-img mb24"
                />
                <h3 className="program-card-heading fs20 mb24 fw6">
                  {program.title}
                </h3>
                <p className="program-subheading lh24">{program.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Programs;
