// src/pages/Portfolio.js
import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import CustomTypography from "../components/CustomTypography";
import CustomCard from "../components/CustomCard";
import githubPicture from "../assets/images/github.png";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const experience = [
   {
      id: 1,
      company: "Orbicode d.o.o.",
      position: "Junior Software Developer",
      duration: "Oct 2023 - Ongoing",
      description:
         "Develop and maintain responsive and user-friendly web applications, ensuring optimal performance and compatibility across various browsers and devices.",
   },
   {
      id: 2,
      company: "BH Telecom d.d.",
      position: "Software Engineer Intern",
      duration: "Aug 2023 - Oct 2023",
      description:
         "As an intern, I contributed to various projects using React.js, Java, Spring Boot, and MySQL, collaborated with team, and enhanced my skills.",
   },
   {
      id: 3,
      company: "IPI d.o.o.",
      position: "Web Developer",
      duration: "Contract (3 Months)",
      description:
         "Developed a custom WordPress website and implemented responsive web design techniques to ensure seamless user experiences across devices.",
   },
];

function Portfolio() {
   const [repos, setRepos] = useState([]);

   useEffect(() => {
      // Fetch repositories from GitHub
      fetch("https://api.github.com/users/ilhanklisura/repos")
         .then((response) => response.json())
         .then((data) => setRepos(data));
   }, []);

   return (
      <Container maxWidth="lg" sx={{ animation: `${fadeIn} .8s ease-in` }}>
         <Box py={5} textAlign="center">
            <CustomTypography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
               My Portfolio
            </CustomTypography>
            <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
               Here are some of the projects I have worked on. Explore my GitHub
               repositories to see my work in action.
            </Typography>
         </Box>

         <Grid container spacing={4} justifyContent="center">
            {repos.map((repo) => (
               <Grid item xs={12} sm={6} md={4} key={repo.id}>
                  <CustomCard
                     title={repo.name}
                     description={
                        repo.description || "No description available"
                     }
                     image={githubPicture}
                  />
               </Grid>
            ))}
         </Grid>
         <Box py={5} textAlign="center">
            <CustomTypography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
               My Resume
            </CustomTypography>
            <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
               Explore my professional journey and discover how my skills,
               experience, and accomplishments can contribute to the success of
               your projects.
            </Typography>
         </Box>

         {experience.map((exp) => (
            <Paper
               key={exp.id}
               elevation={3}
               sx={{
                  backgroundColor: "#FFFFFF",
                  p: 3,
                  mb: 3,
                  borderRadius: 2,
                  animation: `${fadeIn} 2s ease-in`,
               }}
            >
               <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
               >
                  <Box>
                     <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {exp.company}
                     </Typography>
                     <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                     >
                        {exp.position}
                     </Typography>
                     <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 2 }}
                     >
                        {exp.duration}
                     </Typography>
                     <Typography variant="body2">{exp.description}</Typography>
                  </Box>
               </Box>
            </Paper>
         ))}
      </Container>
   );
}

export default Portfolio;
