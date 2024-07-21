import "./Logo.scss";
import KolomoniImg from "../../assets/kolomoniLogo.png"

type Prop = {
    text?: boolean;
}

const Logo = ({ text }: Prop) => {
  return (
    <div className="logo">
        <img src={KolomoniImg} alt="kolomoni-pic" />
        {text && <span>Kolomoni</span>}
    </div>
  )
}

export default Logo