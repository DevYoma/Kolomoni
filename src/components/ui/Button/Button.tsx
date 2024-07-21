import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: "small" | "medium" | "large"; // look into how to use the sizes to aid responsiveness
  color?: string;
  border?: string;
  padding?: string;
};

const Button = ({
  children,
  backgroundColor = "var(--background-color-primary)",
  size,
  color,
  border, 
  padding,
}: ButtonProps) => {
    const styles = {
        backgroundColor, 
        color, 
        border,
        padding,
    }
  const buttonClass = size ? `button-${size}` : "button";
  return (
    <button className={buttonClass} style={styles}>
      {children}
    </button>
  );
};

export default Button;
