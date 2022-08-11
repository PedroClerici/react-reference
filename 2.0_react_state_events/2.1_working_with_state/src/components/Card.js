import "./Card.css";

export const Card = ({ children, className }) => (
  <div className={["card", className].join(" ")}>
    {children}
  </div>
);