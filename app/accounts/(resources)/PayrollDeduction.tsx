import Button from "@/app/components/Button";
import ContentBody from "@/app/components/inner-pages/ContentBody";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent"

const PayrollDeduction = () => {
  return (
    <InnerContent
      sectionName="payroll-deuction"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-519916994.jpg"
      ImgAlt=""
      variant="blue"
      order="imageFirst"
    >
      <ContentHeading title="Payroll Deduction" />
      <ContentBody>
        If you are an employee of Southern Company Gas, you can establish payroll deduction at Mutual Savings Credit Union to have funds automatically deducted from your paycheck and deposited into your savings account or checking account or applied to make loan payments. It's an easy way to save or to ensure that you'll never miss a loan payment.
      </ContentBody>
      <Button btnText="Get started by contact us today!" link="#" />
    </InnerContent >
  )
}

export default PayrollDeduction;
