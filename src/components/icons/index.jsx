import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaYarn,
  FaLess,
  FaNode,
} from "react-icons/fa";
import {
  SiPostman,
  SiJest,
  SiRedux,
  SiJavascript,
  SiExpress,
  SiMysql,
  SiSqlite,
  SiPython,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

const IconsList = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>Technologies and Tools used</Title>
      </TitleContainer>
      <IconWrapper>
        <IconContainer>
          <IconLink
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#dd4b25" }}>
              <FaHtml5 />
            </IconBox>
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
          </IconLink>
        </IconContainer>
        <IconContainer>
          <IconLink
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#5ed3f3" }}>
              <SiNextdotjs />
            </IconBox>
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
          </IconLink>
        </IconContainer>
        <IconContainer>
          <IconLink
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#87bf01" }}>
              <FaNode />
            </IconBox>
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
          </IconLink>
        </IconContainer>
        <IconContainer>
          <IconLinkImg
            href="https://github.com/axios/axios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/axios.svg" alt="axios" />
          </IconLinkImg>
        </IconContainer>
        <IconContainer>
          <IconLinkImg
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#295d86" }}>
              <SiMysql />
            </IconBox>
          </IconLinkImg>
        </IconContainer>
        <IconContainer>
          <IconLinkImg
            href="https://www.sqlite.org/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#53a8db" }}>
              <SiSqlite />
            </IconBox>
          </IconLinkImg>
        </IconContainer>
        <IconContainer>
          <IconLinkImg
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#323232" }}>
              <SiExpress />
            </IconBox>
          </IconLinkImg>
        </IconContainer>
        <IconContainer>
          <IconLinkImg
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#f4c52b" }}>
              <SiFirebase />
            </IconBox>
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
          </IconLink>
        </IconContainer>
        <IconContainer>
          <IconLinkImg
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox style={{ color: "#3470a0" }}>
              <SiPython />
            </IconBox>
          </IconLinkImg>
        </IconContainer>
      </IconWrapper>
    </Wrapper>
  );
};

export default IconsList;

const Wrapper = styled.div`
  padding-top: 80px;
  height: 90vh;
  width: 50%;
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: whitesmoke;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  margin: 0 30px;
  padding: 30px 0;
`;

const Text = styled.div`
  text-align: center;
  color: black;
`;

const IconBox = styled.div`
  font-size: 65px;
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
