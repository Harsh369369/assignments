import { Box, Text, Center } from "@chakra-ui/react";

function About({ title, text }) {
  return (
    <>
      <Box
        borderRadius="md"
        boxShadow="lg"
        backgroundColor="white"
        p={3}
        mx={3}
        mt={3}
        maxW="sm"
        textAlign="center"
        position="relative"
      >
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          {title}
        </Text>
        <Text color="gray.600" mb={4}>
          {text}
        </Text>
      </Box>
      <Center
          left="50%"
          transform="translateX(-50%)">
        <Box
          borderTop="15px solid white"
          borderRight="15px solid transparent"
          borderLeft="15px solid transparent"
          borderBottom="15px solid transparent"
        ></Box>
      </Center>
    </>
  );
}

export default About;
