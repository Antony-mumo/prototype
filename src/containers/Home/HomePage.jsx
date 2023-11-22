import { UseMedia } from 'hooks/useMedia';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  FOOTER,
  JudgesInfo,
  Prizeinfo,
  TOP_SECTION,
  TeamInfo,
  frequentlyAskedQuestions,
  sponsorLogos
} from '../../Module/General';
import { Logo, LogoSectionAbout } from '../../components/About/index.jsx';
import { Accordion } from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import { Myinfo } from '../../components/Landing/index.jsx';
import { FirstPrize, PrizeHeading } from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorUS,
  SponsorsHead
} from '../../components/Sponsors/sponsors.jsx';
import { JoinTeam, Member } from '../../components/Team';
import MyCalender from '../calender';
import './about.css';
import pattern from './assets/pattern4.png';
import {createBox} from "framer-motion";

const SponsorGroup = (props, index) => {
  let bckImage = "https://static.wixstatic.com/media/11062b_8823416ca27f48d7ae591192c34af669f000.jpg" +
    "/v1/fill/w_1512,h_820,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/" +
    "11062b_8823416ca27f48d7ae591192c34af669f000.jpg"
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
};
// Prize group
///create box with 50px height and width
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

//make image carousel for the background



const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    
    <div className="Whole_div" >
      <div className="color_sectiom" id="home">
        <Container fluid style={{backgroundImage: `url(${  "https://static.wixstatic.com/media/11062b_8823416ca27f48d7ae591192c34af669f000.jpg" +
          "/v1/fill/w_1512,h_820,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/" +
          "11062b_8823416ca27f48d7ae591192c34af669f000.jpg"})`}}>
          <Row className="Row info" >
              <Myinfo />
          </Row>
          <Row>

          </Row>
          <Row>
            <div className="box" style={{width: 50, height: 50}}>
              box
            </div>
          </Row>
          {<Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>}
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <Row>
          <div className="Myfaqs" id="faq">
            {frequentlyAskedQuestions.map(FrequentlyAsked)}
            {/* ********Frequently asked Questions ending here ***** */}
          </div>
        </Row>
        

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes" style={{backgroundImage: `url(${ pattern})`}}>
          <PrizeHeading type="Prizes"/>
          {Prizeinfo.map(PrizeGroup)}
        </Row>

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}


        {/* ********Judges here ***** */}

        {/* <h1 id="team">Judges</h1>
        {JudgesInfo.map(TeamMembers)} */}
        {/* ********Team ending here ***** */}
        <Footer />
      </Container>

    </div>
    
  );
}
