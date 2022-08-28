import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import ad1 from "../assests/food-ad1.PNG";
import ad2 from "../assests/food-ad2.PNG";
import BreakfastCell from "../components/BreakfastCell";
import DinnerCell from "../components/DinnerCell";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Headertop from "../components/Headertop";
import LunchCell from "../components/LunchCell";
import SnackCell from "../components/SnackCell";
import TotalCal from "../components/TotalCal";
import NavbarPremium from "./premium/NavbarPremium";

const Food = () => {
	const [todayDate, setTodayDate] = useState("");
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	let date = today.toDateString();
	// to return the date number(1-31) for the specified date

	//returns the tomorrow date
	// console.log("tomorrow => ",tomorrow.toDateString())

	const handleTomorrowDate = () => {
		let tomorrow = new Date();
		tomorrow.setDate(today.getDate() + 1);
		date = tomorrow.toDateString();
	};
	return (
		<>
			<Headertop />
			<Header />
			{/* <NavbarPremium /> */}
			<Box
				className="main"
				w={{ base: "100%", md: "80%", lg: "65%" }}
				m={"auto"}
				height="100vh"
				p={{ base: "3", md: "4", lg: "5" }}
				style={{height:"fit-content"}}
			>
				<Flex>
					<Box w={{ base: "80%", md: "80%", lg: "80%" }}>
						<Image src={ad1} />
					</Box>
					<Box></Box>
				</Flex>
				<Flex>
					<Box w={{ base: "80%", md: "80%", lg: "80%" }} mt={["2", "3", "4"]}>
						<Flex alignItems="center" p={"2"} gap="2">
							<Box w={{ base: "40%", md: "40%", lg: "30%" }}>
								<Text
									fontSize={{ base: "12px", md: "14px", lg: "20px" }}
									color={"#746186"}
									fontWeight="bold"
								>
									Your Food Diary For:
								</Text>
							</Box>
							<Box w={{ base: "60%", md: "60%", lg: "70%" }}>
								<Flex
									justifyContent="flex-start"
									fontSize={{ base: "14px", md: "16px", lg: "20px" }}
									w="70%"
									gap="2px"
									alignItems={"center"}
								>
									<Box
										p={"2"}
										w={"10%"}
										textAlign={"center"}
										color={"white"}
										backgroundColor={"#00548f"}
										borderTopLeftRadius="5"
										borderBottomLeftRadius={"5"}
									>
										<i className="fa-solid fa-caret-left"></i>
									</Box>
									<Box
										p={"2"}
										w={"70%"}
										textAlign="center"
										color={"white"}
										backgroundColor={"#00548f"}
										borderRadius="3"
									>
										{date}
									</Box>
									<Box
										p={"2"}
										w={"10%"}
										textAlign={"center"}
										onClick={handleTomorrowDate}
										color={"white"}
										backgroundColor={"#00548f"}
										borderTopRightRadius={"5"}
										borderBottomRightRadius={"5"}
									>
										<i class="fa-solid fa-caret-right"></i>
									</Box>
									<Box
										w={"15%"}
										textAlign="center"
										fontSize={"24px"}
										color="#666666"
									>
										<i className="fa-solid fa-calendar-days"></i>
									</Box>
								</Flex>
							</Box>
						</Flex>
						<Box
							background={"#e6e6e6"}
							h="2px"
							mt={{ base: "2", md: 3, lg: 3 }}
						></Box>
						<Flex mt={"5"}>
							<Box width={"35%"}>
								<Heading as={"h2"} size={"md"} color={"#18689a"} mt="3">
									Breakfast
								</Heading>
							</Box>
							<Flex
								w={"65%"}
								gap={"3px"}
								fontSize={{ base: "8px", md: "10px", lg: "12px" }}
								fontWeight="bold"
								textAlign={"center"}
							>
								<Box
									backgroundColor={"#00548f"}
									w="14%"
									pt={"2"}
									pb={"2"}
									lineHeight="1.5"
								>
									<span style={{ color: "white" }}>Calories</span>
									<br />
									<span style={{ color: "#a4c2d6" }}>kcal</span>
								</Box>
								<Box
									backgroundColor={"#00548f"}
									w="14%"
									pt={"2"}
									pb={"2"}
									lineHeight="1.5"
								>
									<span style={{ color: "white" }}>Carbs</span>
									<br />
									<span style={{ color: "#a4c2d6" }}>g</span>
								</Box>
								<Box
									backgroundColor={"#00548f"}
									w="14%"
									pt={"2"}
									pb={"2"}
									lineHeight="1.5"
								>
									<span style={{ color: "white" }}>Fat</span>
									<br />
									<span style={{ color: "#a4c2d6" }}>g</span>
								</Box>
								<Box
									backgroundColor={"#00548f"}
									w="14%"
									pt={"2"}
									pb={"2"}
									lineHeight="1.5"
								>
									<span style={{ color: "white" }}>Protein</span>
									<br />
									<span style={{ color: "#a4c2d6" }}>g</span>
								</Box>
								<Box
									backgroundColor={"#00548f"}
									w="14%"
									pt={"2"}
									pb={"2"}
									lineHeight="1.5"
								>
									<span style={{ color: "white" }}>Sodium</span>
									<br />
									<span style={{ color: "#a4c2d6" }}>mg</span>
								</Box>
								<Box
									backgroundColor={"#00548f"}
									w="14%"
									pt={"2"}
									pb={"2"}
									lineHeight="1.5"
								>
									<span style={{ color: "white" }}>Sugar</span>
									<br />
									<span style={{ color: "#a4c2d6" }}>g</span>
								</Box>
								<Box w="14%" pt={"2"} pb={"2"} lineHeight="1.5"></Box>
							</Flex>
						</Flex>
						<BreakfastCell />
						<Box>
							<hr />
						</Box>
						<Box width={"35%"}>
							<Heading as={"h2"} size={"md"} color={"#18689a"} mt="3">
								Lunch
							</Heading>
						</Box>
						<LunchCell />
						<Box>
							<hr />
						</Box>
						<Box width={"35%"}>
							<Heading as={"h2"} size={"md"} color={"#18689a"} mt="3">
								Dinner
							</Heading>
						</Box>
						<DinnerCell />
						<Box>
							<hr />
						</Box>
						<Box width={"35%"}>
							<Heading as={"h2"} size={"md"} color={"#18689a"} mt="3">
								Snack
							</Heading>
						</Box>
						<SnackCell />
						<Box>
							<hr />
						</Box>
						<TotalCal />
					</Box>
					<Box w={{ base: "0", md: "15%", lg: "20%" }}>
						<Image src={ad2} />
					</Box>
				</Flex>
			</Box>
			<Footer />
		</>
	);
};

export default Food;
