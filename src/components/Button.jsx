function Button(props) {
  return (
    <button
      id={props.id}
      type="button"
      className="py-2 px-4 bg-gray-300 shadow uppercase"
    >
      {props.title}
    </button>
  );
}

export default Button;
