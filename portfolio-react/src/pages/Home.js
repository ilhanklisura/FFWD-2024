import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import projects from '../data/projects';

const Home = () => {
    return (
        <Container>
            {/* Hero Section */}
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="60vh"
                textAlign="center"
                bgcolor="primary.main"
                color="white"
                p={4}
                mb={4}
                mt={4}
            >
                <Typography variant="h2" gutterBottom>
                    Welcome to My Portfolio
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Discover my projects, skills, and contact information
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    to="/portfolio"
                >
                    Explore More
                </Button>
            </Box>

            {/* About Section */}
            <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: 16, height: '100%' }}>
                        <Typography variant="h5" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1">
                            Hi, I'm Ilhan Klisura, a software developer based in Sarajevo, Bosnia and Herzegovina. I'm passionate about coding, startups, and bringing innovative solutions to life. Currently, I'm working at Orbicode d.o.o., and I'm focused on learning C#, ASP.NET Core, and Vue.js.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Skills Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: 16, height: '100%' }}>
                        <Typography variant="h5" gutterBottom>
                            Skills
                        </Typography>
                        <Typography variant="body1">
                            - Java, PHP, C#, JavaScript, React, Vue, Angular<br />
                            - NodeJS, MySQL, MongoDB, .NET, Laravel<br />
                            - Figma
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Projects Section */}
            <Box mt={4}>
                <Typography variant="h4" align="center" gutterBottom>
                    Recent Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.slice(0, 3).map((project, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Paper elevation={3} style={{ padding: 16 }}>
                                <Typography variant="h6" gutterBottom>
                                    {project.name}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {project.description}
                                </Typography>
                                <Link href={project.url} target="_blank" rel="noopener" color="secondary" display="flex" alignItems="center">
                                    <GitHub style={{ marginRight: 8 }} /> View on GitHub
                                </Link>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;