import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Toggle } from "react-bootstrap";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper bg="light" variant="light">
      <WrapperContainer className=" d-flex justify-content-between mw-90">
        <InitialContainer>
          <Initial className="text-light" href="#home">
            CV
          </Initial>
        </InitialContainer>

        <Nav>
          <Nav.Link className="text-light fs-4" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className="text-light fs-4" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </WrapperContainer>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled(Navbar)`
  background-color: #40403b !important;
  padding-top: 60px;
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
