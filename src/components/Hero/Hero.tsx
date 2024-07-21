import Button from "../ui/Button/Button";
import FloatingImg from "../ui/FloatingImg/FloatingImg";
import "./Hero.scss";
import FloatingPos from "../../assets/FloatingPos.png";
import FloatingNaira from "../../assets/FloatingNaira.png";
import FloatingPiggyVest from "../../assets/FloatingPiggyVest.png";

const Hero = () => {
  return (
    <div className="hero">
      <FloatingImg img={FloatingPos} top="0" left="0" />
      <FloatingImg img={FloatingPiggyVest} top="14rem" right="0" />
      <FloatingImg img={FloatingNaira} bottom="0" />
      <h1 className="hero__title">Your Pathway to Financial Freedom</h1>
      <div className="hero__body">
        <p>
          Everything you need for saving, investing, POS agency banking, and
          registering your business with the CAC.
        </p>
      </div>

      <Button padding="1.65rem 3.3rem">Get Started</Button>
    </div>
  );
}

export default Hero