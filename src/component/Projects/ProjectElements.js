import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkA } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding-top: 30px;

  @media screen and (max-width: 760px) {
    padding-top: 30px;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
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
    margin-left: 32px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 24px;
  justify-content: center;

  @media screen and (max-width: 760px) {
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 14px;
    justify-content: center;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: inline-flex;
  margin-right: 30px;
  /* padding-bottom: 30px; */
  /* margin-bottom: 30px; */
  justify-content: flex-start;

  @media screen and (max-width: 760px) {
    margin-right: 10px;
  }
`;

export const LinkR = styled(LinkA)`
  text-decoration: none;
  color: #000;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin-top: 80px; //check on this before publication
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin-top: -800px;
  }
`;
