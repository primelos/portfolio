import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { MdOpenInBrowser } from "react-icons/md";

const CarouselProjects = ({ myRef }) => {
  return (
    <Wrapper ref={myRef}>
      <Carousel fade>
        <Carousel.Item>
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
        <Carousel.Item>
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
        <Carousel.Item>
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
        <Carousel.Item>
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
        <Carousel.Item>
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
        <Carousel.Item>
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
        <Carousel.Item>
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
        <Carousel.Item>
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
  font-size: 70px !important;
  color: #6ed629;
  -webkit-animation: flip-with-rotate 1.5s infinite;
  animation: flip-with-rotate 1.5s infinite;

  @keyframes flip-with-rotate {
    0% {
      transform: perspective(400px) rotateY(0);
    }

    100% {
      transform: perspective(400px) rotateY(180deg);
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 40px !important;
  }
`;

const CaroCaption = styled(Carousel.Caption)`
  bottom: 100px;
  @media screen and (max-width: 450px) {
    bottom: 10px !important;
  }
`;
