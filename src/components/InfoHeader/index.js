import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from "styled-components";
import {image} from '../../containers/navbar/assets/logo.png'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 120px 24px 0 24px;
  justify-content: center;
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
  font-size: 46px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 1000px) {
    font-size: 37px;
  }

  @media screen and (max-width: 760px) {
    font-size: 34px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding: 0 1px;
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
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  justify-content: center;
`;


const homeObjOne = {
  id: "services",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Explore Our services",
  headline: "We offer relentless services based on your needs",
  description:
    "Our main goal is to satisfy our current and new clients to smile by offering the best services and supporting our client dreams. Lev-Tech has Competent team to handle your requests, reach us today",
  buttonLabel: "Learn More",
  imgStart: false,
  img: image,
  alt: "services",
  dark: true,
  primary: true,
  darkText: false,
};


const InfoHeader = () => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                    {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                    {headline}
                </Heading>
                <Subtitle darkText={darkText}>
                {description}
                </Subtitle>
                <BtnWrap>
                      <Button
                        to='Section1'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                  <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoHeader

const styles = StyleSheet.create({})