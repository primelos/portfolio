import React from "react";
import styled from "styled-components";
import CarouselProjects from "../components/carousel";
import Footer from "../components/footer";
import IconsList from "../components/icons";
import Intro from "../components/intro";
import NavBar from "../components/navBar";

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <Intro />
      <CarouselProjects />
      <IconsList />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
`;
