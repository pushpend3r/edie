import React from "react";

// images
import heroImage from "../assets/heroImage.jpg";

const Main = props => {
  return (
    <main className="text-primary px-8 space-y-5 md:space-y-8 mt-16" id="home">
      <p className="text-brand text-sm font-medium pl-0 md:pl-24 lg:pl-48">Unhappy with your website?</p>
      <p className="text-2xl md:text-3xl lg:text-4xl font-medium max-w-2xl pl-0 md:pl-24 lg:pl-48">We create beautiful and fast web services</p>
      <div className="overflow-hidden" style={{borderRadius: "18px"}}>
        <img src={heroImage} alt="hero image" className="w-full"/>
      </div>
      <p className="text-2xl md:text-3xl lg:text-4xl font-medium max-w-xl pl-0 md:pl-24 lg:pl-48">Story, emotion and purpose</p>
      <p className="text-base md:text-lg text-light max-w-xl text-justify pl-0 md:pl-24 lg:pl-48">
        We help transform your ideas into real world applications that will
        outperform your toughest competition and help you achieve your strategic
        goals in short period of time.
      </p>
    </main>
  );
};

export default Main;
