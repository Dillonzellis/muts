
import React, { ReactNode } from "react";
import Container from "@/app/layouts/Container";
import SectionContent from "./SectionContent";

type ContentTwoColProps = {
  sectionName: string;
  children: ReactNode;
  variant: BgColorVariant;
}

type BgColorVariant = "white" | "blue" | "green" | "grey";

const ContentTwoCol = ({ sectionName, children, variant }: ContentTwoColProps) => {

  const bgColorClassMap: Record<BgColorVariant, string> = {
    white: "tw-bg-white",
    blue: "tw-content-bg-blue tw-text-white",
    green: "tw-content-bg-green",
    grey: "tw-bg-brandingGrey-700",
  };

  const bgClass = bgColorClassMap[variant];

  return (
    <div className="">
      <SectionContent bgClass={bgClass} sectionName={sectionName}>
        <Container>
          {children}
        </Container>
      </SectionContent>
    </div>
  )
}

export default ContentTwoCol;
