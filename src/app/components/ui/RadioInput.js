import { MdRestaurant, MdLocalCafe, MdLocalBar } from "react-icons/md";
import "../../styles/RadioInput.css";

export default function RadioInput({ label, value, checked, setType }) {
  const getIcon = () => {
    switch (value) {
      case "restaurant":
        return <MdRestaurant />;
      case "cafe":
        return <MdLocalCafe />;
      case "bar":
        return <MdLocalBar />;
      default:
        return null;
    }
  };

  return (
    <label className={`radio-input ${checked === value ? "active" : ""}`}>
      <input
        type="radio"
        name="option"
        value={value}
        checked={checked === value}
        onChange={() => setType(value)}
      />
      <span className="icon">{getIcon()}</span>
      {label}
    </label>
  );
}
