import "../../styles/globals.css";

export default function TextInput({ placeholder, setter }) {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => setter(e.target.value)}
      />
    </div>
  );
}
