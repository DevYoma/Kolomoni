import "./BenefitCard.scss";

type Prop = {
    icon: string;
    title: string;
    description: string;
}

const BenefitCard = ({ icon, title, description }: Prop) => {
  return (
    <div className="benefitCard">
        <img src={icon} alt="benefit icon" className="benefitCard__icon" />
        <h3 className="benefitCard__title">{title}</h3>
        <div className="benefitCard__description">{description}</div>
    </div>
  )
}

export default BenefitCard