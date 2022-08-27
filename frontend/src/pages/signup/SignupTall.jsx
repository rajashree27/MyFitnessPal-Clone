import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupTall = () => {
	const navigate = useNavigate();
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<Box className="tallSubBox">
						<Heading fontSize="20px" mb="10px">
							How tall are you?
						</Heading>
						<Flex gap="15px">
							<InputGroup>
								<Input placeholder="Enter height (feet)" w="265px" />
								<InputRightElement children={"ft"} />
							</InputGroup>
							<InputGroup>
								<Input placeholder="Enter height (inches)" w="265px" />
								<InputRightElement children={"ft"} />
							</InputGroup>
						</Flex>
					</Box>

					<Box className="tallSubBox">
						<Heading fontSize="20px" mb="10px">
							How much do you weigh?
						</Heading>
						<Text color="#A0A0A0" mb="10px">
							It's OK to estimate. You can update this later.
						</Text>
						<InputGroup>
							<Input placeholder="Enter weight (kg)" w="550px" />
							<InputRightElement children={"kg"} />
						</InputGroup>
					</Box>

					<Box className="tallSubBox">
						<Heading fontSize="20px" mb="10px">
							What's your goal weight?
						</Heading>
						<Text color="#A0A0A0" mb="10px">
							Don't worry. This doesn't affect your daily calorie goal and you
							can always change it later.
						</Text>
						<InputGroup>
							<Input placeholder="Enter weight (kg)" w="550px" />
							<InputRightElement children={"kg"} />
						</InputGroup>
					</Box>

					<Flex gap="20px">
						<Button colorScheme="blue" variant="outline" w="150px" fontSize="18px"
						onClick={() => navigate("/signupActivity")}>
							BACK
						</Button>
						<Button bg="#0066EE" color="white" w="150px" fontSize="18px" onClick={() => navigate("/signupWeekly")}>
							NEXT
						</Button>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default SignupTall;

// /signupTall
