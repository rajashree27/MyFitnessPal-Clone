import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
} from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";

const SignupUsername = () => {
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<Heading fontSize="20px" my="10px">
						Create a username!
					</Heading>
					<Input
						placeholder="Create a username"
						h="50px"
						my="20px"
						isRequired
						w="400px"
					/>

					<Flex gap="20px" mt="100px">
						<Button
							colorScheme="blue"
							variant="outline"
							w="150px"
							fontSize="18px"
						>
							BACK
						</Button>
						<Button colorScheme="blue" w="150px" fontSize="18px">
							FINISH
						</Button>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default SignupUsername;

// /signupUsername
