export default function ButtonInput({ value, onClick }) {
  return (
    <>
      <input type="button" value={value} onClick={onClick} />
    </>
  );
}
