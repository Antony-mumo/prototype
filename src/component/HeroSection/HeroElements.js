import styled from "styled-components";
import { FaLaptop } from "react-icons/fa";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { MdLaunch } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  filter: blur(2px);
  position: absolute;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 760px) {
    font-size: 40px;
    font-weight: 600;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    font-weight: 600;
  }
`;

export const HeroP = styled.div`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 32px;

  @media screen and (max-width: 760px) {
    font-size: 24px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroBtnWrapper1 = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(LinkR)`
  text-decoration: none;
  color: #000;
`;

export const Laptop = styled(FaLaptop)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Launch = styled(MdLaunch)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
