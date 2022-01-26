import styled from "styled-components";

const Footer = () => {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      let dates = document.getElementById("date");
      dates.innerHTML = new Date().getFullYear();
    }
  };

  return (
    <Wrapper>
      <Text>
        Copy Right © <span id="date"></span> Carlos Venegas
      </Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const Text = styled.div`
  letter-spacing: 1px;
  color: whitesmoke;
`;
