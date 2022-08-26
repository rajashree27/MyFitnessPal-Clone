import {
	Box,
	Button,
	Heading,
	Input,
	Text,
} from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { FcGoogle } from "react-icons/fc";

const SignupCreateAcc = () => {
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<Box>
						<Heading fontSize="20px" my="10px">
							Almost there! Create your account.
						</Heading>
						<Input placeholder="Email Address" h="50px" my="20px" isRequired />
						<Input placeholder="Create a password" h="50px" isRequired />
						<Text color="#A0A0A0" mb="10px" align="left" mt="5px">
							Must be at least 10 characters, no spaces.
						</Text>
					</Box>

					<Box mt="40px">
						<Text color="#A0A0A0" align="left" mt="5px">
							By signing up for MyFitnessPal, you are agreeing to our
						</Text>
						<Text color="blue" mb="10px" align="center">
							Privacy Policy <span style={{ color: "#A0A0A0" }}>and</span>{" "}
							Terms.
						</Text>
						<Button colorScheme="blue" w="350px" fontSize="18px" mt="10px">
							CONTINUE
						</Button>
						<Text color="#A0A0A0" mb="10px" align="center">
							or
						</Text>
						<Button
							leftIcon={<FcGoogle />}
							colorScheme="blue"
							variant="outline"
							w="350px"
						>
							CONTINUE WITH GOOGLE
						</Button>
						<Text color="#A0A0A0" my="10px" align="center" fontSize="sm">
							We will never post anything without your permission
						</Text>
						<Text color="#A0A0A0" align="center" fontSize="xs">
							This site is protected by reCAPTCHA and the Google{" "}
							<span style={{ color: "blue" }}>Privacy Policy</span>
						</Text>
						<Text color="#A0A0A0" mb="10px" align="center" fontSize="xs">
							and <span style={{ color: "blue" }}>Terms</span> apply
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default SignupCreateAcc;

// /signupCreateAccount
