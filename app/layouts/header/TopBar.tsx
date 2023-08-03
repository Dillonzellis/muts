import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Container from "../Container";

const TopBar = () => {
  return (
    <div className="tw-bg-zinc-100 tw-py-4 tw-text-black">
      <Container>
        <div className="tw-flex tw-gap-2 md:tw-gap-12 tw-items-center">
          <div className="tw-flex tw-gap-4 tw-items-center">
            <PhoneIcon className="tw-h-6 tw-w-6 tw-text-brandingGreen-400" />
            <div>
              <a href="tel:+18007716695" className="tw-text-sm tw-hidden md:tw-block">
                (800)-771-6695
              </a>
            </div>
          </div>
          <div className="tw-flex tw-gap-4 tw-items-center">
            <EnvelopeIcon className="tw-h-6 tw-w-6 tw-text-brandingGreen-400" />
            <div>
              <a href="mailto:+18007716695" className="tw-text-sm tw-hidden md:tw-block">
                mutualsavingscu@mutualsavingscu.org
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
