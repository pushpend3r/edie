import React from "react";

// images
import smarthome from "../assets/smarthome.jpg";
import onboard from "../assets/onboard.png";
import juiceproduct from "../assets/juice-product.png";
import booking from "../assets/booking.png";
import arrowRight from "../assets/arrow_right.svg";

function Card({ imgSrc, title, type }) {
  return (
    <div
      className="space-y-1"
      // style={{ width: "45%", minWidth: "350px" }}
    >
      {/* <div className="service-card-image rounded-lg overflow-hidden">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
      </div> */}
      <img
        src={imgSrc}
        alt={title}
        className="object-cover rounded-large ourwork-card-image"
      />
      <p className="font-light text-sm">{type}</p>
      <p className="font-medium text-xl">{title}</p>
    </div>
  );
}

export { Card };

const OurWorks = props => {
  const card = [
    {
      title: "Smart home dashboard",
      type: "Full stack application",
      imgSrc: smarthome,
    },
    { title: "Onboard application", type: "UX/UI design", imgSrc: onboard },
    { title: "Booking system", type: "Mobile application", imgSrc: booking },
    {
      title: "Juice product homepage",
      type: "Front End application",
      imgSrc: juiceproduct,
    },
  ];

  return (
    <section
      className="space-y-10 padded overflow-x-hidden"
      id="our_works"
      data-aos="fade-left"
    >
      <h2 className="text-2xl md:text-3xl font-medium">
        Good design means <br /> good business
      </h2>
      <div className="pt-8 flex flex-wrap justify-around ourwork-card-wrapper">
        {card.map(c => (
          <Card key={c.title} imgSrc={c.imgSrc} title={c.title} type={c.type} />
        ))}
        <a href="#" className="w-full inline-block text-brand text-right mt-5">
          See More{" "}
          <img
            src={arrowRight}
            alt="arrow-right"
            className="inline-block w-5"
          />
        </a>
      </div>
    </section>
  );
};

export default OurWorks;
