import { Box, Flex } from "@chakra-ui/react";
import About from "./About";
import Profile from "./Profile";

function CardOne({ testimonial }) {
  return (
    <Box p={6}>
      <Flex direction="column" align="center">
        <About title={testimonial.title} text={testimonial.text} />
        <Profile
          image={testimonial.image}
          name={testimonial.name}
          position={testimonial.position}
        />
      </Flex>
    </Box>
  );
}

export default CardOne;
