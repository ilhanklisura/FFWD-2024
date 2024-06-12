import React, { useState, useEffect } from "react";
import {
   TextField,
   Button,
   Box,
   Modal,
   Typography,
   Paper,
} from "@mui/material";
import CustomTypography from "./CustomTypography";

function ContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const [errors, setErrors] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [showConfirmation, setShowConfirmation] = useState(false);

   useEffect(() => {
      if (isSubmitted) {
         console.log("Form submitted:", formData);
         localStorage.setItem("contactData", JSON.stringify(formData));
         setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
         });
         setErrors({});
         setIsSubmitted(false);
         setShowConfirmation(true);
         setTimeout(() => setShowConfirmation(false), 3000);
      }
   }, [isSubmitted, formData]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const validate = () => {
      let tempErrors = {};
      tempErrors.name = formData.name ? "" : "Name is required";
      tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
         ? ""
         : "Email is not valid";
      tempErrors.phone = formData.phone ? "" : "Phone number is required";
      tempErrors.message = formData.message ? "" : "Message is required";
      setErrors(tempErrors);
      return Object.values(tempErrors).every((x) => x === "");
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
         setIsSubmitted(true);
      }
   };

   return (
      <Paper elevation={3} sx={{ p: 4 }}>
         <Box component="form" onSubmit={handleSubmit} noValidate>
            <CustomTypography variant="h4" sx={{ mb: 3 }}>
               Contact Me
            </CustomTypography>
            <TextField
               id="name"
               name="name"
               label="Name"
               value={formData.name}
               onChange={handleChange}
               error={!!errors.name}
               helperText={errors.name}
               fullWidth
               margin="normal"
            />
            <TextField
               id="email"
               name="email"
               label="Email"
               value={formData.email}
               onChange={handleChange}
               error={!!errors.email}
               helperText={errors.email}
               fullWidth
               margin="normal"
            />
            <TextField
               id="phone"
               name="phone"
               label="Phone"
               value={formData.phone}
               onChange={handleChange}
               error={!!errors.phone}
               helperText={errors.phone}
               fullWidth
               margin="normal"
            />
            <TextField
               id="message"
               name="message"
               label="Message"
               value={formData.message}
               onChange={handleChange}
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
      </Paper>
   );
}

export default ContactForm;
