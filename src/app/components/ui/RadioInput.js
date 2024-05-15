export default function RadioInput({ label, value, checked }) {
  return (
    <>
      <label>
        <input type="radio" name="option" />
        {label}
      </label>
    </>
  );
}
