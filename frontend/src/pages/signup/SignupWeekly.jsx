import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";

const SignupWeekly = () => {
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox">
					<Heading fontSize="25px" mb="10px">
						What is your weekly goal?
					</Heading>
					<Text color="#A0A0A0">
						Let's break down your overall health goal into a weekly one
					</Text>
					<Text color="#A0A0A0">
						you can maintain. Slow-and-steady is best!
					</Text>
					<Button colorScheme="blue" variant="outline" w="370px" my="20px">
						Lose 0.25 kilograms per week
					</Button>
					<Button colorScheme="blue" variant="outline" w="370px" mb="20px">
						Lose 0.5 kilograms per week (Recommended)
					</Button>
					<Button colorScheme="blue" variant="outline" w="370px" mb="20px">
						Lose 0.75 kilograms per week
					</Button>
					<Button colorScheme="blue" variant="outline" w="370px">
						Lose 1 kilogram per week
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupWeekly;

// /signupWeekly
