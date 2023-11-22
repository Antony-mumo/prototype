import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';
import {NavLink, Link} from "react-router-dom"

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2 className="LangingTitle">{TOP_SECTION.TITLE}</h2>
      { <MytypedComponent /> }
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">

      <About />
      <p className='Myinfo'> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="buttom-group">
        <NavLink to = "/login">
          <Btn class="sponsor_btn" type="Become Tourism Ambassador" overlay="Sign Up!" />
        </NavLink>

        <NavLink to = "/login">
          {' '}
          <Btn
            class="register"
            type="Apply for national competiton 2024 "
            overlay="Lets go"
          />
        </NavLink>
      </div>
    </div>

  );
};

export {Btn, Myinfo};
