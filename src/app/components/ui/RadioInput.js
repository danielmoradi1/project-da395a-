export default function RadioInput({ label, value, checked, setType }) {
  return (
    <>
      <label>
        <input
          type="radio"
          name="option"
          value={value}
          checked={checked === value}
          onChange={() => setType(value)}
        />
        {label}
      </label>
    </>
  );
}
