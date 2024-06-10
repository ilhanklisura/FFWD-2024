// src/pages/Contact.js
import React, { useState } from "react";
import {
   TextField,
   Button,
   Box,
   Typography,
   Container,
   Paper,
   Grid,
   Modal,
} from "@mui/material";
import CustomTypography from "../components/CustomTypography";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Contact() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [errors, setErrors] = useState({});
   const [showConfirmation, setShowConfirmation] = useState(false);

   const validate = () => {
      let tempErrors = {};
      tempErrors.name = name ? "" : "Name is required";
      tempErrors.email = email ? "" : "Email is required";
      tempErrors.message = message ? "" : "Message is required";
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
         const contactData = { name, email, message };
         localStorage.setItem("contactData", JSON.stringify(contactData));
         console.log("Message sent:", contactData);

         setShowConfirmation(true);
         setTimeout(() => setShowConfirmation(false), 3000);

         setName("");
         setEmail("");
         setMessage("");
         setErrors({});
      }
   };

   return (
      <Container maxWidth="lg" sx={{ animation: `${fadeIn} .8s ease-in` }}>
         <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
               <Paper elevation={3} sx={{ p: 4 }}>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                     <CustomTypography variant="h4" sx={{ mb: 3 }}>
                        Contact Me
                     </CustomTypography>
                     <TextField
                        id="name"
                        name="name"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                        fullWidth
                        margin="normal"
                     />
                     <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                        margin="normal"
                     />
                     <TextField
                        id="message"
                        name="message"
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        error={!!errors.message}
                        helperText={errors.message}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                     />
                     <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                     >
                        Submit
                     </Button>
                  </Box>
               </Paper>
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

         {/* Confirmation Modal */}
         <Modal
            open={showConfirmation}
            onClose={() => setShowConfirmation(false)}
            aria-labelledby="confirmation-modal"
            aria-describedby="confirmation-message"
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 300,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                  textAlign: "center",
               }}
            >
               <Typography id="confirmation-modal" variant="h6" component="h2">
                  Message has been sent!
               </Typography>
            </Box>
         </Modal>
      </Container>
   );
}

export default Contact;
