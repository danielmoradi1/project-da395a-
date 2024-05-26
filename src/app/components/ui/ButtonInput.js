export default function ButtonInput({ value, onClick }) {
  return (
    <>
      <input
        className="button is-primary"
        type="button"
        value={value}
        onClick={onClick}
      />
    </>
  );
}
