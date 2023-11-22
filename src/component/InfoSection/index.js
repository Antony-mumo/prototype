import React from "react";
import { Button } from "../ButtonElements";
import { Fade, Bounce, Zoom } from "react-reveal";
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
} from "./InfoElements";

const InfoSection = ({
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
                <Heading lightText={lightText}>
                  <Fade top cascade>
                    {headline}
                  </Fade>
                </Heading>
                <Fade cascade><Subtitle darkText={darkText}>
                {description}
                </Subtitle></Fade>
                <BtnWrap>
                    <Bounce cascade>
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
                    </Bounce>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Zoom top cascade>
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

export default InfoSection;
