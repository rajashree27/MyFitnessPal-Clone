import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "../../components/premium/Slider";
import "./PremiumStyles.css";

const VictoryStories = () => {
	return (
		<Box className="victoryStoriesSection">
			<Text fontSize="3xl" as="b">
				Victory Stories
			</Text>
			<Text fontSize="lg" color="#696969" mt="20px" mb="50px">
				Your victories are our victories and we want to share them with the
				world.
			</Text>
            <Slider />
		</Box>
	);
};

export default VictoryStories;
