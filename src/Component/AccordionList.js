// import { useState } from "react";
// import styled from "styled-components";

// const StyledAccordionListDl = styled.dl`
//   display: grid;
//   place-content: center;
//   margin-top: 50px;
//   dt {
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: .1em;
//     transition: .5s;
//     &:not(:first-of-type) {
//       margin-top: 40px;
//     }
//     cursor: pointer; // dtをクリック可能にする
//   }
//   dd {
//     height: 0;
//     overflow: hidden;
//     font-size: 1.1rem;
//     line-height: 1;
//     transition: 1s;
//     visibility: hidden;
//     opacity: 0;
//     &.open {
//       height: auto; // 適切な最大の高さを設定してください
//       visibility: visible;
//       opacity: 1;
//     }
//     a {
//       display: block;
//       padding: 10px;
//     }
//   }
// `;

// const AccordionList = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   // アコーディオンをトグルするハンドラ関数
//   const toggleAccordion = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(null);
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     <StyledAccordionListDl>
//       <dt
//         onClick={() => toggleAccordion(0)}
//         className={openIndex === 0 ? "open" : ""}
//       >
//         heading 1
//       </dt>
//       <dd className={openIndex === 0 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt
//         onClick={() => toggleAccordion(1)}
//         className={openIndex === 1 ? "open" : ""}
//       >
//         heading 2
//       </dt>
//       <dd className={openIndex === 1 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt
//         onClick={() => toggleAccordion(2)}
//         className={openIndex === 2 ? "open" : ""}
//       >
//         heading 3
//       </dt>
//       <dd className={openIndex === 2 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//     </StyledAccordionListDl>
//   );
// };

// export default AccordionList;



import { useState } from "react";
import styled from "styled-components";

const StyledAccordionListDl = styled.dl`
  display: grid;
  place-content: center;
  margin-top: 50px;
  dt {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .1em;
    &:not(:first-of-type) {
      margin-top: 40px;
    }
    cursor: pointer; // dtをクリック可能にする
  }
  dd {
    height: 0;
    font-size: 1.1rem;
    line-height: 1;
    background-color: #999;
    transition: height .3s ease-out;
    transform: translateY(-5px);
    visibility: hidden;
    opacity: 0;
    &.open { // .openクラスが付与されたときに表示するスタイルを適用
      height: auto;
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    }
    a {
      display: block;
      padding: 10px;
    }
  }
`;

const AccordionList = () => {
  // 各アコーディオン要素ごとにステートを管理するオブジェクト
  const [isOpen, setIsOpen] = useState({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
  });

  // アコーディオン要素をトグルするハンドラ関数
  const toggleAccordion = (accordionKey) => {
    setIsOpen((prev) => ({
      ...prev,
      [accordionKey]: !prev[accordionKey],
    }));
  };

  return (
    <StyledAccordionListDl>
      <dt onClick={() => toggleAccordion("isOpen1")}>heading 1</dt>
      <dd className={isOpen.isOpen1 ? "open" : ""}>
        <a href="">menu1</a>
        <a href="">menu2</a>
        <a href="">menu3</a>
      </dd>
      <dt onClick={() => toggleAccordion("isOpen2")}>heading 2</dt>
      <dd className={isOpen.isOpen2 ? "open" : ""}>
        <a href="">menu1</a>
        <a href="">menu2</a>
        <a href="">menu3</a>
      </dd>
      <dt onClick={() => toggleAccordion("isOpen3")}>heading 3</dt>
      <dd className={isOpen.isOpen3 ? "open" : ""}>
        <a href="">menu1</a>
        <a href="">menu2</a>
        <a href="">menu3</a>
      </dd>
    </StyledAccordionListDl>
  );
};

export default AccordionList;









// 不要のはず
// import { useState } from "react";
// import styled from "styled-components";

// const StyledAccordionListDl = styled.dl`
//   display: grid;
//   place-content: center;
//   margin-top: 50px;
//   dt {
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: .1em;
//     &:not(:first-of-type) {
//       margin-top: 40px;
//     }
//     cursor: pointer; // dtをクリック可能にする
//   }
//   dd {
//     height: 0;
//     font-size: 1.1rem;
//     line-height: 1;
//     transition: .3s;
//     transform: translateY(5px);
//     visibility: hidden;
//     opacity: 0;
//     &.open { // .openクラスが付与されたときに表示するスタイルを適用
//       height: auto;
//       transform: translateY(0);
//       visibility: visible;
//       opacity: 1;
//     }
//     a {
//       display: block;
//       padding: 10px;
//     }
//   }
// `;

// const AccordionList = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const toggleAccordion = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(null);
//     } else {
//       setOpenIndex(index)
//     }
//   }

