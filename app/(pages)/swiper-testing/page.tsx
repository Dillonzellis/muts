import { slides } from "@/lib/data/slides";
import { SliderWrapper } from "./SliderWrapper";

const SwiperPage = () => {
  return (
    <main>
      <SliderWrapper slides={slides} />
    </main>
  );
};

export default SwiperPage;
