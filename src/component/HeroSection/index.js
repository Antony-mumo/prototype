import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from "../../videos/video (4).mp4";
import { Bounce, Flip } from "react-reveal";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtnWrapper1,
  Laptop,
  Launch,
  ArrowForward,
  ArrowRight,
  Link,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const onHover2 = () => {
    setHover2(!hover2);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <Bounce cascade delay='10'>
            WELCOME, TO LEV-TECH
          </Bounce>
        </HeroH1>
        <Flip top cascade>
          <HeroP>
            We aim to provide outstanding services to elevate your business
          </HeroP>
        </Flip>
        <Flip delay='100' bottom cascade>
          <HeroBtnWrapper>
            <Button
              to='services'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
          <HeroBtnWrapper1>
            <Button
              onMouseEnter={onHover2}
              onMouseLeave={onHover2}
              primary='true'
              dark='true'
            >
              <Link to='/projects'> Check Our Projects </Link>
              {hover2 ? <Launch /> : <Laptop />}
            </Button>
          </HeroBtnWrapper1>
        </Flip>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
