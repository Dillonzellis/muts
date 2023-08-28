import Container from "@/app/layouts/Container";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Modal from "@/app/components/Modal";

const modals = [
  {
    name: "atm-locator",
    id: "1",
    link: "https://www.culiance.com/en/atmlocator",
  },
  {
    name: "",
    id: "",
    link: "",
  },
  {
    name: "",
    id: "",
    link: "",
  },
  {
    name: "",
    id: "",
    link: "",
  },
  {
    name: "",
    id: "",
    link: "",
  },
  {
    name: "",
    id: "",
    link: "",
  },
  {
    name: "",
    id: "",
    link: "",
  },
  {
    name: "",
    id: "",
    link: "",
  },
];

const ModalPage = () => {
  return (
    <Container>
      <SectionContent>
        <div className="tw-space-y-4">
          {modals.map((modal) => (
            <Modal
              key={modal.id}
              modalName={modal.name}
              id={modal.id}
              continueLink={modal.link}
            />
          ))}
        </div>
      </SectionContent>
    </Container>
  );
};

export default ModalPage;
