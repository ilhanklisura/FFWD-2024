import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function CustomCard({ title, description, image }) {
   return (
      <Box my={2} mx={1} display="flex" justifyContent="center">
         <Card
            sx={{
               width: 300,
               boxShadow: 3,
               borderRadius: 2,
               overflow: "hidden",
            }}
         >
            {image && (
               <img
                  src={image}
                  alt={title}
                  style={{
                     width: "100%",
                     height: "auto",
                     objectFit: "cover",
                  }}
               />
            )}
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {description}
               </Typography>
            </CardContent>
         </Card>
      </Box>
   );
}

export default CustomCard;
