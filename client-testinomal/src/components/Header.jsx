import { Center, Heading, Text } from "@chakra-ui/react"

function Header() {
    return (
        <Center flexDirection="column">
        <Heading as="h2" size="xl" mb={2}>
          Our Clients Speak
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6} textAlign="center">
          We have been working with clients around the world
        </Text>
      </Center>
    )
}

export default Header