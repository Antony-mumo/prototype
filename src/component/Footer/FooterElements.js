import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #f9f9f9;
`;

export const Footerheading = styled.h1`
  margin-top: 32px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
`;

export const FooterP = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
`;

export const Form = styled.form`
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    box-shadow: 0 0 2px 2px gray inset;
  }
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    border: 1px solid #fff;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  .fa-atom {
    margin-left: 0.5rem;
    font-size: 1.8rem;
    animation-name: spin;
    animation-duration: 15000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
