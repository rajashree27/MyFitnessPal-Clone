import { Box, Button, Divider, Image } from "@chakra-ui/react";
import React from "react";
import "../../pages/premium/PremiumStyles.css";
import fitnesLogo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const NavbarPremium = () => {
	const navigate = useNavigate();

	return (
		<Box className="PremiumNavbar">
			<Box className="navBarTop">
				<Image src={fitnesLogo} onClick={() => navigate("/")} />
				<Box className="loginSignupButtons">
					<Button
						variant="ghost"
						color="#0066EE"
						onClick={() => navigate("/login")}
					>
						Log In
					</Button>
					<Divider orientation="vertical" />
					<Button
						variant="ghost"
						color="#0066EE"
						onClick={() => navigate("/signup")}
					>
						Sign Up
					</Button>
				</Box>
			</Box>
			<Box className="navBarBottom">
				<Box onClick={() => navigate("/")}>ABOUT</Box>
				<Box>FOOD</Box>
				<Box>EXERCISE</Box>
				<Box>APPS</Box>
				<Box>COMMUNITY</Box>
				<Box>BLOG</Box>
				<Box onClick={() => navigate("/premium")}>PREMIUM</Box>
			</Box>
		</Box>
	);
};

export default NavbarPremium;
