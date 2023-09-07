const ShutterAnimation = ({ isShown }) => {

  return (
    <div className="shutter-animation">
      <div className={ `box ${isShown ? "open" : ""}`}>
        <div className="bgimage"></div>
      </div>
    </div>
  );
};

export default ShutterAnimation