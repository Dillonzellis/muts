import Button from "@/app/components/Button";
import ContentBody from "@/app/components/inner-pages/ContentBody";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent";

const PayrollDeduction = () => {
  return (
    <InnerContent
      id="payroll-deduction"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-519916994.jpg"
      ImgAlt=""
      variant="blue"
      order="imageFirst"
    >
      <ContentHeading title="Payroll Deduction" />
      <ContentBody>
        If you are an employee of Southern Company Gas, you can establish
        payroll deduction at Mutual Savings Credit Union to have funds
        automatically deducted from your paycheck and deposited into your
        savings account or checking account or applied to make loan payments.
      </ContentBody>
      <Button btnText="Get started!" link="/#wow-modal-id-7" />
    </InnerContent>
  );
};

export default PayrollDeduction;
