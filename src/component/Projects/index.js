import React from "react";
import { Fade, Flip } from "react-reveal";
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
  Icon,
  LinkR,
} from "./ProjectElements.js";

const Projects = ({
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
  buttonLabe2,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Icon to='/'>
          LEV-TECH <i className='fas fa-atom' />
        </Icon>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Flip top cascade>
                  <TopLine>{topLine}</TopLine>
                </Flip>
                <Fade delay='100' cascade>
                  <Heading lightText={lightText}>{headline}</Heading>
                </Fade>
                <Fade delay='150' cascade>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </Fade>
                <BtnWrap>
                  <Flip bottom delay='100' cascade>
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      <LinkR to='/signup'>{buttonLabel}</LinkR>
                    </Button>
                  </Flip>
                </BtnWrap>
                <BtnWrap>
                  <Flip bottom delay='100' cascade>
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      <LinkR to='/'>{buttonLabe2}</LinkR>
                    </Button>
                  </Flip>
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
  );
};

export default Projects;
