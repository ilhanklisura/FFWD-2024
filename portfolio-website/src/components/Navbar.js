import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <AppBar position="static">
         <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
               Ilhan Klisura | Software Developer
            </Typography>
            <Button color="inherit" component={Link} to="/">
               Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
               About
            </Button>
            <Button color="inherit" component={Link} to="/portfolio">
               Portfolio
            </Button>
            <Button color="inherit" component={Link} to="/posts">
               Posts
            </Button>
            <Button color="inherit" component={Link} to="/contact">
               Contact
            </Button>
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;