import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import CustomTypography from "../components/CustomTypography";
import { keyframes } from "@emotion/react";
import ContactForm from "../components/ContactForm";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Contact() {
   return (
      <Container maxWidth="lg" sx={{ animation: `${fadeIn} .8s ease-in` }}>
         <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
               <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
               <Box textAlign="center" sx={{ height: "100%" }}>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.0755763016274!2d18.336434515420724!3d43.82211487911547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c943fcb75b87%3A0xf869ab0ddc107a08!2sD%C5%BEemala%20Bijedi%C4%87a%20279F%2C%20Sarajevo%2071000%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sus!4v1629477741802!5m2!1sen!2sus"
                     width="100%"
                     height="100%"
                     style={{ border: 0, borderRadius: 4 }}
                     allowFullScreen=""
                     loading="lazy"
                  ></iframe>
               </Box>
            </Grid>
            <Grid item xs={12}>
               <Box textAlign="center" sx={{ mt: 5 }}>
                  <CustomTypography variant="h5" sx={{ mb: 2 }}>
                     Our Location
                  </CustomTypography>
                  <Typography variant="body1">Džemala Bijedića 279F</Typography>
                  <Typography variant="body1">
                     Sarajevo, Bosnia and Herzegovina
                  </Typography>
                  <Typography variant="body1">
                     Phone: (387) 61 389-028
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                     Geo Coordinates:
                  </Typography>
                  <Typography variant="body1">Latitude: 43.8221</Typography>
                  <Typography variant="body1">Longitude: 18.3364</Typography>
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
}

export default Contact;
