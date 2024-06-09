import React from 'react';
import { Container, Typography, Box, Avatar, Grid, Paper } from '@mui/material';
import imagePath from '../assets/images/home-img.jpg';

const About = () => {
    return (
        <Container>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={4}>
                <Avatar
                    alt="Ilhan Klisura"
                    src={imagePath}
                    sx={{ width: 150, height: 150 }}
                />
            </Box>
            <Typography variant="h2" align="center" gutterBottom>
                About Me
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={4}>
                <Typography variant="body1" align="center" paragraph>
                    Hi, I'm Ilhan Klisura, a software developer based in Sarajevo, Bosnia and Herzegovina.
                    I'm passionate about coding, startups, and bringing innovative solutions to life.
                    Currently, I'm working at Orbicode d.o.o., and I'm focused on learning C#, ASP.NET Core, and Vue.js.
                </Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: 16 }}>
                        <Typography variant="h5">Skills</Typography>
                        <Typography variant="body2">
                            - Java, PHP, C#, JavaScript, React, Vue, Angular<br />
                            - NodeJS, MySQL, MongoDB, .NET, Laravel<br />
                            - Figma
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: 16 }}>
                        <Typography variant="h5">Interests</Typography>
                        <Typography variant="body2">
                            - Traveling<br />
                            - Entrepreneurship<br />
                            - Architecture
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;