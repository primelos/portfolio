import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { MdOpenInBrowser } from "react-icons/md";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";

const CarouselProjects = ({ myRef }) => {
  return (
    <Wrapper ref={myRef}>
      <Carousel
        fade
        prevIcon={<FaHandPointLeft />}
        nextIcon={<FaHandPointRight />}
      >
        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/disney.png"}
            alt="First slide"
          />
          <CaroCaption style={{ bottom: "100px" }}>
            <a
              href="https://disneyplus-cf094.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
        </Carousel.Item>

        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/tesla-clone.png"}
            alt="Second slide"
          />
          <CaroCaption style={{ bottom: "100px" }}>
            <a
              href="https://tesla-clone-one.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
        </Carousel.Item>
        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/uber-clone.png"}
            alt="Third slide"
          />
          <CaroCaption style={{ bottom: "100px" }}>
            <a
              href="https://uber-clone-gold.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
        </Carousel.Item>
        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/todo-list.png"}
            alt="Third slide"
          />
          <CaroCaption style={{ bottom: "100px" }}>
            <a
              href="https://priceless-lamport-ee903d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
        </Carousel.Item>
        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/spacetagram.png"}
            alt="Third slide"
          />
          <CaroCaption style={{ bottom: "100px" }}>
            <a
              href="https://spacestagram21.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
        </Carousel.Item>
        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/starbucks.png"}
            alt="Third slide"
          />
          <CaroCaption style={{ bottom: "100px" }}>
            <a
              href="https://starbucks-clone-green.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
        </Carousel.Item>
        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/futbol-league.png"}
            alt="Third slide"
          />
          <CaroCaption style={{ bottom: "100px" }}>
            <a
              href="https://futbol-dun.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
        </Carousel.Item>
        <Carousel.Item interval="3000">
          <img
            className="d-block w-100"
            src={"./images/pintrest-clone.png"}
            alt="Third slide"
          />
          <CaroCaption>
            <a
              href="https://pintrest-clone.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenBrowser />
            </a>
          </CaroCaption>
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};

export default CarouselProjects;

const Wrapper = styled.div`
  height: 100vh;
  @media screen and (max-width: 450px) {
    height: 25vh;
  }
`;

const OpenBrowser = styled(MdOpenInBrowser)`
  font-size: 700px;
  color: #6ed629;
`;

const CaroCaption = styled(Carousel.Caption)`
  opacity: 0;
  @media screen and (max-width: 450px) {
    top: -10px !important;
  }
`;
