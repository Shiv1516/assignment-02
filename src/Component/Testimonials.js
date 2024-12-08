import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Amit Kumar",
      feedback:
        "Company is fully committed to enhance the skill set of youth of India by empowering them with theoretical knowledge and practical exposure in the field of accountancy and payroll.",
    },
    {
      name: "Amit Kumar",
      feedback:
        "Company is fully committed to enhance the skill set of youth of India by empowering them with theoretical knowledge and practical exposure in the field of accountancy and payroll.",
    },
    {
      name: "Amit Kumar",
      feedback:
        "Company is fully committed to enhance the skill set of youth of India by empowering them with theoretical knowledge and practical exposure in the field of accountancy and payroll.",
    },
    {
      name: "Amit Kumar",
      feedback:
        "Company is fully committed to enhance the skill set of youth of India by empowering them with theoretical knowledge and practical exposure in the field of accountancy and payroll.",
    },
    {
      name: "Amit Kumar",
      feedback:
        "Company is fully committed to enhance the skill set of youth of India by empowering them with theoretical knowledge and practical exposure in the field of accountancy and payroll.",
    },
  ];

  return (
    <div className="bg1">
      <div className="testimonials-section ptb48 wrapper">
        <h2 className="section-heading fs36 lh34 fw6 tac fc2 ptb32">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card ptb32">
              <div className="testimonial-inn-card mlr12 bg6 ptb24 plr12 tac br4">
                <div className="stars ptb32">
                  <FaStar className="fc3" />
                  <FaStar className="fc3" />
                  <FaStar className="fc3" />
                  <FaStar className="fc3" />
                  <FaStar className="fc3" />
                </div>
                <p className="testimonial-subtext lh24 fs15 mb32">
                  {testimonial.feedback}
                </p>
                <button className="testimonial-button bg1 h48 plr24 br24 fc2 fw6 cp">
                  {testimonial.name}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
