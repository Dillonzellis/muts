import HeroImg from "@/app/components/inner-pages/HeroImg";
import Container from "@/app/layouts/Container";
import SectionContent from "@/app/components/inner-pages/SectionContent";

const OnlineBankingPage = () => {
  return (
    <div>
      <HeroImg
        title="Online Banking"
        desc=""
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1550169263.jpg"
        imgAlt=""
      />
      <Container>
        <SectionContent>
          <div className="tw-space-y-4">
            <div>
              On February 2, 2023, Mutual Savings Credit Union will be upgrading
              both the home and mobile banking platforms. Below are some helpful
              tips to help make the transition from the old systems to the new
              systems easier. To ensure Mutual Savings can assist members
              efficiently, members will have access to a help desk when the new
              systems go live. If you encounter any issues trying to get setup,
              call MSCU at 470-747-8163.
            </div>
            <div className="tw-text-2xl tw-font-semibold">Online Banking</div>
            <div>
              If you are an existing Online Banking user, please use the
              following to log in to our new Online Banking system:
            </div>
            <ul className="tw-list-inside tw-list-disc">
              <li>LOGON ID is your Current Logon ID</li>
              <li>Your Logon ID must contain at least 6-digits.</li>
              <li>
                if your Logon ID is less than 6 digits, you must enter leading
                zeroes to make it 6 digits.
              </li>
              <li>
                (Password) is the word “security” (in lower case letters) + the
                last 4 digits of the Primary Account Holder’s SSN Example:
                security9876
              </li>
              <li>
                Once a member is logged in, the member will have access to all
                the accounts the member is linked to. This means that members
                will only need one login ID to access all their accounts.
              </li>
              <li>
                If a member has already enrolled using the mobile app, the
                username and password the member created will work in online
                banking.
              </li>
              <li>
                Members will be able to pin favorite accounts to the home
                screen, create account alerts, and give their accounts nicknames
                to make managing one’s finances easier. The customization items
                can only be managed in home banking, but are reflected in the
                mobile app.
              </li>
              <li>
                If a member was an active Bill Pay user, all of the member’s
                payee accounts will transfer to the new system.
              </li>
            </ul>

            <div className="tw-text-2xl tw-font-semibold">Mobile Banking</div>
            <ul className="tw-list-inside tw-list-disc">
              <li>
                On February 1, 2023, around 5pm ET, the current mobile banking
                app will be deactivated and removed from the Google Play Store
                and the Apple App Store. This means that the app will no longer
                work after 5pm ET.
              </li>
              <li>
                After the old app is deactivated, members will need to download
                and install the new MSCU mobile app. To find the new app, either
                go to the Google Play Store (Android) or the Apple App Store
                (iPhone) and search for “Mutual Saving CU – Atlanta”.
              </li>
              <li>
                If you are an existing Mobile Banking user, please use the
                following to log in to our new Online Banking system:
              </li>
              <li>LOGON ID is your Current Logon ID</li>
              <li>Your Logon ID must contain at least 6-digits.</li>
              <li>
                if your Logon ID is less than 6 digits, you must enter leading
                zeroes to make it 6 digits. Example: Current Logon ID 12345 must
                be entered as 012345 Current Logon ID 1234 must be entered as
                001234
              </li>
              <li>
                (Password) is the word “security” (in lower case letters) + the
                last 4 digits of the Primary Account Holder’s SSN Example:
                security9876
              </li>
              <li>
                If a member has already enrolled in online banking, the username
                and password the member created will work for the mobile app.
              </li>
              <li>
                During the 1st time login, members will be required to create a
                user ID, set three security questions, and create a security
                code (password)
              </li>
              <li>
                Once a member is logged in, the member will have access to all
                the accounts the member is linked to. This means that members
                will only need one login ID to access all of their accounts.
              </li>
              <li>
                If a member is an active Bill Pay user, all the member’s payee
                accounts will transfer to the new system. Additionally, members
                will be able to setup new payees using the mobile. This
                functionality is an enhancement.
              </li>
            </ul>
          </div>
        </SectionContent>
      </Container>
    </div>
  );
};

export default OnlineBankingPage;
