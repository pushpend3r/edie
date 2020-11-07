import React from "react";

import person4 from "../assets/person4.png";

const User = props => {
  return (
    <div>
      <img
        src={person4}
        alt=""
        className="object-cover mr-5 float-left"
        style={{ borderRadius: "12px", width: "4rem" }}
      />
      <div>
        <p className="font-medium text-xl text-primary mb-2">Carlos Tran</p>
        <p className="text-light">The Decorate Gatsby</p>
      </div>
    </div>
  );
};

const Clients = props => {
  return (
    <div className="padded space-y-4 lg:space-y-6" id="clients">
      <p className="text-2xl md:text-3xl font-medium md:w-3/4 text-primary">
        “Fast and outstanding results. Edie understands their customer’s needs.
        They have a young and talented team.”
      </p>
      <User />
    </div>
  );
};

export default Clients;
