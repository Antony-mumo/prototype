import React from "react";
import Icon1 from "../../images/engagements.svg";
import Icon2 from "../../images/undraw_google_analytics_a57d.svg";
import Icon3 from "../../images/undraw_Confirmation_re_b6q5.svg";
import Icon4 from "../../images/team2.svg";
import { Fade, Flip, Zoom } from "react-reveal";
import {
  Section2Container,
  Section2H1,
  Section2Wrapper,
  Section2Card,
  Section2Icon,
  Section2H2,
  Section2P,
} from "./Section2Elements";

const Section2 = () => {
  return (
    <>
      <Section2Container id='Section2'>
        <Section2H1>
          <Flip right cascade>
            Discover Our Techniques
          </Flip>
        </Section2H1>
        <Section2Wrapper>
          <Zoom top cascade>
            <Section2Card>
              <Section2Icon src={Icon1} />
              <Fade bottom cascade>
                <Section2H2>Full-Time Engaements</Section2H2>
              </Fade>
              <Flip bottom cascade>
                <Section2P>
                  We will commute much effort to your product and service, to
                  ensure they are well tested and perfectly done according to
                  your expectaions.
                </Section2P>
              </Flip>
            </Section2Card>
            <Section2Card>
              <Section2Icon src={Icon2} />
              <Fade bottom cascade>
                <Section2H2>Returns Guarantee</Section2H2>
              </Fade>
              <Flip bottom cascade>
                <Section2P>
                  Our products will be provided with full time support as per
                  agreements, we wish to assure you that this will bring out the
                  best outcome in the field
                </Section2P>
              </Flip>
            </Section2Card>
            <Section2Card>
              <Section2Icon src={Icon3} />
              <Fade bottom cascade>
                <Section2H2>Thoughtful Advices</Section2H2>
              </Fade>
              <Flip bottom cascade>
                <Section2P>
                  Your ideas will have first hand to provide advice on the best
                  way to make your idea work well, get you the best profits and
                  most of all make you cash returns.
                </Section2P>
              </Flip>
            </Section2Card>
            <Section2Card>
              <Section2Icon src={Icon4} />
              <Fade bottom cascade>
                <Section2H2>Team Collaboration</Section2H2>
              </Fade>
              <Flip bottom cascade>
                <Section2P>
                  The best thing in a community development is to have hand in
                  hand communication towards a common goal, In order to solve a
                  business problem.
                </Section2P>
              </Flip>
            </Section2Card>
          </Zoom>
        </Section2Wrapper>
      </Section2Container>
    </>
  );
};

export default Section2;
