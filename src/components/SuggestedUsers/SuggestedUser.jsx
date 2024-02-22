import { VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser"; // Import the SuggestedUser component

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <SuggestedUser /> {/* Include the SuggestedUser component */}
    </VStack>
  );
}

export default SuggestedUsers;
