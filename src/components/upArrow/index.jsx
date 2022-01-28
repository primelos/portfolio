import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

const UpArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <ArrowUp
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    />
  );
};

export default UpArrow;

const ArrowUp = styled(FaArrowCircleUp)`
  position: fixed;
  width: 3rem;
  height: 3rem;
  bottom: 100px;
  right: 123px;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 2s infinite;
  -webkit-animation: fadeIn 2s infinite;
  /* transition: opacity 0.4s; */
  opacity: 0.5;
  -webkit-appearance: none;
  -webkit-box-shadow: 0px 11px 11px -3px #e2dada;
  -moz-box-shadow: 0px 11px 11px -3px #e2dada;
  box-shadow: 0px 11px 11px -3px #e2dada;
  -webkit-border-radius: 50%;
  border-radius: 50%;

  &:hover {
    opacity: 1;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
  @media screen and (max-width: 450px) {
    width: 2rem;
    height: 2rem;
    right: 35px;
  }
`;
