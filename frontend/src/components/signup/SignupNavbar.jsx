import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";

const SignupNavbar = () => {
	return (
		<Box
			style={{
				boxShadow:
					"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
					height:"65px"
			}}
		>
			<Flex p="10px" m="auto" w="70%" alignItems="center">
				<Image src={logo} alt="logo" />
				<Spacer />
				<Button colorScheme="black" variant="ghost" size="lg">
					LOG IN
				</Button>
			</Flex>
		</Box>
	);
};

export default SignupNavbar;
