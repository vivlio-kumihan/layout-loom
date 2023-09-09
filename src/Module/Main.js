import { useState } from 'react';
import ShutterAnimation from '../Component/ShutterAnimation'
import HoverButton from '../Component/HoverButton'
import AccordionList from '../Component/AccordionList'

const Main = () => {
  const [isShown, setIsShown] = useState(false);
  const [isAppear, setIsAppear] = useState(false);

  return (
    <main>
      <HoverButton
        isShown={isShown}
        setIsShown={setIsShown} />
      <ShutterAnimation isShown={isShown} />
      <AccordionList
        isAppear={isAppear}
        setIsAppear={setIsAppear} />
    </main>
  );
};

export default Main