import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import ad1 from "../assests/food-ad1.PNG";
import ad2 from "../assests/food-ad2.PNG";

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
    <Box
      className="main"
      w={{ base: "100%", md: "80%", lg: "60%" }}
      m={"auto"}
      height="100vh"
      p={{ base: "3", md: "4", lg: "5" }}
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
                <Box w={"15%"} textAlign="center" fontSize={"24px"} color="#666666">
                  <i className="fa-solid fa-calendar-days"></i>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Box background={"#e6e6e6"} h="2px" mt={{base: "2", md: 3, lg: 3}}></Box>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default Food;
