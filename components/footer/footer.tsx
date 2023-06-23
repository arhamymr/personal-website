import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Image from "next/image";
import { WhatsappFillIcon } from "icons/whatsapp";
import { EmailIcon } from "icons/email-fill";

import { InstagramIcon } from "icons/ig";
import { FacebookIcon } from "icons/fb";
import { TelegramIcon } from "icons/telegram";
import { LinkedinIcon } from "icons/linkedin";
import Link from "next/link";
import SmoothScrollLink from "components/navbar/smothlink";

const Logo = () => {
  return (
    <Image
      src={"/assets/logo.svg"}
      alt={"logo"}
      width={133}
      height={28}
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"brand.500"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10} fontSize={"14px"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
           
            <Text fontSize={"sm"}>
              Jln. Puri Asri Raya, Tamalanrea Indah, Kec. Tamalanrea, Kota
              Makassar, Sulawesi Selatan 90245.
            </Text>
            <Text fontSize={"sm"}>
              © {new Date().getFullYear()} | Sevenstack 
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Perusahaan</ListHeader>
            <a href={"#"}>Tentang</a>
            <a href={"#faq"}>FAQ</a>
            <Link href={"/terms-and-conditions"}>Syarat dan Ketentuan</Link>
            <a href={"#"}>Loker</a>
            <a href={"#"}>Blog</a>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Informasi Produk</ListHeader>
            <SmoothScrollLink targetId={"#product"}>
              <Text>Product</Text>
            </SmoothScrollLink>
            <SmoothScrollLink targetId={"#add-on"}>
              <Text>Add-on</Text>
            </SmoothScrollLink>
          </Stack>
          <Stack align={"flex-start"} gap={1}>
            <ListHeader>Hubungi Kami</ListHeader>
            <HStack>
              <WhatsappFillIcon />
              <a
                href={
                  "#" }
                target="_blank"
              >
                +6289669594959
              </a>
            </HStack>
            <HStack>
              <EmailIcon />
              <a target="_blank" href={"mailto:arhamymr@gmail.com"}>
                arhamymr@gmail.com
              </a>
            </HStack>
           
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
