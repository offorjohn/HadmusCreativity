import { Avatar, Box, Flex } from "@chakra-ui/react";

const PostHeader = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center" w="full" my={4}>
            <Flex alignItems="center" gap={2}>
                <Avatar src="/img1.png" alt="user profile pic" size="sm" />
                {/* Assuming you want to display "as a programmer" */}
                <Box as="span" fontWeight="bold">as a programmer</Box>
                <Box color="gray.500" ml={1}>. 1w</Box>
            </Flex>
            {/* Additional content can be added here */}
        </Flex>
    );
};

export default PostHeader;
