import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Center,
  Tooltip,
} from "@chakra-ui/react";

function card() {
  return (
    <>
      <Card maxW="sm" display="flex" alignItems="Center" flexDir="column" background='green'>
        <CardBody display="flex" flexDir="column" alignItems="center">
        <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="full"
            boxSize="150px"
          />
           </Tooltip>
          <Stack mt="6" spacing="3">
            <Heading size="md">Lindsey James</Heading>
            <Text>@lindsey_jam3s</Text>
            <Text>
              Actress, musician, songwriter
              <br />
              and artist. PM for work inquires or{" "}
            </Text>
            <Text color="blue.600">#tag</Text>
            <Text>me in your posts</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue" borderRadius="full">
              Message
            </Button>
            <Button variant="solid" colorScheme="blue" borderRadius="full">
              Follow
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default card;
