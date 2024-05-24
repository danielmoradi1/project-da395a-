export default function ButtonInput({ value, onClick }) {
  return (
    <>
      <input className="button" type="button" value={value} onClick={onClick} />
    </>
  );
}
