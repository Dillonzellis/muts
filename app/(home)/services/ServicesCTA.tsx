/* eslint-disable @next/next/no-img-element */

import Button from "@/app/(components)/Button";
import Container from "@/app/(layout)/Container";
import ContentSection from "@/app/(layout)/ContentSection";
import CheckItem from "./CheckItem";

const ServicesCTA = () => {
  return (
    <ContentSection>
      <Container>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <img
              className="mx-auto md:mx-0"
              src="http://dev2.growthbydesign.org/wp-content/uploads/Left.png"
              alt=""
              height={470}
              width={470}
            />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <div className="mb-4 text-2xl md:text-3xl text-brandingBlue-400">
                Check out some of the FREE Services MSCU offers its members
                today!
              </div>
              <hr className="w-28 border-2 border-brandingGreen-400" />
            </div>
            <div className="flex flex-col gap-4">
              <CheckItem />
              <CheckItem />
              <CheckItem />
            </div>
            <Button btnText="apply today" link="#" className="self-start" />
          </div>
        </div>
      </Container>
    </ContentSection>
  );
};

export default ServicesCTA;
