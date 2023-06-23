import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Link,
  Button,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChatIcon } from "@chakra-ui/icons";
import Image from "next/image";
import SmoothScrollLink from "./smothlink";

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      zIndex={99}
      w={"full"}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"gray.100"}
      position={"fixed"}
      backdropFilter={"blur(50px)"}
    >
      <Box>
        <Container maxW='container.lg'>
          <Flex
            justify={"space-between"}
            minH={"60px"}
            py={{ base: 2 }}
            align={"center"}
          >
            <Link href={"#"}>
              <Image
                src={"/assets/logo.svg"}
                width={132}
                height={28}
                alt="logo"
              />
            </Link>

            <Box display={{ base: "flex", md: "none" }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Box>

            <Flex
              flex={{ base: 1, md: 0 }}
              display={{ base: "none", md: "flex" }}
              ml={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav onToggle={onToggle} />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Flex align={"center"} gap={"18px"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <SmoothScrollLink targetId={navItem.href} label={navItem.label} />
        </Box>
      ))}
      <Button leftIcon={<ChatIcon />} variant={"outline"}>
        Hire Us
      </Button>
    </Flex>
  );
};

const MobileNav = ({ onToggle }) => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem onToggle={onToggle} key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, onToggle, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        onClick={() => {
          setTimeout(function () {
            onToggle();
          }, 1000);
        }}
      >
        <SmoothScrollLink key={label} targetId={href} label={label} />
      </Box>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  onToggle?: any;
  href?: string;
  query?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Products & Services",
    href: "#products",
  },
  {
    label: "Blogs",
    href: "#blogs",
  },
  {
    label: "About Us",
    href: "#about-us",
  },
];
