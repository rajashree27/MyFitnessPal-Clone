import React from "react";
import "./PremiumStyles.css";
import optionGrid1 from "../../assets/optionGrid1.webp";
import optionGrid2 from "../../assets/optionGrid2.webp";
import optionGrid3 from "../../assets/optionGrid3.webp";
import { Box, Image, Text } from "@chakra-ui/react";
import "./PremiumStyles.css";

const arr = [
	{
		img: optionGrid1,
		title: "Meal Plans & Recipes",
		desc: "Gain insight into your nutrition",
	},
	{
		img: optionGrid2,
		title: "Personalized Goals",
		desc: "Get guidance & coaching tailored to you",
	},
	{
		img: optionGrid3,
		title: "Ad-Free Experience",
		desc: "Focus on your goals without distraction",
	},
];

const OptionsGrid = () => {
	return (
		<Box className="gridOptions">
			{arr.map((el,id) => {
				return (
					<Box key={id}>
						<Box alignItems="center">
							<Image src={el.img} />
						</Box>

						<Text fontSize="2xl" as="b">
							{el.title}
						</Text>
						<Text color="#696969" mt="5px">
							{el.desc}
						</Text>
					</Box>
				);
			})}
		</Box>
	);
};

export default OptionsGrid;
