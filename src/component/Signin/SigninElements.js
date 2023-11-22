import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    min-height: 0px;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  .fa-atom {
    animation-name: spin;
    animation-duration: 15000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 30px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 32px;
  padding-bottom: 80px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 760px) {
    max-width: 500px;
    padding: 80px 32px;
  }
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    max-width: 500px;
    //padding: 80px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const FormH2 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 0 0 2px 2px gray inset;
  }
`;

export const Formbox = styled.textarea`
  resize: none;
  padding: 16px 16px;
  padding-bottom: 40px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 0 0 2px 2px gray inset;
  }
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
