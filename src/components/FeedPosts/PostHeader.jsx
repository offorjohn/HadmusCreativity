import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center" w="full" my={4}>
            <Flex alignItems="center" gap={2}>
                <Avatar src="/img1.png" alt="user profile pic" size="sm" />
                {/* Assuming you want to display "as a programmer" */}
                <Box as="span" fontWeight="bold">as a programmer</Box>
                <Box color="gray.500" ml={1}>. 1w</Box>
            </Flex>
            <Box
                cursor={"pointer"}>

                <Text
                  fontSize={12}
                  color={"blue.500"}
                  fontWeight={"bold"}
                  _hover={{
                    color: "white",
                  }}
                  transition={"0.2s ease-in-out"}
                
                >Unfollow</Text>
            </Box>
        </Flex>
    );
};

export default PostHeader;
