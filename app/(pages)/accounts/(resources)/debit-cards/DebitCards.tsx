import InnerContent from "@/app/components/inner-pages/InnerContent";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import LinkText from "@/app/components/LinkText";
import List from "@/app/components/List";
import items from "./items";

const DebitCards = () => {
  return (
    <InnerContent
      id="debit-cards"
      ImgAlt=""
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1414744533.jpg"
      variant="white"
      order="contentFirst"
    >
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentHeading title="VISA® Debit Cards with SecureLock" />
        <ContentSecondaryHeading
          italic={true}
          title="Easy & automatic card access to your funds"
        />
      </div>
      <List liItems={items} />
      <LinkText
        label="Don’t recognize a transaction? Complete a Dispute Form"
        href="/#wow-modal-id-8"
      />
    </InnerContent>
  );
};

export default DebitCards;
