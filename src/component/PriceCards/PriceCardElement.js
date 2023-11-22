// import styled from "styled-components";
// import { GiCash, GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
// import { RiMoneyDollarCircleLine } from "react-icons/ri";
// import { BsCheckBox } from "react-icons/bs";

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px 0;
//   background-color: #1c1c1c;
// `;

// export const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   align-items: center;
//   grid-gap: 16px;
//   padding: 0px 50px;

//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr;
//     padding: 0;
//   }

//   @media screen and (max-width: 760px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const H2 = styled.h2`
//   font-size: 2.5rem;
//   color: #fff;
//   text-align: center;
//   padding-top: 20px;
//   background: #1c1c1c;

//   @media screen and (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// export const Text = styled.p`
//   font-size: 1rem;
//   text-align: center;
//   padding: 0 100px;
//   padding-top: 10px;
//   font-weight: normal;

//   @media screen and (max-width: 480px) {
//     padding: 0 10px;
//     padding-top: 10px;
//   }
// `;

// export const Card = styled.div`
//   position: relative;
//   overflow: hidden;
//   padding: 3rem 0.2rem;
//   align-items: center;
//   width: 300px;
//   border-radius: 0.5rem;
//   color: #fff;
//   margin: 0 auto;
//   background: linear-gradient(130deg, #ded664 0%, #02bf71 100%),
//     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//   box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
//     0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);

//   @media screen and (max-width: 1024px) {
//     width: 230px;
//   }

//   @media screen and (max-width: 960px) {
//     width: 300px;
//   }

//   @media screen and (max-width: 480px) {
//     width: 380px;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     z-index: 0;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     background: linear-gradient(130deg, #02bf71 0%, #ded664 100%),
//       linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//     transition: opacity 0.75s;
//   }
//   &:hover::after {
//     transform: scale(1.02);
//     opacity: 1;
//   }
// `;

// export const Content = styled.div`
//   position: relative;
//   z-index: 3;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const CheckBox = styled(BsCheckBox)`
//   font-size: 18px;
//   font-weight: 700;
//   margin-right: 0.5rem;
// `;

// export const PaperPlane = styled(GiCash)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100px;
//   height: 100px;
//   flex: 0 0 auto;
//   margin-bottom: 2rem;
//   border-radius: 50%;
//   font-size: 40px;
//   color: white;
//   background: linear-gradient(130deg, #c4d986 0%, #010606 100%),
//     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//   box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
// `;

// export const Cash = styled(RiMoneyDollarCircleLine)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100px;
//   height: 100px;
//   flex: 0 0 auto;
//   margin-bottom: 2rem;
//   border-radius: 50%;
//   font-size: 40px;
//   color: white;
//   background: linear-gradient(130deg, #c4d986 0%, #010606 100%),
//     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//   box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
// `;
// export const Cash2 = styled(GiTakeMyMoney)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100px;
//   height: 100px;
//   flex: 0 0 auto;
//   margin-bottom: 2rem;
//   border-radius: 50%;
//   font-size: 40px;
//   color: white;
//   background: linear-gradient(130deg, #c4d986 0%, #010606 100%),
//     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//   box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
// `;

// export const Paper = styled(GiMoneyStack)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100px;
//   height: 100px;
//   flex: 0 0 auto;
//   margin-bottom: 2rem;
//   border-radius: 50%;
//   font-size: 40px;
//   color: white;
//   background: linear-gradient(130deg, #c4d986 0%, #010606 100%),
//     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//   box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
// `;

// export const Title = styled.div`
//   font-size: 1.25rem;
//   font-weight: 700;
// `;

// export const Cost = styled.div`
//   font-size: 3rem;
// `;

// export const FeatureListItem = styled.div`
//   display: flex;
//   font-weight: normal;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 0.595rem;
// `;

// export const ActionButton = styled.button`
//   flex: 0 0 auto;
//   height: 40px;
//   padding: 0 2rem;
//   margin-top: 1rem;
//   font-weight: 600;
//   border: 0;
//   border-radius: 20px;
//   color: rgba(0, 0, 0, 0.85);
//   background: rgba(255, 255, 255, 0.85);
//   box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
//   transition: background 0.25s;
//   cursor: pointer;
//   outline: none;

//   &:hover {
//     transition: ease-in-out 0.1s;
//     background: #010606;
//     color: #fff;
//   }
// `;

// export const BackgroundSquare = styled.div`
//   position: absolute;
//   z-index: 2;
//   top: 52%;
//   left: 0%;
//   width: 200%;
//   height: 100%;
//   background: rgba(255, 255, 255, 0.1);
//   transform: rotate(-3deg);
// `;
