import React from "react";
import InnerHero from "../(components)/inner-pages/InnerHero";

const page = () => {
  return (
    <main>
      <InnerHero
        title={[
          "Borrow from a neightbor you can ",
          <span key="trust" className="text-brandingBlue-400">
            Trust
          </span>,
        ]}
        desc="Mutual Savings Credit Union offers a wide variety of account options. We are here to help you with all of your financial need."
        btnText="Get Started"
        btnLink="/#"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/inner-hero-placeholder.jpg"
        imgAlt="Placeholder image"
      />
    </main>
  );
};

export default page;
