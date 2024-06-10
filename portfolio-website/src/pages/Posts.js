import React, { useState, useEffect } from "react";
import {
   Container,
   Grid,
   Box,
   Typography,
   Paper,
   Button,
   Modal,
   TextField,
} from "@mui/material";
import CustomTypography from "../components/CustomTypography";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Posts() {
   const [posts, setPosts] = useState(() => {
      const savedPosts = localStorage.getItem("posts");
      return savedPosts ? JSON.parse(savedPosts) : [];
   });
   const [openAddModal, setOpenAddModal] = useState(false);
   const [openDetailModal, setOpenDetailModal] = useState(false);
   const [selectedPost, setSelectedPost] = useState(null);
   const [newPost, setNewPost] = useState({
      title: "",
      description: "",
   });

   useEffect(() => {
      localStorage.setItem("posts", JSON.stringify(posts));
   }, [posts]);

   const handleAddPost = () => {
      setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
      setOpenAddModal(false);
      setNewPost({ title: "", description: "" });
   };

   const handleOpenDetailModal = (post) => {
      setSelectedPost(post);
      setOpenDetailModal(true);
   };

   const handleCloseDetailModal = () => {
      setSelectedPost(null);
      setOpenDetailModal(false);
   };

   const truncateText = (text, length) => {
      if (text.length <= length) return text;
      return text.substring(0, length) + "...";
   };

   return (
      <Container maxWidth="lg" sx={{ animation: `${fadeIn} .8s ease-in` }}>
         <Box py={5} textAlign="center">
            <CustomTypography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
               Posts
            </CustomTypography>
            <Button
               variant="contained"
               color="primary"
               onClick={() => setOpenAddModal(true)}
            >
               Add New Post
            </Button>
         </Box>

         <Grid container spacing={4}>
            {posts.map((post) => (
               <Grid item xs={12} key={post.id}>
                  <Paper
                     elevation={3}
                     sx={{ p: 2, cursor: "pointer" }}
                     onClick={() => handleOpenDetailModal(post)}
                  >
                     <Box>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                           {post.title}
                        </Typography>
                        <Typography
                           variant="body2"
                           sx={{ color: "text.secondary" }}
                        >
                           {truncateText(post.description, 100) ||
                              "No description available"}
                        </Typography>
                     </Box>
                  </Paper>
               </Grid>
            ))}
         </Grid>

         {/* Add Post Modal */}
         <Modal
            open={openAddModal}
            onClose={() => setOpenAddModal(false)}
            aria-labelledby="add-post-modal"
            aria-describedby="add-new-post"
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 500,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
               }}
            >
               <Typography id="add-post-modal" variant="h6" component="h2">
                  Add New Post
               </Typography>
               <TextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  margin="normal"
                  value={newPost.title}
                  onChange={(e) =>
                     setNewPost({ ...newPost, title: e.target.value })
                  }
               />
               <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={newPost.description}
                  onChange={(e) =>
                     setNewPost({ ...newPost, description: e.target.value })
                  }
               />
               <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddPost}
                  sx={{ mt: 2 }}
               >
                  Add Post
               </Button>
            </Box>
         </Modal>

         {/* Post Detail Modal */}
         <Modal
            open={openDetailModal}
            onClose={handleCloseDetailModal}
            aria-labelledby="post-detail-modal"
            aria-describedby="view-post-detail"
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
               }}
            >
               {selectedPost && (
                  <>
                     <Typography
                        id="post-detail-modal"
                        variant="h6"
                        component="h2"
                     >
                        {selectedPost.title}
                     </Typography>
                     <Typography variant="body2" sx={{ mt: 2 }}>
                        {selectedPost.description || "No description available"}
                     </Typography>
                  </>
               )}
            </Box>
         </Modal>
      </Container>
   );
}

export default Posts;
