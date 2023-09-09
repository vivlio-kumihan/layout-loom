import { useEffect, useState } from "react";
import styled from 'styled-components';

// style定義 ///////////////////////////////////////
const StyleScrollingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 5%;
  font-size: .9rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  background-color: green;
  z-index: 100;
  transition: transform 0.5s, background-color 0.5s;
  &.scroll-down {
    transform: translateY(-100%);
  }
  &.scroll-up {
    transform: translateY(0%);
  }
`

const Ul = styled.ul`
  display: flex;
  gap: 30px;
  `

const Anc = styled.a`
  display: block;
  padding: 30px 0;
  cursor: pointer;
`

// ScrollingHeaderコンポーネント定義 ///////////////////////////
const ScrollingHeader = () => {
  // このコンポーネントはuseScrollDirection関数の実行
  const useScrollDirection = () => {
    // className={`scroll-${scrollDirection}`}にdown, upを入れる。
    const [scrollDirection, setScrollDirection] = useState('');
    // スクリーン上辺からの距離を監視
    const [prevOffset, setPrevOffset] = useState(0);

    useEffect(() => {
      const toggleScrollDirection = () => {
        let scrollY = window.scrollY;
        console.log(scrollY, "scrollY")
        console.log(prevOffset, "prevOffset")
        if (scrollY > prevOffset && scrollY > 50) {
          setScrollDirection('down');
        } else if (scrollY < prevOffset && scrollY > 50) {
          setScrollDirection('up');
        } else {
          setScrollDirection('');
        }
        setPrevOffset(scrollY);
      };

      // スクロールしている状態では、toggleScrollDirection関数を呼び出し、
      window.addEventListener('scroll', toggleScrollDirection);

      // スクロールを止めた時が、useScrollDirection関数の戻り値となる。
      // というか、まだなんとなくしか解析できてない。
      // でも状態を管理しているんだと感じれて楽しい。
      // まだ、useState止まりで勉強中。次に進みたい。230909sat
      return () => {
        window.removeEventListener('scroll', toggleScrollDirection);
      };
    }, [prevOffset]);

    // downまたはupを送る（className={`scroll-${scrollDirection}`}に向けて）。
    return scrollDirection;
  };

  // useScrollDirection関数を実行してJSXへ送信 /////////////////
  const scrollDirection = useScrollDirection();

  return (
    <StyleScrollingHeader className={`scroll-${scrollDirection}`}>
        <h1>scrolling header</h1>
        <Ul role="navigation">
          <li>
            <Anc>Link 1</Anc>
          </li>
          <li>
            <Anc>Link 1</Anc>
          </li>
          <li>
            <Anc>Link 2</Anc>
          </li>
          <li>
            <Anc>Link 3</Anc>
          </li>
        </Ul>
    </StyleScrollingHeader>
  );
};

export default ScrollingHeader;

// const ScrollingHeader = () => {
//   const useScrollDirection = () => {
//     const [scrollDirection, setScrollDirection] = useState('');
//     const [prevOffset, setPrevOffset] = useState(0);

//     const toggleScrollDirection = () => {
//       let scrollY = window.scrollY;
//       if (scrollY > prevOffset && scrollY > 50) {
//         setScrollDirection('down');
//       } else if (scrollY < prevOffset && scrollY > 50) {
//         setScrollDirection('up');
//       } else {
//         setScrollDirection('');
//       }
//       setPrevOffset(scrollY);
//     };

//     useEffect(() => {
//       const toggleScrollDirection = () => {
//         let scrollY = window.scrollY;
//         if (scrollY > prevOffset && scrollY > 50) {
//           setScrollDirection('down');
//         } else if (scrollY < prevOffset && scrollY > 50) {
//           setScrollDirection('up');
//         } else {
//           setScrollDirection('');
//         }
//         setPrevOffset(scrollY);
//       };

//       window.addEventListener('scroll', toggleScrollDirection);
//       return () => {
//         window.removeEventListener('scroll', toggleScrollDirection);
//       };
//     }, [prevOffset]);

//     return scrollDirection;
//   };

//   const scrollDirection = useScrollDirection();

//   return (
//     <StyleScrollingHeader className={`scroll-${scrollDirection}`}>
//         <h1>scrolling header</h1>
//         <Ul role="navigation">
//           <li>
//             <Anc>Link 1</Anc>
//           </li>
//           <li>
//             <Anc>Link 1</Anc>
//           </li>
//           <li>
//             <Anc>Link 2</Anc>
//           </li>
//           <li>
//             <Anc>Link 3</Anc>
//           </li>
//         </Ul>
//     </StyleScrollingHeader>
//   );
// };

// export default ScrollingHeader;

