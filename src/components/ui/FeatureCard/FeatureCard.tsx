    import React from "react";
import "./FeatureCard.scss";
    import { RiArrowRightLine } from "react-icons/ri";

    type Prop = {
        icon: string;
        header: string;
        description: string;
        cta: string;
        picture?: string;
        padding?: string;
    }

    const FeatureCard = ({ icon, header, description, cta, picture, padding }: Prop) => {
    return (
      <div className="featureCard">
        <div className="featureCard__top">
          <img
            src={icon}
            alt="feature card img"
            className="featureCard__topIcon"
          />
          <h2 className="featureCard__topHeader">{header}</h2>
          <div className="featureCard__topDescription">{description}</div>
          <div className="featureCard__topCta">
            {cta} <RiArrowRightLine />
          </div>
        </div>
        <div className="featureCard__bottom">
          <img src={picture} alt="featureCard-img" style={{ padding }} />
        </div>
      </div>
    );
    }

    export default FeatureCard