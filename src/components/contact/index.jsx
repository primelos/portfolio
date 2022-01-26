import React from "react";
import NavBar from "../navBar";
import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";

const Contact = (props) => {
  const [state, handleSubmit] = useForm("contactMe");
  const { errors, submitting, succeeded } = state;

  const navigate = useNavigate();

  if (succeeded) {
    return (
      <Wrapper>
        <Header>Thanks!</Header>
        <Button onClick={() => navigate("/")}>Homepage</Button>
      </Wrapper>
    );
  }
  return (
    <>
      <NavBar history={props.history} />
      <Wrapper>
        <Header>Professional Inquires</Header>
        <FormInput className="form-input" onSubmit={handleSubmit}>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" />

          <br />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
          <ValidationError field="email" prefix="Email" errors={errors} />

          <br />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" />

          <br />
          <label htmlFor="message">
            Message
            <textarea name="message" id="message" rows="12"></textarea>
          </label>
          <ButtonContainer className="button-width">
            <Button disabled={submitting} type="submit">
              Submit
            </Button>
            <ValidationError errors={errors} />

            <Button type="button" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </ButtonContainer>
        </FormInput>
        <Footer />
      </Wrapper>
    </>
  );
};
export default Contact;

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto 0px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 35px;
  font-size: 3rem;
`;

const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-size: 1.6rem;
    font-weight: 200;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  input {
    margin-bottom: 30px;
    height: 45px;
    font-size: 1.6rem;
    font-family: "Work Sans", sans-serif;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(47, 50, 52);
    border-image: initial;
    border-radius: 5px;
    padding: 5px;
    background: rgb(247, 247, 247);
    border: none;
    color: gray;
  }
  input:focus {
    outline: none;
  }
  textarea {
    width: 100%;
    font-size: 1.6rem;
    font-family: "Work Sans", sans-serif;
    background: rgb(247, 247, 247);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(47, 50, 52);
    border-image: initial;
    padding: 5px;
    border-radius: 5px;
    border: none;
    color: gray;
  }
  textarea:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 45px;
  width: 47%;
  border: none;
  margin-top: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    border: none;
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
`;
