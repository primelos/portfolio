import { useEffect, useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    const getYear = new Date().getFullYear();
    return setYear(getYear);
  }, []);

  return (
    <Wrapper>
      <Text>
        Copy Right © <span id="date">{year}</span> Carlos Venegas
      </Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  margin-top: 100px;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 450px) {
    height: 20vh;
    margin-top: 20px;
  }
`;

const Text = styled.div`
  letter-spacing: 1px;
  color: whitesmoke;
`;
