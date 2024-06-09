import React from 'react';
import { Container, Typography, Box, Grid, Paper, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import projects from '../data/projects';

const Portfolio = () => {
    return (
        <Container>
            <Box textAlign="center" my={4}>
                <Typography variant="h3" gutterBottom>
                    🛠️ My Projects
                </Typography>
                <Typography variant="body1" paragraph>
                    Here are some of the projects I've worked on. Click on the links to view the code and detailed information on GitHub.
                </Typography>
            </Box>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={3} style={{ padding: 16, height: '100%' }}>
                            <Typography variant="h6" gutterBottom>
                                {project.name}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {project.description}
                            </Typography>
                            <Link href={project.url} target="_blank" rel="noopener" color="secondary" display="flex" alignItems="center">
                                <GitHub style={{ marginRight: 8 }} /> View on GitHub
                            </Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Portfolio;