import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marketing = () => {
  const marketingData = [
    {
      title: "Vast Job Market",
      description:
        "India has more than 10L job openings in accounting and finance every year",
      image: "/images/marketing-img-01.png",
    },
    {
      title: "Opportunities for Growth",
      description:
        "A wide range of career opportunities in various sectors are available.",
      image: "/images/marketing-img-02.png",
    },
    {
      title: "Skill Enhancement Programs",
      description:
        "Various skill development programs for youth in the country.",
      image: "/images/marketing-img-03.png",
    },
    {
      title: "Global Networking",
      description: "Opportunities to network with professionals globally.",
      image: "/images/marketing-img-02.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg7">
      <div className="marketing-section ptb48 wrapper">
        <Slider {...settings}>
          {marketingData.map((item, index) => (
            <div key={index} className="marketing-cards pr ptb48 zi3 mtb32">
              <div className="marketing-card ptb40 ofh plr12 bg5 br24 mlr16">
                <h3 className="marketing-heading fs20 fw6 mb32">
                  {item.title}
                </h3>
                <p className="marketing-subtext lh24 fs15">
                  {item.description}
                </p>
                <Image
                  width={150}
                  height={150}
                  src={item.image}
                  alt="marketing-img"
                  className="marketing-img pa r5 t15 zi3"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Marketing;
