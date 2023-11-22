import React from "react";
import { Fade, Flip, Zoom } from "react-reveal";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./LevanioElements.js";

const Levanio = ({
  lightBg,
  id,
  imgStart,
  img,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  <Flip top cascade>
                    {topLine}
                  </Flip>
                </TopLine>
                <Fade delay='100' cascade>
                  <Heading lightText={lightText}>{headline}</Heading>
                </Fade>
                <Fade delay='150' cascade>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </Fade>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Zoom cascade>
                  <Img src={img} alt={alt} />
                </Zoom>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Levanio;
