import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import testimonialOne from "../assets/images/testimonials-1.jpg";
import testimonialTwo from "../assets/images/testimonials-2.jpg";
import testimonialThree from "../assets/images/testimonials-3.jpg";

function TestimonialsCard() {
   return (
      <Box py={5} textAlign="center">
         <Typography variant="h4" sx={{ mb: 3 }}>
            Featured Testimonials
         </Typography>
         <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
               <CustomCard
                  title="Edin Ed"
                  description="It was an awesome journey working with Ilhan. As he told me his motto is: 'Eat, work, repeat!' haha. He built Studio-A47 page from 0 to Hero!"
                  image={testimonialOne}
               />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
               <CustomCard
                  title="Dženana Meholjić"
                  description="As a Head of IT Sector in BH Telecom, Ilhan was one of the best interns BH Telecom ever had. We wish all the best to Ilhan in his career."
                  image={testimonialTwo}
               />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
               <CustomCard
                  title="Maid Oruč"
                  description="As a Executive Director of Inpek-Ze & Ek-Ekro, Ilhan was one of the best contractors we ever had. We wish all the best to Ilhan in his career."
                  image={testimonialThree}
               />
            </Grid>
         </Grid>
      </Box>
   );
}

export default TestimonialsCard;
