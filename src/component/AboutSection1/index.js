import React from "react";
import Icon1 from "../../images/improvements.svg";
import Icon2 from "../../images/maintenance.svg";
import Icon3 from "../../images/gift.svg";
import Icon4 from "../../images/prompt2.svg";
import { Flip, Fade } from "react-reveal";
import {
  AboutSection1Container,
  AboutSection1H1,
  AboutSection1Wrapper,
  AboutSection1Card,
  AboutSection1Icon,
  AboutSection1H2,
  AboutSection1P,
  Text,
} from "./AboutSection1Elements.js";

const AboutSection1 = () => {
  return (
    <>
      <AboutSection1Container>
        <AboutSection1H1>
          <Flip top cascade>
            Benefits of working with Lev-Tech
          </Flip>
        </AboutSection1H1>
        <Text>
          <Fade cascade>
            These are some of the benefits you will get once you become our
            client
          </Fade>
        </Text>
        <AboutSection1Wrapper>
          <AboutSection1Card>
            <AboutSection1Icon src={Icon1} />
            <AboutSection1H2>
              <Flip right cascade>
                Improvements
              </Flip>
            </AboutSection1H2>
            <Fade delay='100' cascade>
              <AboutSection1P>
                Frequent updates for our products and services.
              </AboutSection1P>
            </Fade>
          </AboutSection1Card>
          <AboutSection1Card>
            <AboutSection1Icon src={Icon2} />
            <AboutSection1H2>
              <Flip right cascade>
                Free maintenance
              </Flip>
            </AboutSection1H2>
            <Fade delay='100' cascade>
              <AboutSection1P>
                Maintenance services offered for the 2 months of deployment.
              </AboutSection1P>
            </Fade>
          </AboutSection1Card>
          <AboutSection1Card>
            <AboutSection1Icon src={Icon3} />
            <AboutSection1H2>
              <Flip right cascade>
                Free Gift on referal
              </Flip>
            </AboutSection1H2>
            <Fade delay='100' cascade>
              <AboutSection1P>
                Once you bring a client, you get a gift to celebrate this growth
                together,
              </AboutSection1P>
            </Fade>
          </AboutSection1Card>
          <AboutSection1Card>
            <AboutSection1Icon src={Icon4} />
            <AboutSection1H2>
              <Flip right cascade>
                Prompt Release
              </Flip>
            </AboutSection1H2>
            <Fade delay='100' cascade>
              <AboutSection1P>
                Once you sign the contract, the software will be cleanly done
                and delivered to you within the given time period.
              </AboutSection1P>
            </Fade>
          </AboutSection1Card>
        </AboutSection1Wrapper>
      </AboutSection1Container>
    </>
  );
};

export default AboutSection1;
