import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupActivity = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/signupTall");
	};
	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<Heading fontSize="25px">
						What is your baseline activity level?
					</Heading>
					<Text color="gray" mb="20px">
						Not including workouts–we count that separately
					</Text>

					<Button
						colorScheme="black"
						variant="outline"
						borderColor="#0066EE"
						w="400px"
						my="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left" w="100%">
							<Text fontSize="18px" color="#0066EE">
								Not Very Active
							</Text>
							<Text fontSize="14px" color="#909090">
								Spends most of the day sitting
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., bankteller, desk job)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						variant="outline"
						borderColor="#0066EE"
						w="400px"
						mb="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left">
							<Text fontSize="18px" color="#0066EE">
								Lightly Active
							</Text>
							<Text fontSize="14px" color="#909090">
								Spends a considerably good part of the day on your feet
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., teacher, salesperson)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						variant="outline"
						borderColor="#0066EE"
						w="400px"
						mb="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left">
							<Text fontSize="18px" color="#0066EE">
								Active
							</Text>
							<Text fontSize="14px" color="#909090">
								Spend a good part of the day doing some physical activity
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., food server, postal carrier)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						borderColor="#0066EE"
						variant="outline"
						w="400px"
						mb="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left">
							<Text fontSize="18px" color="#0066EE">
								Very Active
							</Text>
							<Text fontSize="14px" color="#909090">
								Spend a good part of the day doing heavy physical activity
							</Text>
							<Text fontSize="14px" color="#909090">
								(e.g., bike messenger, carpenter)
							</Text>
						</Box>
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignupActivity;

// /signupActivity
