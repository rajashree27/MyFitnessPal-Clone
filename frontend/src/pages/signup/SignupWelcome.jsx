import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupWelcome = () => {
	const navigate = useNavigate();
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox">
					<Heading fontSize="25px">Welcome! Just a few</Heading>
					<Heading fontSize="25px">quick questions so we can customize</Heading>
					<Heading fontSize="25px">MyFitnessPal for you.</Heading>

					<Button bg="#0066EE" color="white" mt="40px" w="400px" onClick={() => navigate("/signupWeightGoal")}>
						Continue
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupWelcome;

// /
