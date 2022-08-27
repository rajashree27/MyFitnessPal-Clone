import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import SignupNavbar from "../../components/signup/SignupNavbar";
import "../signup/SignupStyles.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import NavbarPremium from "../premium/NavbarPremium";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../redux/auth/login/actionsLogin";

const Login = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
  
  const googleAuth = () => {
    window.open(`https://smooth-flavor-1645.herokuapp.com/google/callback`, "_self");
  };

	const [loginCreds, setLoginCreds] = useState({
		email: "",
		password: "",
	});

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLoginCreds({ ...loginCreds, [name]: value });
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log(loginCreds);
		dispatch(loginAPI(loginCreds));
	};

	const { isAuth } = useSelector((state) => state.login);

	useEffect(() => {
		if (isAuth) {
			navigate("/myHome");
		}
	}, [navigate, isAuth]);

	return (
		<>
			<NavbarPremium />
			<Box className="signupWrapper">
				<Box className="insideBox" h="fit-content" p="20px">
					<form action="submit" onSubmit={handleLoginSubmit}>
						<Box>
							<Heading fontSize="20px" my="10px">
								Member Login
							</Heading>
							<Input
								placeholder="Email Address"
								h="50px"
								my="20px"
								isRequired
								value={loginCreds.email}
								onChange={handleLoginChange}
								type="email"
								name="email"
							/>
							<Input
								placeholder="Password"
								h="50px"
								isRequired
								value={loginCreds.password}
								onChange={handleLoginChange}
								type="password"
								name="password"
							/>
							<Text
								color="blue"
								mb="10px"
								as="u"
								align="left"
								mt="5px"
								style={{ cursor: "pointer" }}
							>
								Forgot Password?
							</Text>
						</Box>

						<Box mt="40px">
							<Button
								bg="#0066EE"
								color="white"
								w="350px"
								fontSize="18px"
								mt="10px"
								type="submit"
							>
								LOG IN
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
                onClick={googleAuth}
							>
								CONTINUE WITH GOOGLE
							</Button>
						</Box>
					</form>
				</Box>

				<Text color="#A0A0A0" my="10px" align="center" fontSize="sm">
					Not a member?{" "}
					<span
						style={{ color: "blue", cursor: "pointer" }}
						onClick={() => navigate("/signup")}
					>
						Sign Up now
					</span>
				</Text>
			</Box>
		</>
	);
};

export default Login;

// /login
