import {
	Box,
	Button,
	Checkbox,
	Heading,
	Divider,
	Text,
} from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupCongrats = () => {
	const navigate = useNavigate();
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<Heading fontSize="30px" my="10px" color="#0066EE" as="b">
						Congratulations!
					</Heading>
					<Text as="b" my="10px" align="center" fontSize="lg">
						Your daily net calorie goal is:
					</Text>
					<Text mb="10px" align="center" as="b" fontSize="4xl">
						1500
					</Text>
					<Text my="10px" align="center" as="b" fontSize="lg" color="#0066EE">
						calories
					</Text>

					<Text mt="40px" align="center" fontSize="16px" color="#A0A0A0">
						With this plan, you should:
					</Text>
					<Text align="center" as="b" fontSize="lg">
						Lose 5 kg{" "}
						<span style={{ color: "#A0A0A0", fontSize: "16px" }}>by</span>{" "}
						November 2
					</Text>

					<Divider my="20px" />

					<Checkbox>Sign up for emails</Checkbox>
					<Text my="10px" align="center" fontSize="sm" color="#A0A0A0">
						Get recipes, workouts, and nutrition & fitness tips from
						MyFitnessPal experts. Plus, a first look at new features!
					</Text>

					<Button bg="#0066EE" color="white" fontSize="18px" mt="20px" onClick={()=>navigate("/login")}>
						EXPLORE MYFITNESSPAL
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupCongrats;

// /signupCongrats
