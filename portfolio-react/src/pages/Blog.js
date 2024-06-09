import React from 'react';
import { Container, Typography } from '@mui/material';

const Blog = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Blog
            </Typography>
            <Typography variant="body1">
                This is the blog page.
            </Typography>
        </Container>
    );
};

export default Blog;