export default function ButtonInput({ value, onClick }) {
  return (
    <>
      <input class="button" type="button" value={value} onClick={onClick} />
    </>
  );
}
