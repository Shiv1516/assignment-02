import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Corporate() {
  const corporateCardsData = [
    { imgSrc: "/images/corporate-01.png", title: "Skill Development" },
    { imgSrc: "/images/corporate-01.png", title: "Career Growth" },
    { imgSrc: "/images/corporate-01.png", title: "Practical Knowledge" },
    { imgSrc: "/images/corporate-01.png", title: "Industry Insights" },
    { imgSrc: "/images/corporate-01.png", title: "Professional Edge" },
    { imgSrc: "/images/corporate-01.png", title: "Global Exposure" },
    { imgSrc: "/images/corporate-01.png", title: "Networking Opportunities" },
    { imgSrc: "/images/corporate-01.png", title: "Leadership Skills" },
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
    <div className="bg7 ">
      <div className="corporate-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc1 ptb32">
          Why Certified Corporate Accountant (CCA)?
        </h2>
        <Slider {...settings}>
          {corporateCardsData.map((card, index) => (
            <div key={index} className="corporate-card df ptb40 mtb32">
              <div className="corporate-inner-card mlr16 df fdc aic">
                <Image
                  src={card.imgSrc}
                  width={62}
                  height={62}
                  alt="corporate"
                  className="corporate-img mb16"
                />
                <h3 className="corporate-heading fs20 lh24 fw6 wsnw">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Corporate;
