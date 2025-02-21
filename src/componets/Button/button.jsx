import "../Button/button.css"

function Button( {errow, buttonStyle, loading, children, ...props} ) {
  return (
      <button className={`button ${buttonStyle}`} {...props}>
          {children}
      </button>
  );
}
export default Button;
