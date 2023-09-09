import { useState } from "react";
import styled from "styled-components";

const AccordionList = () => {
  // 各アコーディオンの状態を管理するための配列を作成
  const [isOpenArray, setIsOpenArray] = useState([false, false, false, false]);

  // アコーディオンの開閉状態をトグルする関数
  const toggleAccordion = (index) => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = !newIsOpenArray[index];
    setIsOpenArray(newIsOpenArray);
  };

  const StyledAccordionList = styled.ul`
    margin-top: 60px;
    + ul {
      margin-top: 20px;
    }
    li {
      margin: 0 auto;
      width: min(400px, 95%);
      button {
        width: 100%;
        padding: 20px;
        font-weight: 700;
        color: #fff;
        background-color: #999;
        border-radius: 10px 10px 0 0;
      }
      .accordion-body {
        height: ${(props) => (props.isOpen ? "auto" : "0")};
        padding: ${(props) => (props.isOpen ? "20px" : "0")};
        line-height: 1.5;
        text-align: justify;
        background-color: #ddd;
        transition: height 0.3s ease-out;
        visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
        opacity: ${(props) => (props.isOpen ? "1" : "0")};
        overflow: hidden;
      }
    }
  `;

  const texts = ["1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。", "1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。", "1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。", "1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。1番目のテキストが入ります。"]

  const generateAccordion = (index) => {
    const isOpen = isOpenArray[index];
    return (
      <li key={index}>
        <button
          type="button"
          area-controls={`contents${index}`}
          area-expanded={isOpen}
          onClick={() => toggleAccordion(index)}>
          {isOpen ? "close" : "open"}
        </button>
        <p
          id={`contents${index}`}
          className="accordion-body"
          area-expanded={isOpen}>
          {texts[index]}
        </p>
      </li>
    )
  };

  return (
    <>
      <StyledAccordionList isOpen={isOpenArray[0]}>
        {generateAccordion(0)}
      </StyledAccordionList>
      <StyledAccordionList isOpen={isOpenArray[1]}>
        {generateAccordion(1)}
      </StyledAccordionList>
      <StyledAccordionList isOpen={isOpenArray[2]}>
        {generateAccordion(2)}
      </StyledAccordionList>
      <StyledAccordionList isOpen={isOpenArray[3]}>
        {generateAccordion(3)}
      </StyledAccordionList>
    </>
  );
};

export default AccordionList;