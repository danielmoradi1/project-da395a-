export default function TextInput({ placeholder, setter }) {
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => setter(e.target.value)}
      />
    </>
  );
}
