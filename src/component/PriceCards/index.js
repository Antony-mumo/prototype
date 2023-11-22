// import React, { useState } from "react";
// import { Bounce, Fade, Zoom } from "react-reveal";
// import {
//   Container,
//   Card,
//   Content,
//   PaperPlane,
//   Cash,
//   Cash2,
//   Paper,
//   Title,
//   Cost,
//   ActionButton,
//   FeatureListItem,
//   Wrapper,
//   BackgroundSquare,
//   CheckBox,
//   H2,
//   Text,
// } from "./PriceCardElement";
// import { Popover, Typography, makeStyles } from "@material-ui/core";

// const PriceCards = () => {
//   const [features] = useState([
//     "Premium Quality",
//     "Static site",
//     "Product Sampling",
//   ]);

//   const [features2] = useState([
//     "Premium Interface",
//     "Business Objective",
//     "UX workshop",
//   ]);

//   const [features3] = useState([
//     "Heuristic evaluations ",
//     "Wireframing",
//     "Information Architecture",
//   ]);

//   const [features4] = useState([
//     "Performance Management",
//     "User Journey Mapping",
//     "Intuitive design",
//   ]);

//   const useStyles = makeStyles((theme) => ({
//     typography: {
//       padding: theme.spacing(2),
//     },
//   }));

//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "PriceCards" : undefined;

//   return (
//     <>
//       <H2>
//         <Bounce cascade>Plans built for every one</Bounce>
//         <Fade cascade>
//           <Text>
//             Here are the packages we offer, get to enjoy the premium services
//           </Text>
//         </Fade>
//       </H2>
//       <Container>
//         <Wrapper>
//           <Card>
//             <Fade cascade>
//               <BackgroundSquare />
//               <Content>
//                 <Cash />
//                 <Title>Starter</Title>
//                 <Cost>$79.99</Cost>
//                 {features.map((item) => (
//                   <FeatureListItem>
//                     <CheckBox />
//                     <span>{item}</span>
//                   </FeatureListItem>
//                 ))}
//                 <Zoom cascade>
//                   <ActionButton
//                     aria-describedby={id}
//                     variant='contained'
//                     color='primary'
//                     onClick={handleClick}
//                   >
//                     More Info
//                   </ActionButton>
//                 </Zoom>
//                 <Popover
//                   id={id}
//                   open={open}
//                   anchorEl={anchorEl}
//                   onClose={handleClose}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "center",
//                   }}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "center",
//                   }}
//                 >
//                   <Typography className={classes.typography}>
//                     This applies to landing pages or resumes, hosting not
//                     included
//                   </Typography>
//                 </Popover>
//               </Content>
//             </Fade>
//           </Card>
//           <Card>
//             <Fade cascade>
//               <BackgroundSquare />
//               <Content>
//                 <Cash2 />
//                 <Title>Regular</Title>
//                 <Cost>$119.99</Cost>
//                 {features2.map((item) => (
//                   <FeatureListItem>
//                     <CheckBox />
//                     <span>{item}</span>
//                   </FeatureListItem>
//                 ))}
//                 <Zoom cascade>
//                   <ActionButton
//                     aria-describedby={id}
//                     variant='contained'
//                     color='primary'
//                     onClick={handleClick}
//                   >
//                     More Info
//                   </ActionButton>
//                 </Zoom>
//                 <Popover
//                   id={id}
//                   open={open}
//                   anchorEl={anchorEl}
//                   onClose={handleClose}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "center",
//                   }}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "center",
//                   }}
//                 >
//                   <Typography className={classes.typography}>
//                     This is normal website without many functionalities.
//                   </Typography>
//                 </Popover>
//               </Content>
//             </Fade>
//           </Card>
//           <Card>
//             <Fade cascade>
//               <BackgroundSquare />
//               <Content>
//                 <Paper />
//                 <Title>Plus</Title>
//                 <Cost>$179.99</Cost>
//                 {features3.map((item) => (
//                   <FeatureListItem>
//                     <CheckBox />
//                     <span>{item}</span>
//                   </FeatureListItem>
//                 ))}
//                 <Zoom cascade>
//                   <ActionButton
//                     aria-describedby={id}
//                     variant='contained'
//                     color='primary'
//                     onClick={handleClick}
//                   >
//                     More Info
//                   </ActionButton>
//                 </Zoom>
//                 <Popover
//                   id={id}
//                   open={open}
//                   anchorEl={anchorEl}
//                   onClose={handleClose}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "center",
//                   }}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "center",
//                   }}
//                 >
//                   <Typography className={classes.typography}>
//                     More functionalities and upto 8 pages done
//                   </Typography>
//                 </Popover>
//               </Content>
//             </Fade>
//           </Card>
//           <Card>
//             <Fade cascade>
//               <BackgroundSquare />
//               <Content>
//                 <PaperPlane />
//                 <Title>Enterprise</Title>
//                 <Cost>$279.99</Cost>
//                 {features4.map((item) => (
//                   <FeatureListItem>
//                     <CheckBox />
//                     <span>{item}</span>
//                   </FeatureListItem>
//                 ))}
//                 <Zoom cascade>
//                   <ActionButton
//                     aria-describedby={id}
//                     variant='contained'
//                     color='primary'
//                     onClick={handleClick}
//                   >
//                     More Info
//                   </ActionButton>
//                 </Zoom>
//                 <Popover
//                   id={id}
//                   open={open}
//                   anchorEl={anchorEl}
//                   onClose={handleClose}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "center",
//                   }}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "center",
//                   }}
//                 >
//                   <Typography className={classes.typography}>
//                     For corporate website,sell services and more on the platform
//                   </Typography>
//                 </Popover>
//               </Content>
//             </Fade>
//           </Card>
//         </Wrapper>
//       </Container>
//     </>
//   );
// };

// export default PriceCards;
