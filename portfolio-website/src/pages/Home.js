import React from "react";
import { Container } from "@mui/material";
import { keyframes } from "@emotion/react";
import TestimonialsCard from "../components/TestimonialsCard";
import SkillsCard from "../components/SkillsCard";
import StarterCard from "../components/StarterCard";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Home() {
   return (
      <Container maxWidth="lg" sx={{ animation: `${fadeIn} .8s ease-in` }}>
         <StarterCard />
         <SkillsCard />
         <TestimonialsCard />
      </Container>
   );
}

export default Home;
