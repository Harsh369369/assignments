import { Center, Avatar, Text } from "@chakra-ui/react"

function Profile({image, name, position}) {
    return (
        <>
        <Center
            >
              <Avatar
                src={image}
                name={name}
                size="md"
                mb={2}
              />
            </Center>
            <Text fontWeight="bold">{name}</Text>
            <Text color="gray.600">{position}</Text>
        </>
    )
}

export default Profile