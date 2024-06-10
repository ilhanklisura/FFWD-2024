import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
   return (
      <Box mt={5} p={2} textAlign="center" bgcolor="primary.main" color="white">
         <Typography variant="body1">
            © 2024 Ilhan Klisura. All rights reserved.
         </Typography>
      </Box>
   );
}

export default Footer;
