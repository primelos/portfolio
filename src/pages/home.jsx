import React, { Component, useRef, useEffect } from "react";
import styled from "styled-components";
import CarouselProjects from "../components/carousel";
import Footer from "../components/footer";
import IconsList from "../components/icons";
import Intro from "../components/intro";
import NavBar from "../components/navBar";

const Home = () => {
  const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  const myRef = useRef(null);

  return (
    <Wrapper>
      <NavBar />
      <Intro executeScroll={executeScroll} />
      <CarouselProjects myRef={myRef} />
      <IconsList />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  /* height: 100vh; */
  /* background: -moz-radial-gradient(
    circle,
    rgb(184, 182, 181) 0%,
    rgb(64, 64, 59) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgb(184, 182, 181) 0%,
    rgb(64, 64, 59) 100%
  );
  background: radial-gradient(
    circle,
    rgb(184, 182, 181) 0%,
    rgb(64, 64, 59) 100%
  ); */
`;
