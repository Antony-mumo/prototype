/* eslint-disable jsx-a11y/alt-text */
import {useEffect, useRef, useState} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import logoClose from './assets/ham-c.svg';
import hamLogo from './assets/ham.svg';
import Logo from './assets/logo.png';
import './styles.scss';

import {MdxContent} from '../Mdx';

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    // width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    justify-content: space-between;
    .nav-content {
      flex-direction: row;
      width: 100%;
      height: 55%;
      background-color: #01bf71;
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

const NavLinkWrapper = styled.div``;

const ButtonWrapper = styled.div`
  gap: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    background-color: #fff;
  }
`;

const Button = styled.li`
  width: 10rem;
  color: #fff;
  padding: 5px 15px;
  text-align: center;
  background-color: #010606;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <NavLinkContainer className="nav-content" ref={navigation}>
            <NavLinkWrapper>
              <NavLink>
                <Link to={`#home`}>
                  <img
                    src={Logo}
                    alt=""
                    style={{
                      width: '100px',
                      height: '60px',
                      marginRight: '20px'
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
                <Link to={`#team`}>
                  <span className="links">team </span>{' '}
                </Link>
              </NavLink>
              <NavLink>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{' '}
                </Link>
              </NavLink>
            </NavLinkWrapper>
            <ButtonWrapper>
              <Link to={`#signup`}>
                <Button className="links">SignUp </Button>{' '}
              </Link>
              <Link to={`#signin`}>
                <Button className="links">SignIn </Button>{' '}
              </Link>
            </ButtonWrapper>
            <li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </li>
          </NavLinkContainer>
          <div className="ease" />
        </Wrapper>

        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

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

export default Navbar;
