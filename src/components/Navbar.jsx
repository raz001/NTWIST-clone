import {
    useDisclosure,
    chakra,
    Flex,
    HStack,
    Button,
    IconButton,
    VStack,
    Box,
    CloseButton,
    Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const bg = scrolling ? "white" : "transparent"; // Set the background color based on the scrolling state
    const text = scrolling ? "black" : "white"; // Set the background color based on the scrolling state
    const logo = scrolling ? "https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" : "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"; // Set the background color based on the scrolling state
    const mobileNav = useDisclosure();

    // Add a scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        
        <Box w="full" position="fixed" zIndex="10">
            <chakra.header
                w="100vw"
                px={{
                    base: 2,
                    sm: 4,
                }}
                py={4}
                bg={bg}
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <chakra.a
                            href="/"
                            title="NTWIST Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            <Image
                                src={logo}
                                alt="NTWIST-logo"
                                height="50px"
                            />
                        </chakra.a>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{
                                base: "none",
                                md: "inline-flex",
                            }}
                        >
                            <Button variant="ghost" color={text}>
                                Home
                            </Button>
                            <Button variant="ghost" color={text}>
                                Industries
                            </Button>
                            <Button variant="ghost" color={text}>
                                AI Software
                            </Button>
                            <Button variant="ghost" color={text}>
                                Blog
                            </Button>
                            <Button variant="ghost" color={text}>
                                Contact Us
                            </Button>
                        </HStack>
                        <Box
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                        >
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg="white"
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />

                                <Button w="full" variant="ghost" >
                                    Home
                                </Button>
                                <Button w="full" variant="ghost" >
                                    Industries
                                </Button>
                                <Button w="full" variant="ghost" >
                                    AI Software
                                </Button>
                                <Button w="full" variant="ghost" >
                                    Blog
                                </Button>
                                <Button w="full" variant="ghost" >
                                    Contact Us
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </Box>
    );
};

export default Navbar;