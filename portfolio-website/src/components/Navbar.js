import React, { useState } from "react";
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   IconButton,
   Drawer,
   List,
   ListItem,
   ListItemText,
   Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
   const [drawerOpen, setDrawerOpen] = useState(false);

   const toggleDrawer = (open) => (event) => {
      if (
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) {
         return;
      }
      setDrawerOpen(open);
   };

   const menuItems = [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Portfolio", link: "/portfolio" },
      { text: "Posts", link: "/posts" },
      { text: "Contact", link: "/contact" },
   ];

   const list = () => (
      <Box
         sx={{ width: 250 }}
         role="presentation"
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
      >
         <List>
            {menuItems.map((item, index) => (
               <ListItem button key={index} component={Link} to={item.link}>
                  <ListItemText primary={item.text} />
               </ListItem>
            ))}
         </List>
      </Box>
   );

   return (
      <AppBar position="static">
         <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
               Ilhan Klisura | Software Developer
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
               {menuItems.map((item, index) => (
                  <Button
                     color="inherit"
                     component={Link}
                     to={item.link}
                     key={index}
                  >
                     {item.text}
                  </Button>
               ))}
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
               <IconButton
                  color="inherit"
                  edge="start"
                  onClick={toggleDrawer(true)}
               >
                  <MenuIcon />
               </IconButton>
            </Box>
            <Drawer
               anchor="right"
               open={drawerOpen}
               onClose={toggleDrawer(false)}
            >
               {list()}
            </Drawer>
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;
