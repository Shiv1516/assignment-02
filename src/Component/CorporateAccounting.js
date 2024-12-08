import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CorporateAccounting() {
  const corporateData = [
    { title: "Accounting Enthusiasts" },
    { title: "Career Changers" },
    { title: "Recent Graduates" },
    { title: "Diverse Backgrounds" },
    { title: "Freelance Experienced" },
    { title: "Entrepreneurs" },
    { title: "Experienced Professionals" },
    { title: "Corporate Leaders" },
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
    <div className="corporateaccount-section ptb48 wrapper">
      <h2 className="section-heading fs36 lh34 fw6 tac fc1 ptb32">
        Who Can Join Certified Corporate Accounting
      </h2>
      <Slider {...settings}>
        {corporateData.map((item, index) => (
          <div key={index} className="cor-accounting-list pr ptb40">
            <h3 className="cor-acc-item ptb24 fs18 tac mlr16 bg1 plr24 fc2 wsnw">
              {item.title}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CorporateAccounting;
