import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Container from "../Container";

const TopBar = () => {
  return (
    <div className="tw-bg-zinc-100 tw-py-4 tw-text-black">
      <Container>
        <div className="tw-flex tw-items-center tw-gap-2 md:tw-gap-12">
          <div className="tw-flex tw-items-center tw-gap-4">
            <PhoneIcon className="tw-h-6 tw-w-6 tw-text-brandingGreen-400" />
            <div>
              <a
                href="tel:+1470-747-8163."
                className="tw-hidden tw-text-sm md:tw-block"
              >
                470-747-8163
              </a>
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-gap-4">
            <EnvelopeIcon className="tw-h-6 tw-w-6 tw-text-brandingGreen-400" />
            <div>
              <a
                href="mailto:mutualsavingscu@mutualsavingscu.org"
                className="tw-hidden tw-text-sm md:tw-block"
              >
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
