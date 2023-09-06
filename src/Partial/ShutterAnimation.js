const ShutterAnimation = () => {
  const box = document.querySelector('.box');
  console.log(box)
  // box.addEventListener('mouseenter', function() {
  //   this.classList.add('hover')
  // })
  return (
    <div className="shutter-animation">
      <div className="box">
        <div className="bgimage"></div>
      </div>
    </div>
  );
};

export default ShutterAnimation