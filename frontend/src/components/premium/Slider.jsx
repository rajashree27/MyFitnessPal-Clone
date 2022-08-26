import { Box, Button, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
// import style from "./Slider.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import sliderImg1 from "../../assets/sliderImage1.webp";
import sliderImg2 from "../../assets/sliderImage2.webp";
import sliderImg3 from "../../assets/sliderImage3.webp";
import sliderImg4 from "../../assets/sliderImage4.webp";
import sliderImg5 from "../../assets/sliderImage5.webp";
import sliderImg6 from "../../assets/sliderImage6.webp";

const Slider = () => {
	let arr;

	const [toggle, setToggle] = useState(0);

	let toggleCount = () => {
		if (toggle === 0) setToggle(1);
		else setToggle(0);
	};

	if (toggle === 0) {
		arr = [
			{
				id: 1,
				img: sliderImg1,
				text1: "Na'Quisha",
				text2: "It truly changed my life and helped in my weight loss journey.",
			},
			{
				id: 2,
				img: sliderImg2,
				text1: "Eric",
				text2:
					"Once I lost 10 pounds, then another 10 pounds, it blew me away.",
			},
			{
				id: 3,
				img: sliderImg3,
				text1: "Molly",
				text2: "I love the app because it allows for balance.",
			},
		];
	} else if (toggle === 1) {
		arr = [
			{
				id: 1,
				img: sliderImg4,
				text1: "Matt",
				text2:
					"I loved MyFitnessPal. Gives you a basic rundown of how many calories you needed to lose fat.",
			},
			{
				id: 2,
				img: sliderImg5,
				text1: "Eden",
				text2:
					"MyFitnessPal alerted me every day, and that became a reminder to live a healthy life.",
			},
			{
				id: 3,
				img: sliderImg6,
				text1: "Tim",
				text2:
					"Keep tracking and you'll find that you'll be able to do more than you could before.",
			},
		];
	}

	return (
		<Box className="SliderContainer">
			<Button onClick={toggleCount} className="">
				<MdKeyboardArrowLeft />
			</Button>
			<Box className="sliderDataContainer">
				{arr.map((elem) => (
					<Box key={elem.id} className="sliderDataBox">
						<Img src={elem.img} alt="sliderImg" />
						<Text as="b">{elem.text1}</Text>
						<Text color="#696969">{elem.text2}</Text>
					</Box>
				))}
			</Box>
			<Button onClick={toggleCount}>
				<MdKeyboardArrowRight />
			</Button>
		</Box>
	);
};

export default Slider;
