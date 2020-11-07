import React from "react";

// Card Icons
import create from "../assets/create.svg";
import code from "../assets/code.svg";
import storage from "../assets/storage.svg";

const ServiceCard = ({ iconSrc, desc, title, callToAction, iconBgColor }) => {
  return (
    <div
      className="space-y-5 w-auto md:m-0 hover:shadow-xl cursor-pointer md:px-6 md:py-8 px-6 py-8 rounded-large transition duration-500 ease-in-out"
      style={{ minWidth: "300px" }}
    >
      <div
        className="inline-block p-4"
        style={{ backgroundColor: iconBgColor, borderRadius: "16px" }}
      >
        <img src={iconSrc} alt={title} width="35px" />
      </div>
      <br />
      <p className="font-bold text-xl">{title}</p>
      <p className="text-primary">{desc}</p>
      <a href={callToAction} className="inline-block">
        <button
          className="text-light hover:bg-brand hover:text-white"
          style={{ backgroundColor: "#E0E0E0" }}
        >
          Get Started
        </button>
      </a>
    </div>
  );
};

const Services = props => {
  const cards = [
    {
      title: "UI/UX Design",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo veniam ipsum quos, eos sequi corrupti temporibus labore.",
      iconSrc: create,
      iconBgColor: "#2D9CDB",
      callToAction: "#",
    },
    {
      title: "Front End",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo veniam ipsum quos, eos sequi corrupti temporibus labore.",
      iconSrc: code,
      iconBgColor: "#27AE60",
      callToAction: "#",
    },
    {
      title: "Back End",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo veniam ipsum quos, eos sequi corrupti temporibus labore.",
      iconSrc: storage,
      iconBgColor: "#EB5757",
      callToAction: "#",
    },
  ];

  return (
    <section className="space-y-10 padded" id="services">
      <h2 className="text-2xl md:text-3xl font-medium" style={{ maxWidth: "300px" }}>
        We offer high demand services
      </h2>
      <div className="flex flex-col lg:justify-between lg:flex-row md:space-y-0 space-y-15 lg:space-x-5">
        {cards.map(card => (
          <ServiceCard
            key={card.title}
            iconSrc={card.iconSrc}
            title={card.title}
            desc={card.desc}
            callToAction={card.callToAction}
            iconBgColor={card.iconBgColor}
          />
        ))}
      </div>
    </section>
  );
};

export { ServiceCard };
export default Services;
