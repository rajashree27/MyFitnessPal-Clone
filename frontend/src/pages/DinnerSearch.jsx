import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ad1 from "../assests/food-ad1.PNG";
import ad2 from "../assests/food-ad2.PNG";
import { addBreakfast, addDinner } from "../redux/app/action";
import { useNavigate } from "react-router-dom";
import NavbarPremium from "./premium/NavbarPremium";

const DinnerSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://myfitnesspalclone17.herokuapp.com/foods?q=${query}`)
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  };

  const addDinnerHandler = (dinner) => {
    dispatch(addDinner(dinner));
    navigate("/foods");
  };

  return (
    <>
      <NavbarPremium />
      <Box
        className="main"
        w={{ base: "100%", md: "80%", lg: "65%" }}
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
            <Box m={"2"}>
              <Text
                fontSize={{ base: "12px", md: "14px", lg: "20px" }}
                color={"#746186"}
                fontWeight="bold"
              >
                Add Food To Dinner
              </Text>
            </Box>
            <Box>
              <hr />
            </Box>
            <Box mt={"5"}>
              <Text fontWeight={"semibold"}>
                Search our food database by name
              </Text>
            </Box>
            <Flex w={"80%"} gap={2} mt={2}>
              <Input value={query} onChange={(e) => setQuery(e.target.value)} />
              <Button
                w={"120px"}
                color={"#fff"}
                bg={"#62c462"}
                fontWeight="light"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Flex>
            {foods.length > 0 && (
              <>
                <Box
                  mt={"5"}
                  w={"90%"}
                  fontSize={{ base: "12px", md: "14px", lg: "20px" }}
                  color={"#746186"}
                  fontWeight="bold"
                >
                  Matching Foods:
                </Box>
                <Flex w={"90%"} gap="5">
                  <Box border={"1px solid"} w="60%">
                    {foods.map((el) => (
                      <Box
                        borderBottom={"1px solid"}
                        w="95%"
                        m={"auto"}
                        p="1"
                        onClick={() => addDinnerHandler(el)}
                        cursor="pointer"
                      >
                        <Box
                          fontSize={"small"}
                          fontWeight="light"
                          color={"blue"}
                        >
                          {el.name}
                        </Box>
                        <Box
                          fontSize={"small"}
                          fontWeight="light"
                          color={"#bcbbbb"}
                        >
                          {el.calories} calories
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box w="40%"></Box>
                </Flex>
              </>
            )}
          </Box>
          <Box w={{ base: "0", md: "15%", lg: "20%" }}>
            <Image src={ad2} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DinnerSearch;
