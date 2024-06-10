import React from "react";
import { Typography } from "@mui/material";

function CustomTypography({ children, variant = "body1", ...props }) {
   return (
      <Typography variant={variant} {...props}>
         {children}
      </Typography>
   );
}

export default CustomTypography;
