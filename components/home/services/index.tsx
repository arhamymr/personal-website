import { Box, Heading, Text, Flex, Center, Container } from "@chakra-ui/react";
import Products from "./product";
import Services from "./services";

export default function ProductAndServices() {
  return (
    <Box>
      <Container>
        <Center>
          <Box>
            <Heading
              fontSize={{ base: "25px", md: "28px" }}
              mb={{ base: "20px", md: "31px" }}
              textAlign={"center"}
              as={"h2"}
              maxW={700}
              p={"16px"}
            >
              We offer a wide range of services for web development. Here are
              some of the common services we provide
            </Heading>
            <Text
              maxW={"753px"}
              fontSize={"20px"}
              textAlign={"center"}
              p={"16px"}
              mb={"90px"}
            >
              Kami menyediakan 6.000+ pilihan Produk PPOB, Add-On dan Template
              Desain Aplikasi yang dapat kamu sesuaikan dengan kebutuhan
              bisnismu
            </Text>
          </Box>
        </Center>
        <Services />
        <Products />
      </Container>
    </Box>
  );
}
