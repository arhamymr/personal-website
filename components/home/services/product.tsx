import { Grid, Box, Heading, Text, Flex, Center } from "@chakra-ui/react";

import { useState } from "react";
import ProductCard from "./product-card";

const data = [
  {
    image: "#",
    title: "UI Design",
    description:
      "We create visually appealing and intuitive designs that reflect your brand and deliver a seamless user experience",
  },
  {
    image: "#",
    title: "HTML/CSS Development",
    description:
      "We convert design mockups into responsive web pages, ensuring cross-browser compatibility and adherence to web standards",
  },
  {
    image: "#",
    title: "JavaScript Development",
    description:
      "Our developers bring interactivity and dynamic functionality to your website using JavaScript and popular frameworks like React (Next.js)",
  },
  {
    image: "#",
    title: "Responsive Web Design",
    description:
      "We ensure your website adapts seamlessly to different devices, providing optimal user experiences",
  },
  {
    image: "#",
    title: "Performance Optimization",
    description:
      "We optimize your website's performance to deliver fast-loading web pages and improve user satisfaction",
  },
  {
    image: "#",
    title: "Integration of Third-Party Services",
    description:
      "We seamlessly integrate third-party services and APIs to enhance your website's functionality",
  },
  {
    image: "#",
    title: "Website Maintenance and Support",
    description:
      "We provide ongoing maintenance and support to keep your website up-to-date and optimized",
  },
  {
    image: "#",
    title: "Collaboration",
    description:
      "We work closely with designers and back-end developers to ensure a cohesive development process",
  },
];

const RenderProduct = ({ type }) => {
  return (
    <Grid
      mb={"127px"}
      templateColumns={{
        base: "1fr 1fr",
        md: "repeat(3, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={{ base: "16px", md: "31px" }}
      p={4}
    >
      {data.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </Grid>
  );
};

const Product = () => {
  const [active, setActive] = useState(0);
  const menu = ["Prabayar", "Pascabayar"];

  return (
    <Box>
      <Center w={"full"} pt={"46px"} pb={"30px"}>
        <Flex gap={"69px"}>
          {menu.map((item, index) => (
            <Text
              p={"8px 16px"}
              rounded={"40px"}
              fontWeight={active === index && "bold"}
              key={item}
              cursor={"pointer"}
              onClick={() => setActive(index)}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Center>
      <RenderProduct type={active} />
    </Box>
  );
};

export default Product;
