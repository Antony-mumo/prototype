import React, { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import logoClose from './assets/ham-c.svg';
import hamLogo from './assets/ham.svg';
import Logo from './assets/logo.png';
import './styles.scss';
import { MdxContent } from '../Mdx';

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    justify-content: space-between;
    .nav-content {
      flex-direction: row;
      width: 100%;
      height: 55%;
      background-color: #121930;
    }
  }
`;

const NavLinkContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const NavLink = styled.li`
  padding: 0 1rem;
`;

const NavLinkWrapper = styled.div`
@media (max-width: 1000px) {
  display: ${props => (props.toggle ? 'none' : 'static')};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: ${props => (props.toggle ? '-1000px' : '0px')};
  transition: top 1s;
  justify-content: space-evenly;
  .nav-content {
    flex-direction: row;
    width: 100%;
    height: 55%;
    background-color: #EC0D0B;
  }
}
`;

const ButtonWrapper = styled.div`
gap: 1rem;

@media (max-width: 1000px) {
  flex-direction: column;
  background-color: #fff;
}
`;

const Button = styled.div`
width: 10rem;
color: #010606;
padding: 5px 15px;
text-align: center;
background-color: #ffe286;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;
transition: background-color 0.3s ease;
&:hover {
  background-color: #fff;
}
`;

const Navigation = ({ isOffset }) => {
  const [toggle, setToggle] = useState(true);
  const [isScrolled, setIsScrolled] = useState(isOffset);

  const navigationRef = useRef();

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= NAVIGATION_OFFSET);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOutsideClick = (event) => {
    if (!navigationRef.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSignIn = () => {
    // Implement sign-in logic here
    // For example: redirect to a sign-in page or trigger a sign-in modal
    // console.log('Sign in clicked');
  };

  return (
    <Router>
      <nav className={`nav_bar ${isScrolled && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <NavLinkContainer className="nav-content" ref={navigationRef}>
            <NavLinkWrapper>
            <NavLink>
                <Link to={`#home`}>
                  <img
                    src={Logo}
                    alt=""
                    style={{
                      objectFit: 'contain',
                      width: '20%',
                    }}
                  />
                </Link>
              </NavLink>
              <NavLink>
                <Link to={`#home`}>
                  <span className="links">Home </span>{' '}
                </Link>
              </NavLink>
              <NavLink>
                <Link to={`#prizes`}>
                  <span className="links">prizes </span>{' '}
                </Link>
              </NavLink>
              <NavLink>
                <Link to={`#sponsors`}>
                  <span className="links">sponsors </span>{' '}
                </Link>
              </NavLink>
             
              <NavLink>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{' '}
                </Link>
              </NavLink>
            </NavLinkWrapper>
           
            {/* Close button */}
            <li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
                alt="Close"
              />
            </li>
          </NavLinkContainer>
          <div className="ease" />
        </Wrapper>

        {/* Ham logo for mobile */}
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
          alt="Open"
        />
      </nav>

      {/* Switch and Routes */}
      <Switch>
        <Route path="/blog" exact={true}>
          <MdxContent />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

const Navbar = () => {
  const [isOffset, setIsOffset] = useState(false);

  const listenScrollEvent = () => {
    setIsOffset(window.scrollY >= NAVIGATION_OFFSET);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return <Navigation isOffset={isOffset} />;
};

export default Navbar;
