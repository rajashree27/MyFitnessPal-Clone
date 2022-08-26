import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const GoPremium = () => {
	return (
		<Box className="GoPremiumSection">
			<Box className="premiumYellowBox premiumYellowBoxFAQ" w="fit-content">
				1-MONTH FREE
			</Box>
			<Text fontSize="3xl" as="b">
				Go Premium, Get Results
			</Text>
			<Text fontSize="sm" color="#696969" mt="20px">
				Choose a MyFitnessPal Premium plan to start your 1-month free trial.
			</Text>
			<Text fontSize="sm" color="#696969">
				You will be charged after the trial has ended—cancel anytime.
			</Text>

			<Box className="annualMonthlyBoxes">
				<Box className="annualBox">
					<Box bgColor="gold">
						<Text as="b" fontSize="lg" >
							SAVE 58%
						</Text>
					</Box>
					<Text as="b" fontSize="lg">
						ANNUAL
					</Text>
					<br />
					<Text as="b" fontSize="3xl">
						₹3,100.00{" "}
						<span style={{ fontSize: "14px", color: "#696969" }}>Per Year</span>
					</Text>
					<Text color="#696969"  mt="20px">₹3,100.00 billed yearly after free trial ends.</Text>
					<Button bg="#0066EE" color="white" w="250px" mt="30px">SUBSCRIBE</Button>
				</Box>

				<Box className="monthlyBox">
					<Text as="b" fontSize="lg">
						MONTHLY
					</Text>
					<br />
					<Text as="b" fontSize="3xl">
						₹620.00{" "}
						<span style={{ fontSize: "14px", color: "#696969" }}>
							Per Month
						</span>
					</Text>
					<Text color="#696969" mt="20px">₹620.00 billed monthly after free trial ends.</Text>
					<Button variant='outline' color="#0066EE" w="250px" mt="30px">SUBSCRIBE</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default GoPremium;
