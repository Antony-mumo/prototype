import styled from "styled-components";

export const Section2Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

export const Section2Wrapper = styled.div`
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
    padding: 0 20px 20px 20px;
  }
`;

export const Section2Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Section2Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const Section2H1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Section2H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Section2P = styled.p`
  font-size: 1rem;
  text-align: center;
`;
