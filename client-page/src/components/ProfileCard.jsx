import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Image,
  Box,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";

function ProfileCard() {
  return (
    <Center>
      <Card box-shadow='lg' maxW="sm" align="center" flexDir="column">
        <CardBody display="flex" flexDir="column" alignItems="center">
          <Box position="relative">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Lindsey James"
              borderRadius="full"
              boxSize="100px"
            />
            <Box
              position="absolute"
              bottom="2px"
              right="14px"
              bg="green.500"
              border="2px solid white"
              borderRadius="full"
              boxSize="20px"
            />
          </Box>
          <Stack mt="6" spacing="0" textAlign="center">
            <Heading size="lg">Lindsey James</Heading>
            <Text size='lg' mb='10px' fontWeight='bold' color='grey'>@lindsey_jam3s</Text>
            <Text fontWeight='semibold' color='grey'>
              Actress, musician, songwriter
              <br />
              and artist. PM for work inquires or
            </Text>
            <Text color="blue.600" fontWeight='semibold'>#tag</Text>
            <Text fontWeight='semibold' color='grey'>me in your posts</Text>
          </Stack>
        </CardBody>
        <Wrap spacing="3" mb="4" mx='4'>
          <WrapItem>
            <Tag size="lg" borderRadius="full" variant="subtle" colorScheme="gray">
              <TagLabel>#ART</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag size="lg" borderRadius="full" variant="subtle" colorScheme="gray">
              <TagLabel>#PHOTOGRAPHY</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag size="lg" borderRadius="full" variant="subtle" colorScheme="gray">
              <TagLabel>#MUSIC</TagLabel>
            </Tag>
          </WrapItem>
        </Wrap>
        <CardFooter width='100%'>
          <ButtonGroup spacing="2" width='100%'>
            <Button variant="ghost" colorScheme="black" borderRadius="full" flex='1'>
              Message
            </Button>
            <Button variant="solid" colorScheme="blue" borderRadius="full" flex='1'>
              Follow
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Center>
  );
}

export default ProfileCard;
