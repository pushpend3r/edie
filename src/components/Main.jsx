import React from "react";

// images
import heroImage from "../assets/heroImage.jpg";

const Main = props => {
  return (
    <main
      className="text-primary px-8 space-y-6 md:space-y-8 mt-16"
      id="home"
      data-aos="fade-up"
    >
      <p className="text-brand text-sm font-medium pl-0 md:pl-24 lg:pl-48">
        Unhappy with your website?
      </p>
      <p className="block text-2xl md:text-3xl lg:text-4xl font-medium pl-0 md:pl-24 lg:pl-48">
        We create beautiful <br /> and fast web services
      </p>
      <div className="overflow-hidden" style={{ borderRadius: "18px" }}>
        <img src={heroImage} alt="hero image" className="w-full" />
      </div>
      <p className="text-2xl md:text-3xl lg:text-4xl font-medium pl-0 md:pl-24 lg:pl-48">
        Story, emotion <br /> and purpose
      </p>
      <p className="text-base md:text-lg text-secondary max-w-xl text-justify pl-0 md:pl-24 lg:pl-48">
        We help transform your ideas into real world applications that will
        outperform your toughest competition and help you achieve your strategic
        goals in short period of time.
      </p>
      <div className="ml-0 md:ml-24 lg:ml-48">
        <p className="text-sm my-2 text-light font-medium">
          Want us to contact you?
        </p>
        <div
          className="p-1 pl-4 flex"
          style={{
            borderRadius: "12px",
            maxWidth: "300px",
            backgroundColor: "#F2F2F2",
          }}
        >
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="text-black w-8/12"
          />
          <button type="button" className="bg-brand ml-auto text-white">
            Join
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
