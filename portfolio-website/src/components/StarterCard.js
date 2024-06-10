import React from "react";
import { Box, Typography } from "@mui/material";
import CustomTypography from "./CustomTypography";

function StarterCard() {
   return (
      <Box
         py={5}
         textAlign="center"
         sx={{
            backgroundColor: "#556cd6",
            color: "white",
            borderRadius: 2,
            mb: 4,
         }}
      >
         <CustomTypography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            Welcome to My Portfolio
         </CustomTypography>
         <Typography variant="h6" sx={{ mb: 4 }}>
            Explore my projects, skills, and experiences.
         </Typography>
         <Typography variant="h4" sx={{ mb: 3 }}>
            About Me
         </Typography>
         <Typography variant="body1" paragraph>
            I am Ilhan Klisura, a software developer passionate about creating
            beautiful, functional, and complex web applications. With extensive
            experience in frontend and backend, I strive to build seamless and
            responsive user interfaces with server-side background. I am
            constantly learning new technologies and improving my skills to stay
            up-to-date with the latest industry trends.
         </Typography>
      </Box>
   );
}

export default StarterCard;
