import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
  return (
    <Stack spacing={3} p={4} bg="gray.800" borderRadius="lg">
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
      <Skeleton height="45px" bg="gray.600" />
    </Stack>
  );
};

export default ChatLoading;
