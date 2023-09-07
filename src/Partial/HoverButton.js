const HoverButton = ({isShown, setIsShown}) => {
  return (
    <div className="button-wrapper">
      <button 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        button
      </button>
      {/* {isShown && <p>I'll appear when you hover over the button.</p>} */}
    </div>
  );
};
export default HoverButton