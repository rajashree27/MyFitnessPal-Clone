import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupActivity = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/signupPleaseSelect");
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
						w="400px"
						my="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left" w="100%">
							<Text fontSize="18px" color="	#606060">
								Not Very Active
							</Text>
							<Text fontSize="14px" color="	#888888">
								Spends most of the day sitting
							</Text>
							<Text fontSize="14px" color="	#888888">
								(e.g., bankteller, desk job)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						variant="outline"
						w="400px"
						mb="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left">
							<Text fontSize="18px" color="	#606060">
								Lightly Active
							</Text>
							<Text fontSize="14px" color="	#888888">
								Spends a considerably good part of the day on your feet
							</Text>
							<Text fontSize="14px" color="	#888888">
								(e.g., teacher, salesperson)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						variant="outline"
						w="400px"
						mb="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left">
							<Text fontSize="18px" color="	#606060">
								Active
							</Text>
							<Text fontSize="14px" color="	#888888">
								Spend a good part of the day doing some physical activity
							</Text>
							<Text fontSize="14px" color="	#888888">
								(e.g., food server, postal carrier)
							</Text>
						</Box>
					</Button>

					<Button
						colorScheme="black"
						variant="outline"
						w="400px"
						mb="20px"
						h="fit-content"
						onClick={handleClick}
					>
						<Box p="5px" textAlign="left">
							<Text fontSize="18px" color="	#606060">
								Very Active
							</Text>
							<Text fontSize="14px" color="	#888888">
								Spend a good part of the day doing heavy physical activity
							</Text>
							<Text fontSize="14px" color="	#888888">
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
