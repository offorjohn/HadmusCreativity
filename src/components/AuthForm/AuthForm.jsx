import { Box, Button, Image, Input, VStack, Flex, Text } from '@chakra-ui/react'; // Import Flex and Text components
import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box border="1px solid gray" borderRadius={4} padding={5}>
      <VStack spacing={4} align="center"> {/* Specify align prop for VStack */}
        <Image src="/logo.png" h={24} cursor="pointer" alt="Instagram" />
        <Input
          placeholder="Email"
          fontSize={14}
          type="email"
        />
        <Input
          placeholder="Password"
          fontSize={14}
          type="password" 
        />

        {!isLogin ? (
          <Input
            placeholder="Confirm Password"
            fontSize={14}
            type="password"
          />
        ) : null}

        <Button w="full" colorScheme="blue" size="sm" fontSize={14}>
          {isLogin ? "Login" : "Sign Up"}
        </Button>

        {/* ----------------OR TEXT -------- */}

        <Flex alignItems="center" justifyContent="center" my={4} gap={1} w="full">
          <Box flex={2} h="1px" bg="gray.400" />
          <Text mx={1} color="white">
            OR
          </Text>
          <Box flex={2} h="1px" bg="gray.400" />
        </Flex>
      </VStack>
    </Box>
  );
};

export default AuthForm;
