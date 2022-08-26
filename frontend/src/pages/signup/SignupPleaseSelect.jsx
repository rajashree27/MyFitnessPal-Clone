import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupPleaseSelect = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/signupTall");
	};
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox">
					<Heading fontSize="25px" mb="10px">
						What is your weight goal?
					</Heading>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						my="20px"
						onClick={handleClick}
					>
						Lose Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						mb="20px"
						onClick={handleClick}
					>
						Maintain Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						onClick={handleClick}
					>
						Gain Weight
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupPleaseSelect;
