import { Grid } from "@chakra-ui/react";
import ProductCard from "./product-card";

const data = [
  {
    image: "#",
    title: "Multitenant E-Commerce",
    description:
      "We create visually appealing and intuitive designs that reflect your brand and deliver a seamless user experience",
  },
  {
    image: "#",
    title: "Image Resizer",
    description:
      "We convert design mockups into responsive web pages, ensuring cross-browser compatibility and adherence to web standards",
  },
  {
    image: "#",
    title: "Landing Page Generator",
    description:
      "Our developers bring interactivity and dynamic functionality to your website using JavaScript and popular frameworks like React (Next.js)",
  },
  {
    image: "#",
    title: "Invoice Management",
    description:
      "We ensure your website adapts seamlessly to different devices, providing optimal user experiences",
  },
];

const Product = () => {
  return (
    <Grid
      mb={"127px"}
      templateColumns={{
        base: "1fr 1fr",
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


export default Product;
