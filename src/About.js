import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import Trusted from "./components/Trusted";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "IShop Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />

      <Trusted />
    </>
  );
};

export default About;
