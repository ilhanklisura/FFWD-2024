import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function SkillsCard() {
   return (
      <Box py={5} textAlign="center">
         <Typography variant="h4" sx={{ mb: 3 }}>
            Skills
         </Typography>
         <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
               Frontend Development
            </Typography>
            <Typography variant="body1" paragraph>
               - Proficient in HTML/CSS, React, Vue, Angular
               <br />
               - Experienced with Material UI, Bootstrap and Tailwind CSS
               <br />- Familiar with Redux, GraphQL, and RESTful APIs
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
               Backend Development
            </Typography>
            <Typography variant="body1" paragraph>
               - Knowledge of C#, ASP.NET, PHP, Laravel
               <br />
               - Knowledge of Node.js and Express
               <br />
               - Familiar with MSSQL, MongoDB and SQL databases
               <br />- Good understanding of authentication and security
               practices
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
               Tools & Technologies
            </Typography>
            <Typography variant="body1">
               - Git, GitHub/Bitbucket, and version control
               <br />
               - Webpack, Vite, Babel, and other build tools
               <br />- Continuous integration and deployment (CI/CD)
            </Typography>
         </Paper>
      </Box>
   );
}

export default SkillsCard;
