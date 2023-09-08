import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import PageHeader from "@/app/components/inner-pages/PageHeader";

const CalculatorIndex = () => {
  return (
    <SectionContent>
      <Container>
        <PageHeader title="Privacy Policy" />

        <div className="tw-max-w-[700px]">
          <table className="" role="presentation">
            <tbody>
              <tr className="even">
                <td>FACTS FM6</td>
                <td className="alignCenter">
                  WHAT DOES MUTUAL SAVINGS CREDIT UNION DO WITH YOUR PERSONAL
                  INFORMATION?
                </td>
              </tr>

              <tr className="odd">
                <td>Why?</td>
                <td>
                  Financial companies choose how they share your personal
                  information. Federal law gives consumers the right to limit
                  some but not all sharing. Federal law also requires us to tell
                  you how we collect, share, and protect your personal
                  information. Please read this notice carefully to understand
                  what we do.
                </td>
              </tr>

              <tr className="even">
                <td>What?</td>
                <td>
                  The types of personal information we collect and share depend
                  on the product or service you have with us. This information
                  can include:
                  <ul className="bullet-style row-padding">
                    <li>Social Security Number and Payment History</li>
                    <li>Name and Address</li>
                    <li>Account Number and Balances</li>
                  </ul>
                </td>
              </tr>

              <tr className="odd">
                <td>How?</td>
                <td>
                  All financial companies need to share members’ personal
                  information to run their everyday business. In the section
                  below, we list the reasons financial companies can share their
                  <u>members’</u> personal information; the reasons Mutual
                  Savings Credit Union chooses to share; and whether you can
                  limit this sharing.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="clear clearFix"></div>

          <table className="privacy-table-2" role="presentation">
            <thead>
              <tr className="even">
                <td>Reasons we can share your personal information</td>
                <td>Does MUTUAL SAVINGS CREDIT UNION share?</td>
                <td>Can you limit this sharing?</td>
              </tr>
            </thead>

            <tbody>
              <tr className="odd">
                <td className="left">
                  <strong>For our everyday business purposes -</strong>
                  <br />
                  such as to process your transactions, maintain your
                  account(s), respond to court orders and legal investigations,
                  or report to credit bureaus<strong> </strong>
                </td>
                <td>YES</td>
                <td>NO</td>
              </tr>

              <tr className="even">
                <td className="left">
                  <strong>For our marketing purposes -</strong>
                  <br />
                  to offer our products and services to you
                </td>
                <td>YES</td>
                <td>NO</td>
              </tr>

              <tr className="odd">
                <td className="left">
                  <strong>
                    For joint marketing with other financial companies
                  </strong>
                </td>
                <td>YES</td>
                <td>NO</td>
              </tr>

              <tr className="even">
                <td className="left">
                  <strong>
                    For our affiliates’ everyday business purposes -
                  </strong>
                  <br />
                  information about your transactions and experiences
                </td>
                <td>NO</td>
                <td>NO</td>
              </tr>

              <tr className="odd">
                <td className="left">
                  <strong>
                    For our affiliates’ everyday business purposes -
                  </strong>
                  <br />
                  information about your creditworthiness
                </td>
                <td>NO</td>
                <td>YES</td>
              </tr>

              <tr className="even">
                <td className="left">
                  <strong>For our affiliates to market to you</strong>
                </td>
                <td>NO</td>
                <td>YES</td>
              </tr>

              <tr className="odd">
                <td className="left">
                  <strong>For nonaffiliates to market to you</strong>
                </td>
                <td>YES</td>
                <td>YES</td>
              </tr>
            </tbody>
          </table>
          <div>
            <table className="privacy-table-2" role="presentation">
              <tbody>
                <tr className="even">
                  <td width="17%">
                    <strong>To limit our sharing</strong>
                  </td>
                  <td width="83%">
                    <p>
                      <strong>Complete and mail the Opt-Out Form below.</strong>
                    </p>
                    <p>
                      <strong>Please note:</strong>
                      <br />
                      If you are a <em>new member</em>, we can begin sharing
                      your information 30 days from the date we sent this
                      notice. When you are <em>no longer </em>a member of Mutual
                      Savings Credit Union, we stop sharing your information as
                      described in this notice.
                    </p>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <strong>Questions?</strong>
                  </td>
                  <td>
                    Call 1-800-771-6695 or go to
                    <a
                      href="https://www.mutualsavingscu.org"
                      title="https://www.mutualsavingscu.org"
                    >
                      www.mutualsavingscu.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>&nbsp;</p>
          <table className="privacy-table-3 row-padding" role="presentation">
            <tbody>
              <tr className="even">
                <td colSpan="2">
                  <strong>MAIL-IN OPT OUT FORM</strong>
                </td>
              </tr>
              <tr className="odd">
                <td colSpan="2">
                  <img
                    decoding="async"
                    fetchpriority="high"
                    src="../../images/privacy_clip_image002.gif"
                    alt="Image of opt-in options"
                    width="593"
                    height="93"
                  />
                </td>
              </tr>
              <tr className="even">
                <td width="17%">Name</td>
                <td width="83%">&nbsp;</td>
              </tr>
              <tr className="odd">
                <td>Address</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="even">
                <td>City, State, Zip</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="odd">
                <td>Member Number</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="even">
                <td colSpan="2">
                  Mail To: Mutual Savings Credit Union
                  <br />
                  10 Peachtree Place
                  <br />
                  Atlanta, GA 30309
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p></p>
          <table className="privacy-table-3 row-padding" role="presentation">
            <tbody>
              <tr className="odd">
                <td colSpan="3" bgcolor="#CCCCCC">
                  <strong>MUTUAL SAVINGS CREDIT UNION (MSCU)</strong>
                </td>
              </tr>
              <tr className="even">
                <td colSpan="3" bgcolor="#CCCCCC">
                  <p>
                    <strong>Who we are</strong>
                    <strong>&nbsp;</strong>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr className="odd">
                <td>
                  <p>
                    <strong>Who is providing this notice? </strong>
                    <strong> </strong>
                  </p>
                </td>
                <td colSpan="2" valign="top">
                  <p>
                    Mutual Savings Credit Union
                    <br />
                    10 Peachtree Place <br />
                    Atlanta, Georgia 30309
                  </p>
                </td>
              </tr>
              <tr className="even">
                <td colSpan="3" bgcolor="#CCCCCC">
                  <p>
                    <strong>What we do</strong>
                  </p>
                </td>
              </tr>
              <tr className="odd">
                <td valign="top">
                  <p>
                    <strong>
                      How does Mutual Savings Credit Union&nbsp;protect my
                      personal information?
                    </strong>
                    <strong> </strong>
                    <br />
                    <strong>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </strong>
                    <strong> </strong>
                  </p>
                </td>
                <td colSpan="2" valign="top">
                  <p>
                    To protect your personal information from unauthorized
                    access and use, we use security measures that comply with
                    federal law. These measures include computer safeguards and
                    secured files and buildings
                  </p>
                </td>
              </tr>
              <tr className="even">
                <td valign="top">
                  <p>
                    <strong>
                      How does Mutual Savings Credit Union&nbsp;collect my
                      personal
                      information?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </strong>
                  </p>
                </td>
                <td colSpan="2" valign="top">
                  <p>
                    We collect your personal information, for example, when you
                  </p>
                  <ul className="bullet-style">
                    <li>
                      open an account or deposit
                      money&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li>pay your bills&nbsp;or apply for a loan</li>
                    <li>use your credit or debit card</li>
                  </ul>
                  <p>
                    We also collect your personal information from others, such
                    as credit bureaus. &nbsp;&nbsp;&nbsp;
                  </p>
                </td>
              </tr>
              <tr className="odd">
                <td valign="top">
                  <p>
                    <strong>Why can’t I limit all sharing?</strong>
                  </p>
                </td>
                <td colSpan="2" valign="top">
                  <p>Federal law gives you the right to limit only</p>
                  <ul className="bullet-style">
                    <li>
                      sharing for affiliates’ everyday business purposes -
                      information about your creditworthiness
                    </li>
                    <li>
                      affiliates from using your information to market to you
                    </li>
                    <li>sharing for nonaffiliates to market to you</li>
                  </ul>
                  <p>
                    State laws and individual companies may give you additional
                    rights to limit
                    sharing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </td>
              </tr>
              <tr className="even">
                <td valign="top">
                  <p>
                    <strong>
                      What happens when I limit sharing for an account I hold
                      jointly with someone else?
                    </strong>
                  </p>
                </td>
                <td colSpan="2" valign="top">
                  <p>
                    &nbsp;As the Primary Account Member, your choice will apply
                    to everyone on the account.
                  </p>
                </td>
              </tr>
              <tr className="odd"></tr>
            </tbody>
          </table>
          <p>
            <br />
          </p>
          <table className="privacy-table-3 row-padding" role="presentation">
            <tbody>
              <tr className="even">
                <td colSpan="3" bgcolor="#CCCCCC">
                  <p>
                    <strong>Definitions</strong>
                    <strong>&nbsp;</strong>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr className="odd">
                <td width="220" valign="top">
                  <p>
                    <strong>Affiliates</strong>
                  </p>
                </td>
                <td width="455" colSpan="2" valign="top">
                  <p>
                    Companies related by common ownership or control. They can
                    be financial and nonfinancial companies.
                  </p>
                  <ul className="bullet-style">
                    <li>
                      Mutual Savings Credit Union does not have affiliates at
                      the present time.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="even">
                <td width="220" valign="top">
                  <p>
                    <strong>Nonaffiliates</strong>
                  </p>
                </td>
                <td width="455" colSpan="2" valign="top">
                  <p>
                    Companies not related by common ownership or control. They
                    can be financial and nonfinancial companies. <br />
                  </p>
                  <ul className="bullet-style">
                    <li>
                      Mutual Savings Credit Union contracts with quality
                      third-parties essential to operations and the delivery of
                      our products &amp; services. These third-parties only have
                      access&nbsp;to member personal information necessary to
                      successfully deliver the product or services contracted
                      for.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="odd">
                <td width="220" valign="top">
                  <p>
                    <strong>Joint marketing</strong>
                  </p>
                </td>
                <td width="455" colSpan="2" valign="top">
                  <p>
                    A formal agreement between nonaffiliated financial companies
                    that together market financial products or services to you.
                  </p>
                  <ul className="bullet-style">
                    <li>
                      Mutual Savings Credit Union occasionally will work with a
                      quality third-party to offer core financial products &amp;
                      services to members. These third-party partners are only
                      provided member information necessary to offer and deliver
                      the specific product or service offered.
                      <br />
                      MSCU does not sell membership mailing lists and prohibits
                      third-party product and service providers from doing the
                      same with MSCU member information. MSCU takes the security
                      of member information very seriously and expects any
                      third-party to have satisfactory information security
                      protocols.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="clear clearFix"></div>
          <table className="privacy-table-4" role="presentation">
            <tbody>
              <tr className="even">
                <td>
                  <strong>Other important information</strong>
                </td>
                <td>
                  <p>
                    Mutual Savings Credit Union values the trust our members
                    have placed in us. We occasionally allow for third-parties
                    to contact members by mail provided the information provided
                    is accurate and offers a good “value proposition”. When this
                    is done, only member name and address information is
                    provided.
                  </p>
                  <p>
                    MSCU may report information about your account to credit
                    bureaus. Late payments, missed payments or other
                    unsatisfactory account performance may be reflected in your
                    credit report.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </SectionContent>
  );
};

export default CalculatorIndex;
