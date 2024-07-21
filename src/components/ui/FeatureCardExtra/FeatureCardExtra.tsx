    import "./FeatureCardExtra.scss";
    import FeatureCardIcon1 from "../../../assets/featureCardIcon1.png";
    import { RiArrowRightLine } from "react-icons/ri";
    import FeatureCardImg1 from "../../../assets/featureCardImg1.png";

    type Prop = {
        icon: string;
        header: string;
        description: string;
        cta: string;
        picture?: string;
        showPicture?: boolean;
        flex?: number;
    }

    const FeatureCardExtra = ({ icon, header, description, cta, showPicture, flex, picture }: Prop) => {
        const styles = {
            flex
        }
    return (
        <div className="featureCardExtra" style={styles}>
            <div className="featureCardExtra__top">
                <img
                    src={icon}
                    alt="feature card 1"
                    className="featureCardExtra__topIcon"
                />
                <h2 className="featureCardExtra__topHeader">
                    {header}
                </h2>
                <div className="featureCardExtra__topDescription">
                    {description}
                </div>
                <div className="featureCardExtra__topCta">
                    {cta} <RiArrowRightLine />
                </div>
            </div>
           {showPicture && <div className="featureCardExtra__bottom">
                <img src={picture} alt="FeatureCardExtra-img" />
            </div>}
        </div>
    );
    }

    export default FeatureCardExtra