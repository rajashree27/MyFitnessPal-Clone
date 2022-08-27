import {

	Box,
	Button,
	Heading,
	Input,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAPI } from "../../redux/auth/register/actionsRegister";

const SignupCreateAcc = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	

	const [regCreds, setRegCreds] = useState({
		email: "",
		password: "",
		username: JSON.parse(localStorage.getItem("username"))
	});

	const handleRegChange = (e) => {
		const { name, value } = e.target;
		setRegCreds({
			...regCreds,
			[name]: value,
		});
	};

	const handleRegFormSubmit = (e) => {
		e.preventDefault();
		console.log(regCreds)
		dispatch(registerAPI(regCreds));
		// console.log(regCreds);
	};

	
	const { isReg } = useSelector((state) => state.register);
  
   const googleAuth = () => {
    window.open("https://smooth-flavor-1645.herokuapp.com/google/callback", "_self");
  };

	useEffect(() => {
		if (isReg) navigate("/signupCongrats");
	}, [navigate, isReg]);

	return (
		<>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<form action="submit" onSubmit={handleRegFormSubmit}>
						<Box>
							<Heading fontSize="20px" my="10px">
								Almost there! Create your account.
							</Heading>

							<Input
								placeholder="Email Address"
								h="50px"
								my="20px"
								isRequired
								type="email"
								name="email"
								value={regCreds.email}
								onChange={handleRegChange}
							/>
							<Input
								placeholder="Create a password"
								h="50px"
								isRequired
								type="password"
								name="password"
								value={regCreds.password}
								onChange={handleRegChange}
							/>

							<Text color="#A0A0A0" mb="10px" align="left" mt="5px">
								Must be at least 10 characters, no spaces.
							</Text>
						</Box>

						<Box mt="40px">
							<Text color="#A0A0A0" align="left" mt="5px">
								By signing up for MyFitnessPal, you are agreeing to our
							</Text>
							<Text
								color="blue"
								mb="10px"
								align="center"
								style={{ cursor: "pointer" }}
							>
								Privacy Policy <span style={{ color: "#A0A0A0" }}>and</span>{" "}
								Terms.
							</Text>
							<Button
								bg="#0066EE"
								color="white"
								w="350px"
								fontSize="18px"
								mt="10px"
								// onClick={handleCreateAccountClick}
								type="submit"
							>
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
								color="#0066EE"
                onClick={googleAuth}
							>
								CONTINUE WITH GOOGLE
							</Button>

							<Text color="#A0A0A0" my="10px" align="center" fontSize="sm">
								We will never post anything without your permission
							</Text>
							<Text color="#A0A0A0" align="center" fontSize="xs">
								This site is protected by reCAPTCHA and the Google{" "}
								<span style={{ color: "blue", cursor: "pointer" }}>
									Privacy Policy
								</span>
							</Text>
							<Text color="#A0A0A0" mb="10px" align="center" fontSize="xs">
								and{" "}
								<span style={{ color: "blue", cursor: "pointer" }}>Terms</span>{" "}
								apply
							</Text>
						</Box>
					</form>
				</Box>
			</Box>
		</>
	);

};

export default SignupCreateAcc;

// /signupCreateAccount
