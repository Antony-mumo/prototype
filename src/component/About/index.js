import React from "react";
import { Button } from "../ButtonElements";
import { Fade, Bounce, Flip } from "react-reveal";
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
  Link,
} from "./infoElements.js";

const AboutSection = ({
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
        <Fade cascade>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>
                    <Flip top cascade>
                      {topLine}
                    </Flip>
                  </TopLine>
                  <Fade cascade>
                    <Heading lightText={lightText}>{headline}</Heading>{" "}
                  </Fade>
                  <Fade delay='100' cascade>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                  </Fade>
                  <BtnWrap>
                    <Bounce cascade>
                      <Button
                        to='/signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        <Link to='/signup'>{buttonLabel}</Link>
                      </Button>
                    </Bounce>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Fade delay='100' cascade>
                    <Img src={img} alt={alt} />
                  </Fade>
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </Fade>
      </InfoContainer>
    </>
  );
};

export default AboutSection;
