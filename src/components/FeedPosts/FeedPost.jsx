import { Box, Image} from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = () => {
  return (
    <>
      <PostHeader />

      <Box my={2} borderRadius={4}
        overflow={"hidden"}
      
      >
        <Image src="/img1.png" alt="user profile pic" />

      </Box>
      <PostFooter />
    </>
  );

};

export default FeedPost;