import React from "react";
import Icon1 from "../../images/JavaScript-Essentials-Course.jpg";
import Icon2 from "../../images/reactjs1.png";
import Icon3 from "../../images/html&css.png";
import Icon4 from "../../images/git1.png";
import Icon5 from "../../images/mern.jpg_";
import Icon6 from "../../images/debugging.jpg";
import Icon7 from "../../images/Backend.jpg";
import Icon8 from "../../images/cloud_.jpeg";
import { Fade, Flip } from "react-reveal";
import {
  SkillsContainer,
  SkillsH1,
  SkillsWrapper,
  SkillsCard,
  SkillsIcon,
  SkillsH2,
  SkillsP,
} from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsContainer id='skills'>
        <SkillsH1>
          <Flip top cascade>
            My Programming Skills
          </Flip>
        </SkillsH1>
        <SkillsWrapper>
          <SkillsCard>
            <SkillsIcon src={Icon1} />
            <Fade top cascade>
              <SkillsH2>JavaScript</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                Where HTML nad CSS determine the content & presentation of a
                page, JS determines the function. Also implementing web
                interactive features.
              </SkillsP>
            </Fade>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={Icon2} />
            <Fade top cascade>
              <SkillsH2>ReactJS</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                I have strong proficiency in Javascript,including DOM
                manipultion and Javascript object model. Understanding its core
                principles with experience with data structure libraries and
                much knowledge with its Front-end development tools.
              </SkillsP>
            </Fade>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={Icon3} />
            <Fade top cascade>
              <SkillsH2>HTML&CSS</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                HTML is the most basic building block needed for developing
                websites and CSS is the language used to style the document you
                create with HTML.
              </SkillsP>
            </Fade>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={Icon4} />
            <Fade top cascade>
              <SkillsH2>Version Control/Git</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                Version control software enables me track and control changes in
                the source code during continous development. Therefore making
                Projects management work easy to enhance Productivity.
              </SkillsP>
            </Fade>
          </SkillsCard>
        </SkillsWrapper>

        <SkillsWrapper>
          <SkillsCard>
            <SkillsIcon src={Icon5} />
            <Fade top cascade>
              <SkillsH2>M.E.R.N</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                MERN enables me to navigate through full-stack development. With
                much experience in Node.js, Express.Js and MongoDB. Thereby
                understanding the architecture about Front-end and Back-end
                development.
              </SkillsP>
            </Fade>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={Icon6} />
            <Fade top cascade>
              <SkillsH2>Testing & Debugging</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                Bugs are a reality of the development process, so in order to
                keep things moving swiftly, one is needed to test code for bugs
                along the way.
              </SkillsP>
            </Fade>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={Icon7} />
            <Fade top cascade>
              <SkillsH2>Backend Development</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                I believe in backend the import skills is understand server-side
                programming language for better implementaion in the right way
                to secure data, Working with APIs, Databases and security.
              </SkillsP>
            </Fade>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={Icon8} />
            <Fade top cascade>
              <SkillsH2>Cloud Computing</SkillsH2>
            </Fade>
            <Fade delay='100' cascade>
              <SkillsP>
                Normaly, i prefer Firebase and AWS for its easy intergration.
                Which help in faster implementaion, access to applications and
                content, rapid scalability to meet demand and enhanced security
                and protection of information assets.
              </SkillsP>
            </Fade>
          </SkillsCard>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
