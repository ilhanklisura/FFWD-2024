import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const footerStyles = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1976d2',
    color: 'white',
    textAlign: 'center',
    padding: '16px 0',
};

const Footer = () => {
    return (
        <Box component="footer" sx={footerStyles}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} Ilhan Klisura. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center">
                    Built for the course "Foundation of Web Development" at International Burch University
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;