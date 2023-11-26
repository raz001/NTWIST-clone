import { Flex, Center, Text, HStack, Image, Grid } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      direction="column"
      bg="#081528"
      color="white"
      p={4}
      textAlign="center"
      alignItems="center"
    >
      <Center>
        <Image
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="Logo"
          height="50px"
          mb={2}
        />
      </Center>
      <Center>
        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' ,lg: 'repeat(5, 1fr)'}}
          gap={4}
          mb={2}
        >
          <Text>Home</Text>
          <Text>About Us</Text>
          <Text>Contact Us</Text>
          <Text>Privacy Policy</Text>
          <Text>Sitemap</Text>
        </Grid>
      </Center>
      <br />
      <Text color="#687377">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
      <br />

      <Center>
        <HStack spacing={4}>
          <FaTwitter />
          <FaLinkedin />
        </HStack>
      </Center>
      <br />
      <Text marginBottom={'50px'} color="#687377">© 2023. Ntwist Inc.</Text>
    </Flex>
  );
};

export default Footer;