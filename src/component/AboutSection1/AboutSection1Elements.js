import styled from "styled-components";

export const AboutSection1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  padding-bottom: 20px;
`;

export const AboutSection1Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const AboutSection1Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 310px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const AboutSection1Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const AboutSection1H1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const AboutSection1H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const AboutSection1P = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Text = styled.span`
  text-align: center;
  font-size: 1.1rem;
  color: #1c1c1c;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0 10px;
  }
`;
