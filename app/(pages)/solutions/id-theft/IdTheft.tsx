import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent"
import LinkText from "@/app/components/LinkText";
import ReportCols from "./ReportCols";

const IdTheft = () => {
  return (
    <InnerContent
      id="id-theft"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1492839380.jpg"
      ImgAlt=""
      order="contentFirst"
      variant="blue"
    >
      <ContentHeading title="Report I.D. Theft" />
      <div>If you suspect identity theft, contact us immediately as well as one of the three major credit bureaus to discuss whether you need to place a fraud alert on your file to prevent thieves from opening a new account in your name.</div>
      <div className="tw-flex-wrap tw-flex tw-gap-6">
        <ReportCols title="Equifax" href="https://www.equifax.com/personal/">
          <div>
            <LinkText label="800-525-6285" href="" />
          </div>
          <div>P.O. Box 740250</div>
          <div>Atlanta, GA 30374</div>
        </ReportCols>

        <ReportCols title="Experian" href="https://www.experian.com/">
          <div>
            <LinkText label="888-397-3742" href="" />
          </div>
          <div>P.O. Box 1017</div>
          <div>Allen, TX 75013</div>
        </ReportCols>

        <ReportCols title="TransUnion" href="https://www.transunion.com/">
          <div>
            <LinkText label="800-680-7289" href="" />
          </div>
          <div>P.O. Box 6790</div>
          <div>Fullerton, CA 92634</div>
        </ReportCols>
      </div>
      <div><em>Report all suspicious contacts to the Federal Trade Commission by calling <LinkText label="1-877-IDTHEFT" href="" />. To learn more about identity theft protocol, visit the <LinkText label="FTC’s Identity Theft site" href="https://www.identitytheft.gov/" />.</em></div>
    </InnerContent>
  )
}

export default IdTheft;
