import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Wrapper bg="light" variant="light">
      <WrapperContainer className=" d-flex justify-content-between mw-90">
        <LinkWrapper to="/">
          <InitialContainer>
            <Initial className="text-light" href="#home">
              CV
            </Initial>
          </InitialContainer>
        </LinkWrapper>

        <Nav>
          <LinkWrapper to="/projects">
            <Nav.Link className="text-light fs-4" href="#projects">
              Projects
            </Nav.Link>
          </LinkWrapper>
          <LinkWrapper to="/contact">
            <Nav.Link className="text-light fs-4" href="#contact">
              Contact
            </Nav.Link>
          </LinkWrapper>
        </Nav>
      </WrapperContainer>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled(Navbar)`
  /* background-color: #40403b !important; */
  padding-top: 60px;
  --bs-bg-opacity: 0 !important;
`;

const WrapperContainer = styled(Container)`
  max-width: 90% !important;
`;

const InitialContainer = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  /* border: 3px solid black; */
  border-radius: 50%;
  width: 120px;
  max-width: 120px;
  height: 120px;
  max-height: 120px;
  background-color: #666644;
`;

const Initial = styled(Navbar.Brand)`
  font-size: 70px;
  margin-right: 0;
  width: 110px;
  /* margin-top: 0; */
  height: 110px;
  background-color: #4c4b2d;
  border-radius: 50%;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  transition: 1s !important;
  &:hover {
    opacity: 0.5;
  }
`;
