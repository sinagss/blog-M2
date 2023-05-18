import React, { useEffect } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import { keys } from "../constants/storageKeys";
import { getPosts } from "../api/api";
import PostItem from "../components/PostItem";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Posts: React.FC = () => {
  const [postsData, setPostsData] = usePersistedState<Post[]>(
    keys.postData,
    []
  );

  useEffect(() => {
    getPosts().then((data) => {
      setPostsData(data);
    });
  }, []);

  const posts = postsData.map((item: Post) => {
    return (
      <Grid xs={4} sm={4} md={4} key={item.id + "-grid"}>
        <PostItem
          key={item.id}
          data={{
            id: item.id,
            title: item.title,
            body: item.body,
            userId: item.userId,
          }}
        />
      </Grid>
    );
  });

  return (
    <Container maxWidth="xl">
      <Toolbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {posts}
        </Grid>
      </Box>
    </Container>
  );
};

export default Posts;
