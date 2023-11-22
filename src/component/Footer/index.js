import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterContact,
  Footerheading,
  FooterP,
  FormInput,
  FormButton,
  Form,
} from "./FooterElements";
import { Flip } from "react-reveal";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { email, message } = e.target.elements;
    let details = {
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <FooterContainer id='footer'>
      <FooterContact>
        <Flip top cascade>
          <Footerheading>
            " We always deliver more than expected! "
          </Footerheading>
        </Flip>
        <FooterP>
          <Flip right cascade>
            Contact Us!
          </Flip>
        </FooterP>
        <Form onSubmit={handleSubmit}>
          <FormInput placeholder='Email' type='email' id="email" required />
          <FormInput placeholder='Message' textarea id='message' required />
          <FormButton type='submit'>{status}</FormButton>
        </Form>
      </FooterContact>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/projects'>Testimonials</FooterLink>
              <FooterLink to='/'>Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/signin'>Appointments</FooterLink>
              <FooterLink to='/projects'>Events</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Project</FooterLinkTitle>
              <FooterLink to='/projects'>Projects Submited</FooterLink>
              <FooterLink to='/projects'>Samples</FooterLink>
              <FooterLink to='/projects'>Team Collaboration</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Github</FooterLink>
              <FooterLink to='/'>Whatsapp</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
              <FooterLink to='/'>LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              LEV-TECH <i className='fas fa-atom' />
            </SocialLogo>
            <WebsiteRights>
              LEV-TECH &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://github.com/Antony-mumo' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/code_with_tonny/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://wa.me/+254796443218'
                target='_blank'
                aria-label='Whatsapp'
              >
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/Levanio7'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/antony-mumo-javascript-developer-62b657171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhEk3T%2FisSQ2DRvtXM6y%2Bcg%3D%3D'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
