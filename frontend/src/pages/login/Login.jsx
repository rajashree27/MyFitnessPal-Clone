import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
// import SignupNavbar from "../../components/signup/SignupNavbar";
import "../signup/SignupStyles.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
	return (
		<>
			{/* <SignupNavbar /> */}
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<Box>
						<Heading fontSize="20px" my="10px">
							Member Login
						</Heading>
						<Input placeholder="Email Address" h="50px" my="20px" isRequired />
						<Input placeholder="Password" h="50px" isRequired />
						<Text color="blue" mb="10px" as="u" align="left" mt="5px">
							Forgot Password?
						</Text>
					</Box>

					<Box mt="40px">
						<Button colorScheme="blue" w="350px" fontSize="18px" mt="10px">
							LOGIN
						</Button>
						<Text color="#A0A0A0" mb="10px" align="center">
							or
						</Text>
						<Button
							leftIcon={<FcGoogle />}
							colorScheme="blue"
							variant="outline"
							w="350px"
              mb="20px"
						>
							CONTINUE WITH GOOGLE
						</Button>
					</Box>
				</Box>
				<Text color="#A0A0A0" my="10px" align="center" fontSize="sm">
					Not a member? <span style={{ color: "blue" }}>Sign Up now</span>
				</Text>
			</Box>
		</>
	);
};

export default Login;

// /login