//   return (
//     <StyledAccordionListDl>
//       <dt onClick={() => toggleAccordion(0)}>heading 1</dt>
//       <dd className={openIndex === 0 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt onClick={() => toggleAccordion(1)}>heading 2</dt>
//       <dd className={openIndex === 1 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt onClick={() => toggleAccordion(2)}>heading 3</dt>
//       <dd className={openIndex === 2 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//     </StyledAccordionListDl>
//   );
// };

// export default AccordionList;


// import { useState } from "react";
// import styled from "styled-components";

// const StyledAccordionListDl = styled.dl`
//   display: grid;
//   place-content: center;
//   margin-top: 50px;
//   dt {
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: .1em;
//     &:not(:first-of-type) {
//       margin-top: 40px;
//     }
//     cursor: pointer; // dtをクリック可能にする
//   }
//   dd {
//     height: 0;
//     font-size: 1.1rem;
//     line-height: 1;
//     transition: .3s;
//     transform: translateY(5px);
//     visibility: hidden;
//     opacity: 0;
//     &.open { // .openクラスが付与されたときに表示するスタイルを適用
//       height: auto;
//       transform: translateY(0);
//       visibility: visible;
//       opacity: 1;
//     }
//     a {
//       display: block;
//       padding: 10px;
//     }
//   }
// `;

// const AccordionList = () => {
//   // 各アコーディオン要素ごとにステートを管理
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [isOpen3, setIsOpen3] = useState(false);

//   return (
//     <StyledAccordionListDl>
//       <dt
//         onClick={() => {
//           setIsOpen1(!isOpen1);
//         }}
//       >
//         heading 1
//       </dt>
//       <dd className={isOpen1 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt
//         onClick={() => {
//           setIsOpen2(!isOpen2);
//         }}
//       >
//         heading 2
//       </dt>
//       <dd className={isOpen2 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt
//         onClick={() => {
//           setIsOpen3(!isOpen3);
//         }}
//       >
//         heading 3
//       </dt>
//       <dd className={isOpen3 ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//     </StyledAccordionListDl>
//   );
// };

// export default AccordionList;


// import { useState } from "react";
// import styled from "styled-components";

// const StyledAccordionListDl = styled.dl`
//   display: grid;
//   place-content: center;
//   margin-top: 50px;
//   dt {
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: .1em;
//     &:not(:first-of-type) {
//       margin-top: 40px;
//     }
//     cursor: pointer; // dtをクリック可能にする
//   }
//   dd {
//     height: 0;
//     font-size: 1.1rem;
//     line-height: 1;
//     transition: .3s;
//     visibility: hidden;
//     opacity: 0;
//     a {
//       display: block;
//       padding: 10px;
//     }
//   }
//   &.open { // .openクラスが付与されたときに表示するスタイルを適用
//     dd {
//       height: auto;
//       visibility: visible;
//       opacity: 1;
//     }
//   }
// `;

// const AccordionList = ({ isAppear, setIsAppear }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <StyledAccordionListDl>
//       <dt
//         onClick={() => {
//           setIsOpen(!isOpen); // トグル状態を切り替える
//           setIsAppear(true);
//         }}
//         className={isOpen ? "open" : ""}
//       >
//         heading 1
//       </dt>
//       <dd className={isOpen ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt
//         onClick={() => {
//           setIsOpen(!isOpen); // トグル状態を切り替える
//           setIsAppear(true);
//         }}
//         className={isOpen ? "open" : ""}
//       >
//         heading 1
//       </dt>
//       <dd className={isOpen ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt
//         onClick={() => {
//           setIsOpen(!isOpen); // トグル状態を切り替える
//           setIsAppear(true);
//         }}
//         className={isOpen ? "open" : ""}
//       >
//         heading 1
//       </dt>
//       <dd className={isOpen ? "open" : ""}>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//     </StyledAccordionListDl>
//   );
// };

// export default AccordionList;





// org

// // import { useState } from "react";
// import styled from "styled-components";

// // style定義
// const StyledAccordionListDl = styled.dl`
//   display: grid;
//   place-content: center;
//   margin-top: 50px;
//   dt {
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: .1em;
//     &:not(:first-of-type) {
//       margin-top: 40px;
//     }
//   }
//   dd {
//     height: 0 ;
//     font-size: 1.1rem;
//     line-height: 1;
//     transition: .3s;
//     visibility: hidden;
//     opacity: 0;
//     a {
//       display: block;
//       padding: 10px;
//     }
//   }
// `

// // AccordionListコンポーネント定義
// const AccordionList = ({ isAppear, setIsAppear }) => {
//   return (
//     <StyledAccordionListDl>
//       <dt onClick={() => setIsAppear(true)}>heading</dt>
//       <dd>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt onClick={() => setIsAppear(true)}>heading</dt>
//       <dd>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//       <dt onClick={() => setIsAppear(true)}>heading</dt>
//       <dd>
//         <a href="">menu1</a>
//         <a href="">menu2</a>
//         <a href="">menu3</a>
//       </dd>
//     </StyledAccordionListDl>
//   );
// };

// export default AccordionList