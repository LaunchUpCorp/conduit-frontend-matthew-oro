function SubmitButton({ message, type, onClick = undefined }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="self-end focus:outline-none text-white bg-main-green hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5"
    >
      {message}
    </button>
  );
}
export default SubmitButton;
