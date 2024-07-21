import "./FloatingImg.scss";

type Props = {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    img: string;
}

const FloatingImg = ({ top, left, right, bottom, img }: Props) => {
    const styles = {
        top, 
        left, 
        right, 
        bottom
    }
  return (
    <div className="floatingImg" style={styles}>
        <div className="floatingImg__circle">
            <img src={img} alt="float-img" />
        </div>
    </div>
  )
}

export default FloatingImg