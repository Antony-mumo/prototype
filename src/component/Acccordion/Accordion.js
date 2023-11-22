import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Fade, Flip, Zoom } from "react-reveal";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  padding: 30px 10px 50px 10px;
`;

const Sectiond = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const SectionH1 = styled.h1`
  color: #010606;
  padding: 20px 0;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const SectionP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 0 100px;

  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  color: #010606;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 1.5rem;
    font-size: 2rem;
    text-align: left;

    @media screen and (max-width: 1000px) {
      font-size: 20px;
      padding: 1rem;
    }
  }

  span {
    margin-right: 1.5rem;

    @media screen and (max-width: 760px) {
      margin-right: 1rem;
    }
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  position: relative;
  color: #00ffb9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    font-size: 1.6rem;
    padding: 20px;

    @media screen and (max-width: 1000px) {
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <Sectiond>
        <SectionH1>
          <Flip top cascade>
            Frequently Ask Questions
          </Flip>
        </SectionH1>
        <Fade cascade>
          <SectionP>
            These are some of major questions our clients ask.but if you can't
            find your question here, just Contact us
          </SectionP>
        </Fade>
      </Sectiond>
      <Zoom cascade>
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </Zoom>
    </IconContext.Provider>
  );
};

export default Accordion;
