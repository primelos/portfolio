import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CarouselProjects from "../components/carousel";
import Footer from "../components/footer";
import IconsList from "../components/icons";
import Intro from "../components/intro";
import NavBar from "../components/navBar";
import UpArrow from "../components/upArrow";
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
      <UpArrow />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
