import styled from "styled-components";

export const Section1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const Section1Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 20px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 20px 10px;
  }
`;

export const Section1Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Section1Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const Section1H1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Section1H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Section1P = styled.p`
  font-size: 1rem;
  text-align: center;
`;
