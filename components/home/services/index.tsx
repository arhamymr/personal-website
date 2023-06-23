import { Box, Heading, Text,  Center, Container } from "@chakra-ui/react";
import Products from "./product";
import Services from "./services";

export default function ProductAndServices() {
  return (
    <Box>
      <Container maxW='container.lg' centerContent>
          <Box>
            <Heading
              fontSize={{ base: "25px", md: "28px" }}
              textAlign={"center"}
              as={"h2"}
              maxW={700}
              p={"16px"}
            >
              Services
            </Heading>
            <Text
              maxW={"753px"}
              fontSize={"20px"}
              textAlign={"center"}
              p={"16px"}
              mb={"20px"}
            >
             We offer a wide range of services for web development. Here are
              some of the common services we provide
            </Text>
          </Box>
        <Services />
          <Box>
            <Heading
              fontSize={{ base: "25px", md: "28px" }}
              mb={{ base: "20px" }}
              textAlign={"center"}
              as={"h2"}
              maxW={700}
              p={"16px"}
            >
              Products and Tools
            </Heading>
          </Box>
        <Products />
      </Container>
    </Box>
  );
}
