import React from "react";
import styled from "styled-components";
import Intro from "../components/intro";
import NavBar from "../components/navBar";

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <Intro />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
`;
