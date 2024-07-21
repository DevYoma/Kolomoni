import FeatureCard from "../ui/FeatureCard/FeatureCard";
import FeatureCardExtra from "../ui/FeatureCardExtra/FeatureCardExtra";
import "./Features.scss";
import FeatureCardImg1 from "../../assets/featureCardImg1.png"
import FeatureCardIcon1 from "../../assets/featureCardIcon1.png"
import FeatureCardIcon2 from "../../assets/featureCardIcon2.png"
import FeatureCardImg2 from "../../assets/feaureCardImg2.png"
import FeatureCardIcon3 from "../../assets/featureCardIcon3.png"
import FeatureCardImg3 from "../../assets/featureCardImg3.png"
import FeatureCardIcon4 from "../../assets/featureCardIcon4.png"

const Features = () => {
  return (
    <div className="features">
      <h1 className="features__header">
        An all-in-one suite of financial solutions
      </h1>
      <p className="features__subText">
        Everything you need for saving, investing, POS agency banking, and
        registering your business with the CAC.
      </p>

      <div className="features__cards">
        <FeatureCard
          header="Automate Your Savings with Kolomoni Savings"
          description="We provide flexible savings options with competitive interest rates, ensuring you can effortlessly grow your funds with peace of mind."
          cta="Start Saving"
          picture={FeatureCardImg1}
          icon={FeatureCardIcon1}
          padding={"4.6rem 3.8rem 0"}
        />
        <FeatureCard
          header="Transform Your Business with Our POS Agency Banking"
          description=" As a trusted partner in the financial ecosystem, we provide you with the tools and support needed to offer seamless banking services right from your business location."
          cta="Become an Agent"
          picture={FeatureCardImg2}
          icon={FeatureCardIcon2}
          padding="4.1rem 4.2rem 2.6rem 4.1rem"
        />
      </div>

      <div className="features__cardsTwo">
        <FeatureCardExtra
          header="Your Path to Financial Growth"
          description="We provide flexible savings options with competitive interest rates, ensuring you can effortlessly grow your funds with peace of mind."
          cta="Explore Now"
          icon={FeatureCardIcon3}
          picture={FeatureCardImg3}
          showPicture
          flex={0.7}
        />
        <FeatureCardExtra
          header="Register Your Business with CAC"
          description="We provide flexible savings options with competitive interest rates, ensuring you can effortlessly grow your funds with peace of mind."
          cta="Register My Business"
          icon={FeatureCardIcon4}
          flex={0.3}
        />
      </div>
    </div>
  );
}

export default Features