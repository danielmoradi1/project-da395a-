import Confetti from "react-dom-confetti";
import confettiConfig from "../../config/confettiConfig";
import "../../styles/confetti.css";

export default function ConfettiComponent({ active }) {
  return (
    <div className="confetti-wrapper is-fixed-top is-flex is-justify-content-center is-align-items-center">
      <Confetti active={active} config={confettiConfig} />
    </div>
  );
}
