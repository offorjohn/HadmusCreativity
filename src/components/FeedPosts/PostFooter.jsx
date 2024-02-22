import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { NotificationsLogo, UnlikeLogo } from "../../assets/constacts";

const PostFooter = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
        }
    };

    return (
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
            <Box onClick={handleLike}>
                {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
            </Box>
        </Flex>
    );
};

export default PostFooter;
