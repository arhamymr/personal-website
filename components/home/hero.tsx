import React from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  Center,
  Container,
  Button,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { ChatIcon } from "@chakra-ui/icons";

export default function Hero() {
  return (
    <Box>
      <Container>
        <Center flexDirection={"column"} pt={"90px"} pb={"84px"}>
          <Image
            src={"/assets/banner.png"}
            width={381}
            height={358}
            alt={"hero banner"}
          />

          <Flex
            mb={"20px"}
            align={"center"}
            fontWeight={"bold"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Text fontSize={{ base: "30px", md: "34px" }} textAlign={"center"}>
              Crafting Your Digital Presence
            </Text>
          </Flex>
          <Text
            maxW={"753px"}
            fontSize={"20px"}
            textAlign={"center"}
            mb={"30px"}
          >
            Elevate Your Online Presence with Powerful Web Development Services.
            Expert coding, responsive design, and cutting-edge technologies
            bring your vision to life for a strong digital foundation.
          </Text>
          <HStack spacing={{ base: "16px", md: "24px" }}>
            <Link href={"mailto:arhamymr@gmail.com"}>
              <Button leftIcon={<ChatIcon />} size={"lg"}>
                Hire Us
              </Button>
            </Link>

            <Button colorScheme={"gray"} size={"lg"}>
              Our Works
            </Button>
          </HStack>
        </Center>
      </Container>
    </Box>
  );
}
