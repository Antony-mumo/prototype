import React from "react";
import Icon1 from "../../images/effective.svg";
import Icon2 from "../../images/responsive.svg";
import Icon3 from "../../images/availability.svg";
import Icon4 from "../../images/support.svg";
import { Slide, Fade, Zoom } from "react-reveal";
import {
  Section1Container,
  Section1H1,
  Section1Wrapper,
  Section1Card,
  Section1Icon,
  Section1H2,
  Section1P,
} from "./Section1Elements";

const Section1 = () => {
  return (
    <>
      <Section1Container id='Section1'>
        <Section1H1>
          <Slide bottom cascade>
            Get to Enjoy Our Services
          </Slide>
        </Section1H1>
        <Section1Wrapper>
          <Zoom bottom cascade>
            <Section1Card>
              <Section1Icon src={Icon1} />
              <Fade cascade>
                <Section1H2>Designed to be efficient</Section1H2>
              </Fade>
              <Fade cascade>
                <Section1P>
                  We will build a product which will be tested and perfectly
                  fitted for your business needs.
                </Section1P>
              </Fade>
            </Section1Card>
            <Section1Card>
              <Section1Icon src={Icon2} />
              <Fade cascade>
                <Section1H2>Fully Responsive</Section1H2>
              </Fade>
              <Fade cascade>
                <Section1P>
                  The products will be set up well for responsive adaptation on
                  any platform.
                </Section1P>
              </Fade>
            </Section1Card>
            <Section1Card>
              <Section1Icon src={Icon3} />
              <Fade cascade>
                <Section1H2>Readily Available</Section1H2>
              </Fade>
              <Fade cascade>
                <Section1P>
                  We are ready for your inquiries anytime of the day to help you
                  approach your needs.
                </Section1P>
              </Fade>
            </Section1Card>
            <Section1Card>
              <Section1Icon src={Icon4} />
              <Fade cascade>
                <Section1H2>Customer Support</Section1H2>
              </Fade>
              <Fade cascade>
                <Section1P>
                  Incase of any issues with our services reach us to handle your
                  problem with expertise.
                </Section1P>
              </Fade>
            </Section1Card>
          </Zoom>
        </Section1Wrapper>
      </Section1Container>
    </>
  );
};

export default Section1;
