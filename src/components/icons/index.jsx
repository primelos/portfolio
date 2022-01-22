import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaYarn,
  FaLess,
} from "react-icons/fa";
import data from "../../data.json";
import {
  SiCss3,
  SiPostman,
  SiJest,
  SiRedux,
  SiJavascript,
} from "react-icons/si";

const IconsList = () => {
  return (
    <Wrapper>
      <IconContainer>
        <IconLink
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#dd4b25" }}>
            <FaHtml5 />
          </IconBox>
          <Text>HTML5</Text>
        </IconLink>
      </IconContainer>

      <IconContainer>
        <IconLink
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#384bdd" }}>
            <FaCss3Alt />
          </IconBox>
          <Text>CSS3</Text>
        </IconLink>
      </IconContainer>

      <IconContainer>
        <IconLink
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#efd81e" }}>
            <SiJavascript />
          </IconBox>
          <Text>Javascript</Text>
        </IconLink>
      </IconContainer>

      <IconContainer>
        <IconLink
          href="http://lesscss.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#2a4c80" }}>
            <FaLess />
          </IconBox>
          <Text>LESS</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://classic.yarnpkg.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#3e8ab5" }}>
            <FaYarn />
          </IconBox>
          <Text>Yarn</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#5ed3f3" }}>
            <FaReact />
          </IconBox>
          <Text>React</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#7248b6" }}>
            <SiRedux />
          </IconBox>
          <Text>Redux</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#111214" }}>
            <FaGithub />
          </IconBox>
          <Text>Github</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://git-scm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#e84d30" }}>
            <FaGitAlt />
          </IconBox>
          <Text>Git</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#87bf01" }}>
            <FaNodeJs />
          </IconBox>
          <Text>Node.js</Text>
        </IconLink>
      </IconContainer>

      <IconContainer>
        <IconLink
          href="https://www.npmjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#c53634" }}>
            <FaNpm />
          </IconBox>
          <Text>npm</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://jestjs.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#8c273a" }}>
            <SiJest />
          </IconBox>
          <Text>Jest</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLinkImg
          href="https://github.com/axios/axios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/axios.svg" alt="axios" />
          <Text>Axios</Text>
        </IconLinkImg>
      </IconContainer>
      <IconContainer>
        <IconLinkImg
          href="https://www.sqlite.org/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/SQLite-logo.png" alt="sqlite" />
          <Text>SQLite</Text>
        </IconLinkImg>
      </IconContainer>
      <IconContainer>
        <IconLinkImg
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/express.jpg" alt="express.js" />
          <Text>Express.js</Text>
        </IconLinkImg>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://www.postman.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBox style={{ color: "#ef6935" }}>
            <SiPostman />
          </IconBox>
          <Text>Postman</Text>
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLinkImg
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/python.png" alt="python" />
          <Text>Python</Text>
        </IconLinkImg>
      </IconContainer>
    </Wrapper>
  );
};

export default IconsList;

const Wrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  background-color: #40403b !important;
`;

const IconContainer = styled.div`
  margin: 0 30px;
`;

const Text = styled.div`
  text-align: center;
  color: black;
`;

const IconBox = styled.div`
  font-size: 50px;
`;

const IconLink = styled.a`
  text-decoration: none;
`;

const IconLinkImg = styled.a`
  text-decoration: none;
  img {
    height: 75px;
    width: 75px;
    object-fit: contain;
  }
`;
