import "./Tools.css";

function Tool({ handleClick, image, isClicked }) {
  return (
    <div onClick={handleClick}>
      <img
        className={isClicked ? "tool__icon-animate" : "tool__icon"}
        src={image}
        alt='img'
      />
    </div>
  );
}

export default Tool;
