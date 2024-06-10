import React from "react";
import { Container, Box, Typography, Paper, Avatar } from "@mui/material";
import CustomTypography from "../components/CustomTypography";
import profileImage from "../assets/images/home-img.jpg";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function About() {
   return (
      <Container maxWidth="md" sx={{ animation: `${fadeIn} .8s ease-in` }}>
         <Box py={5}>
            <Box
               display="flex"
               alignItems="center"
               mb={3}
               justifyContent="center"
            >
               <Avatar
                  alt="Ilhan Klisura"
                  src={profileImage}
                  sx={{ width: 150, height: 150, mr: 3 }}
               />
               <CustomTypography
                  variant="h3"
                  sx={{ fontWeight: "bold", mb: -3 }}
               >
                  About Me
               </CustomTypography>
            </Box>
            <Paper elevation={3} sx={{ p: 3 }}>
               <Typography variant="body1" paragraph>
                  Hello! I am Ilhan Klisura, a dedicated and passionate software
                  developer based in Sarajevo. I specialize in creating stunning
                  and responsive web applications using modern technologies.
                  With a strong foundation in computer science and hands-on
                  experience in various frontend and backend frameworks, I aim
                  to deliver high-quality solutions that meet user needs and
                  exceed expectations.
               </Typography>
               <Typography variant="body1" paragraph>
                  My journey in web development started several years ago, and
                  since then, I have been committed to continuous learning and
                  improvement. I am particularly skilled in React, Vue, Material
                  UI and Tailwind CSS, which allows me to build dynamic and
                  visually appealing user interfaces. I enjoy collaborating with
                  other developers and designers to bring creative ideas to
                  life.
               </Typography>
               <Typography variant="body1" paragraph>
                  Outside of coding, I love exploring new technologies, reading
                  tech blogs, and contributing to open-source projects. I am
                  also an active member of the local tech community, attending
                  meetups and conferences to stay up-to-date with the latest
                  trends and best practices in the industry.
               </Typography>
               <Typography variant="body1">
                  Check out my GitHub profile for more details on my work:{" "}
                  <a
                     href="https://github.com/ilhanklisura"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Ilhan Klisura
                  </a>
               </Typography>
            </Paper>
         </Box>
      </Container>
   );
}

export default About;
