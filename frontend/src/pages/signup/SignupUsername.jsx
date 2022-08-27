import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupUsername = () => {
	const navigate = useNavigate();
	const ref = useRef();

	const handleUsernameClick = () => {
		if (ref.current.value) {
			console.log(ref.current.value);
			localStorage.setItem("username", JSON.stringify(ref.current.value));
			navigate("/signupCreateAccount");
		} else {
			alert("Please fill the username");
		}
	};

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
						ref={ref}
					/>

					<Flex gap="20px" mt="100px">
						<Button
							colorScheme="blue"
							color="#0066EE"
							variant="outline"
							w="150px"
							fontSize="18px"
							onClick={() => navigate("/signupWeekly")}
						>
							BACK
						</Button>
						<Button
							bg="#0066EE" color="white"
							w="150px"
							fontSize="18px"
							onClick={handleUsernameClick}
						>
							CONTINUE
						</Button>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default SignupUsername;

// /signupUsername
