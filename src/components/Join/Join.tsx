import "./Join.scss"
import JoinImg1 from "../../assets/joinImg1.png"
import JoinImg2 from "../../assets/joinImg2.png"
import JoinImg3 from "../../assets/joinImg3.png"

const Join = () => {
  return (
    <div className="join">
      <div className="join__header">
        <p>Join the 2+ Million People who</p>
        <p>already trust us</p>
      </div>

      <div className="join__container">
          <img src={JoinImg1} alt="join-img-1" />
          <img src={JoinImg2} alt="join-img-2" />
          <img src={JoinImg3} alt="join-img-3" />
      </div>
    </div>
  );
}

export default Join