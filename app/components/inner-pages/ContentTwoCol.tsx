import ContentCol from "./ContentCol";
import Button from "../Button";
import ContentSecondaryHeading from "./ContentSecondaryHeading";
import TwoCol from "@/app/layouts/TwoCol";
import Container from "@/app/layouts/Container";
import ContentHeading from "./ContentHeading";
import ContentBody from "./ContentBody";
import List from "../List";

const ContentTwoCol = () => {
  return (
    <div>
      <Container>
        <div className="tw-flex tw-flex-col tw-gap-3">
          <ContentHeading title="Club Accounts " />
        </div>
        <ContentBody>
          Save a little at a time throughout the year for a specific purpose
          so you can reap the benefits of your hard work when the need rolls
          around!
        </ContentBody>
        <TwoCol>
          <ContentCol>
            <ContentSecondaryHeading title="Holiday Club Accounts" />
            <div>
              Prepare for the expensive holiday shopping season by saving
              throughout the year.
            </div>
            {/* <List liItems={items} /> */}
            <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row tw-pb-2">
              <Button btnText="Open an Account" link="#" />
              <Button btnText="calculate savings" link="#" />
            </div>
          </ContentCol>
          <ContentCol>
            <ContentSecondaryHeading title="Vacation Club Accounts" />
            <div>Stash funds away for a vacation getaway!</div>
            {/* <List liItems={items2} /> */}
            <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row">
              <Button btnText="Open an Account" link="#" />
              <Button btnText="calculate savings" link="#" />
            </div>
          </ContentCol>
        </TwoCol>
      </Container>
    </div >

  )
}

export default ContentTwoCol;
