import React from "react";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const MyTeam = props => {
  return (
    <div
      className="flex flex-col lg:flex-row padded lg:place-items-center space-y-10 lg:space-y-0 justify-between"
      data-aos="fade-up"
    >
      <div className="w-auto lg:w-1/4 space-y-3">
        <p className="text-sm font-medium" style={{ color: "#EB5757" }}>
          Meet the team
        </p>
        <p className="text-2xl md:text-3xl font-medium text-primary">
          We are chilled and a laidback team
        </p>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quas!
        </p>
      </div>
      <div className="w-auto lg:w-1/2 flex">
        <img
          src={person3}
          alt=""
          className="object-cover rounded-large my-auto mr-3 w-1/2"
        />
        <div className="w-1/2">
          <img
            src={person1}
            alt=""
            className="object-cover rounded-large mb-3"
            style={{ width: "85%" }}
          />
          <img
            src={person2}
            alt=""
            className="object-cover rounded-large"
            style={{ width: "95%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
