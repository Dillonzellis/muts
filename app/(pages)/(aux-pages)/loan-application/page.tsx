import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import PageHeader from "@/app/components/inner-pages/PageHeader";
import ModalButton from "@/app/components/ModalBtn";

const list = [
  {
    content:
      "Applicants will receive an application via e-mail that will require the applicant(s) signature and return to MSCU",
  },
  {
    content:
      "MSCU will require proof of income as part of the loan review and approval process",
  },
  {
    content:
      "Upon approval, MSCU will provide loan documents (which will include Truth-In-Lending requirements) which must be signed and returned prior to loan funding",
  },
];

const LoanApplication = () => {
  return (
    <SectionContent sectionName="loan-application">
      <Container>
        <PageHeader title="Loan Application" />
        <div className="tw-text-xl md:tw-text-xl tw-italic tw-pb-2 tw-text-black">
          Read the important disclosure information below before submitting your
          request.
        </div>
        <div className="tw-space-y-2">
          <div>
            Depending on the nature of this request, these disclosures may
            contain important information regarding applicable rates, fees and
            other costs.
          </div>
          <div>
            Credit Authorization: By submitting this request, you authorize the
            Credit Union to obtain credit reports in connection with this
            request for credit and for any update, increase, renewal, extension,
            or collection of the credit received. You understand that the Credit
            Union will rely on information in this request and your credit
            report to make its decision. When applicable, spousal information
            may be requested as a part of this request. If you request, the
            Credit Union will tell you the name and address of any credit bureau
            from which it received a credit report on you. It is a crime to
            willfully and deliberately provide incomplete or incorrect
            information in this request.
          </div>
          <div>
            By submitting this request, all parties named are agreeing to the
            terms, conditions and disclosures associated with this request.
          </div>
          <div>
            Note: A confirmation email will be sent to the email address
            provided confirming we received your loan request. A loan officer
            will send you all applicable disclosures.
          </div>
          <div className="tw-underline tw-text-lg tw-font-semibold tw-pt-8">
            Online Loan Application Process – Required Prior to Loan Funding
          </div>
          <ol className="tw-list-decimal tw-max-w-[100ch] tw-space-y-2 tw-pb-8 tw-list-inside">
            {list.map((li, idx) => (
              <li key={idx} className="">
                {li.content}
              </li>
            ))}
          </ol>
        </div>
        <div className="tw-flex tw-flex-col md:tw-flex-row">
          <ModalButton href="https://eteller.mutualsavingscu.org/Centryx/servlet/com.sos.webteller.onlineforms.AcctPassApp?SOSSessionID=!_v2eA2bkolTUOY72+Dhjvp2aXUwnzT7De9WDetnMkHnlRQ1Hrf1PLjoW5DE4GnRi2YB1nNy+GGS4t5ClSzfu38Paxkq2xLAA1aQd7MIF651eeiaYE61wbdiGe2v_!&Type=!_v2ehkaFRWm8NRQo/b18/jx3Nxf/njM+7QjuNiv0nSL9AuZArFyTxEgd6LFCdAWAimZdtf28pWmde2v_!">
            Click Here to Apply
          </ModalButton>
        </div>
      </Container>
    </SectionContent>
  );
};

export default LoanApplication;
