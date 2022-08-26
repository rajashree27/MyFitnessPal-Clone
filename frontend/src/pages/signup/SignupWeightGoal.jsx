import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupWeightGoal = () => {
	const navigate = useNavigate();
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
						onClick={() => navigate("/signupActivity")}
					>
						Lose Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						mb="20px"
						onClick={() => navigate("/signupActivity")}
					>
						Maintain Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						onClick={() => navigate("/signupActivity")}
					>
						Gain Weight
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupWeightGoal;

// /signupWeightGoal
