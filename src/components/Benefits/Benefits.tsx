import "./Benefits.scss";
import BenefitIcon1 from "../../assets/benefitIcon1.png"
import BenefitIcon2 from "../../assets/benefitIcon2.png";
import BenefitIcon3 from "../../assets/benefitIcon3.png";
import BenefitIcon4 from "../../assets/benefitIcon4.png"
import BenefitMoneyImg from "../../assets/benefitMoneyImg.png"
import BenefitCard from "../ui/BenefitCard/BenefitCard";


const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits__header">
        <div className="benefits__headerButton">Benefits</div>
        <div className="benefits__headerText">
          <p>Unlock Your Financial </p>
          <p>Potential with Kolomoni </p>
        </div>
      </div>

      <div className="benefits__main">
        <div className="benefits__mainLeft">
          <BenefitCard
            icon={BenefitIcon1}
            title="Comprehensive Financial Management"
            description="Streamline all your financial activities in one place, including savings, investments, and POS agency banking, for efficient and organized business operations."
          />
          <BenefitCard
            icon={BenefitIcon2}
            title="Competitive Interest Rates On Savings"
            description=" Take advantage of attractive interest rates on your savings and investments, helping you grow your funds more effectively and reach your financial goals faster."
          />
          <BenefitCard
            icon={BenefitIcon3}
            title="Convenient Business Registration"
            description="Easily register your business with the Corporate Affairs Commission (CAC), ensuring compliance and a smooth start to your entrepreneurial journey."
          />
          <BenefitCard
            icon={BenefitIcon4}
            title="Pos Agency Banking"
            description="Leverage POS agency banking services to improve cash flow management, increase transaction efficiency, and offer more payment options to your customers."
          />
        </div>
        <div className="benefits__mainRight">
          <img src={BenefitMoneyImg} alt="Benefit money Img" />
        </div>
      </div>
    </div>
  );
}

export default Benefits