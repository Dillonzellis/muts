import { remoteItems } from "./items";
import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent"
import ContentTertHeader from "@/app/components/inner-pages/ContentTertHeader";
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";
import Disclaimer from "@/app/components/Disclaimer";
import LinkText from "@/app/components/LinkText";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";
import Button from "@/app/components/Button";

const RemoteBanking = () => {
  return (
    <InnerContent
      id="remote-banking"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1409216367.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
      vertical
    >
      <ContentHeaderWrapper>
        <ContentHeading title="Remote Banking" />
        <ContentSecondaryHeading italic title="24/7 Access enables life without interruptions!" />
      </ContentHeaderWrapper>
      <ContentTertHeader label="Online & Mobile Banking" />
      <List liItems={remoteItems} />
      <div className="tw-text-lg tw-space-y-2">
        <strong>Bill Pay Member Service</strong>: <LinkText label="844.596.1874" href="" /> between 7:00 AM - 1:00 AM ET, 7 days a week
        <div><strong>PopMoney Support</strong>: <LinkText label="866.820.9920" href="" /> (option 2)</div>
      </div>
      <div className="tw-text-lg">
        <strong>Enroll in online banking</strong> and download our mobile app (Search “Mutual Savings Credit Union”) today to get access on all your devices!
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-gap-4">
        <a href="">
          <img className="tw-w-full tw-max-w-[167px]" src="http://dev2.growthbydesign.org/wp-content/uploads/app-store-logo.png" />
        </a>
        <a href="">
          <img className="tw-w-full tw-max-w-[167px] tw-rounded-2xl" src="http://dev2.growthbydesign.org/wp-content/uploads/Google-Play-Emblema.png" />
        </a>
      </div>
      <div>
        <em>
          To locate the MSCU mobile app, search for “Mutual Savings Credit Union Atlanta.”
        </em>
      </div>
      <Disclaimer text="*Mobile Deposits have a 3-business day hold once posted to your account. Mobile Deposit limits are 10 items per month or a total of $5,000, whichever comes first, with a daily limit of 5 items and $1,500." />
      <ButtonWrapper>
        <Button btnText="ATM Locator " link="https://www.culiance.com/en/atmlocator " />
        <Button btnText="Shared Branching " link="https://co-opcreditunions.org/locator/?ref=allco-op.org&sc=1 " />
        {/* <Button btnText="Audio Response 800.835.2815" link="tel+:800-835-2815" /> */}
      </ButtonWrapper>
      <LinkText label="Audio Response 800.835.2815" href="tel:+800-835-2815" />
    </InnerContent>
  )
}

export default RemoteBanking;
