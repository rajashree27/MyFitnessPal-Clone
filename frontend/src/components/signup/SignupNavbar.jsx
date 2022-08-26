import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignupNavbar = () => {
	const navigate = useNavigate();
	return (
		<Box
			style={{
				boxShadow:
					"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
				height: "65px",
			}}
		>
			<Flex p="10px" m="auto" w="70%" alignItems="center">
				<Image
					src={logo}
					alt="logo"
					w="200px"
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/")}
				/>
				<Spacer />
				<Button
					colorScheme="black"
					variant="ghost"
					size="lg"
					onClick={() => navigate("/login")}
				>
					LOG IN
				</Button>
			</Flex>
		</Box>
	);
};

export default SignupNavbar;
