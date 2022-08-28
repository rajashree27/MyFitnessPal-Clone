import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Headertop from "../../components/Headertop";
import "./Estyle.css";
//import ad1 from "../assests/food-ad1.PNG";
//import ad2 from "../assests/food-ad2.PNG";

const Exercise = () => {
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
			<div>
				<img
					src="https://julmsejung.com/web-banner/images/horizontal.png"
					alt=""
					className="add1"
				/>
				<div className="abcd">
					<div className="fullpage">
						<div className="section1">
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
						</div>
						<div className="line"></div>
						<div className="table">
							<table>
								<tr>
									<th className="a">Cardiovascular</th>
									<th className="b">Minutes</th>
									<th className="b">Calories Burned</th>
								</tr>
							</table>
						</div>
						<div className="table3">
							<div className="table2">
								<button>Add Exercise</button>
								<div>|</div>
								<button>Quick Tools</button>
							</div>
						</div>
						<div className="talika">
							<table>
								<tr>
									<th className="x">Daily Total / Goal</th>
									<th className="y">0/0</th>
									<th className="y">0/0</th>
								</tr>
							</table>
						</div>

						<div className="talika">
							<table>
								<tr>
									<th className="x">Weekly Total / Goa</th>
									<th className="y">13/0</th>
									<th className="y">248/0</th>
								</tr>
							</table>
						</div>
						<div className="line1"></div>
						<div className="line1"></div>
						<div className="table">
							<table>
								<tr>
									<th className="a">Strength Training</th>
									<th className="b">Sets</th>
									<th className="b"> Reps/Set</th>
									<th className="b"> Weight/Set</th>
								</tr>
							</table>
						</div>
						<div className="table3">
							<div className="table2">
								<button>Add Exercise</button>
								<div>|</div>
								<button>Quick Tools</button>
							</div>
						</div>
						<div className="last">
							<p>Today's Exercise Notes</p>
							<input type="text" className="nput" />
						</div>
					</div>
					<img
						src="https://st2.depositphotos.com/5544578/8976/v/950/depositphotos_89763874-stock-illustration-click-here-vertical-advertising-banner.jpg"
						alt=""
						className="add2"
					/>
				</div>
			</div>
      <Footer />
		</>
	);
};

export default Exercise;
