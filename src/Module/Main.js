import { useState } from 'react';
import ShutterAnimation from '../Component/ShutterAnimation'
import HoverButton from '../Component/HoverButton'

const Main = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <main>
      <HoverButton
        isShown={isShown}
        setIsShown={setIsShown} />
      <ShutterAnimation isShown={isShown} />
    </main>
  );
};

export default Main