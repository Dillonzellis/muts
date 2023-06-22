import React from "react";
import InnerHero from "../(components)/inner-pages/InnerHero";

const page = () => {
  return (
    <main>
      <InnerHero
        title={[
          "Borrow from a neighbor you can ",
          <span key="trust" className="text-brandingBlue-400">
            Trust
          </span>,
        ]}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        btnText="Learn More"
        btnLink="/#"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/inner-hero-placeholder.jpg"
        imgAlt="Placeholder image"
      />
    </main>
  );
};

export default page;
