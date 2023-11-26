import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    chakra,
    Image,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Hero = () => {
    return (
      <>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={0}
          _after={{
            backgroundImage: "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png",
            bgPos: "center",
            bgSize: "cover",
            opacity: 1,
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            content: '" "',
          }}
          position="relative"
          height="100vh"
          placeItems="center"
        >
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{
              base: 4,
              lg: 20,
            }}
            py={24}
          >
            <chakra.h1
              mb={6}
              fontSize={{
                base: "4xl",
                md: "4xl",
                lg: "5xl",
              }}
              fontWeight="bold"
              color="white"
              lineHeight="shorter"
            >
              Data-powered solutions for Industrial Excellence 
            </chakra.h1>
            <Button colorScheme='blue'>Read More</Button>
  
          </Flex>
          <Box>
            <Image
              src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
              alt="home-image-icons"
              fit="cover"
              w="full"
              loading="lazy"
            />
          </Box>
        </SimpleGrid>
      </>
    );
  };
  
  export default Hero;