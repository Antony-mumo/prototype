import React from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import { Button } from "../ButtonElements";
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
  BtnWrap,
  ImgWrap,
  Img,
} from "./MoreInfoElements.js";

const MoreInfo = ({
  lightBg,
  id,
  imgStart,
  img,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  <Fade top cascade>
                    {topLine}
                  </Fade>
                </TopLine>
                <Fade top cascade>
                  <Heading lightText={lightText}>{headline}</Heading>
                </Fade>
                <Fade cascade>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </Fade>
                <BtnWrap>
                  <Bounce cascade>
                    <Button
                      to='Section2'
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
                  </Bounce>
                </BtnWrap>
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

export default MoreInfo;
