import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSnack, getBreakfast, getSnack } from "../redux/app/action";

const SnackCell = () => {
  let cal = 0;
  let carbs = 0;
  let fat = 0;
  let protein = 0;
  let sodium = 0;
  let sugar = 0;
  const dispatch = useDispatch();
  const { isLoading, snack } = useSelector((state) => state.appReducer);
  console.log(snack);

  snack.map((ele) => {
    cal += Number(ele.calories);
    carbs += Number(ele.carbs);
    fat += Number(ele.fat);
    protein += Number(ele.protein);
    sodium += Number(ele.sodium);
    sugar += Number(ele.sugar);
  });

  const handleDeleteSnack = (payload) => {
    dispatch(deleteSnack(payload)).then(() => dispatch(getSnack()));
  };

  useEffect(() => {
    dispatch(getSnack());
  }, [dispatch]);
  return (
    <>
    
      {snack.map((ele) => (
        <Flex fontSize={"14px"} mt="1">
          <Box w={"35%"} backgroundColor={"#f6f6f6"} p={1}>
            {ele.name}
          </Box>
          <Flex w={"65%"} gap={"3px"} textAlign="center">
            <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
              {ele.calories}
            </Box>
            <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
              {ele.carbs}
            </Box>
            <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
              {ele.fat}
            </Box>
            <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
              {ele.protein}
            </Box>
            <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
              {ele.sodium}
            </Box>
            <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
              {ele.sugar}
            </Box>
            <Box
              w="14%"
              backgroundColor={"#f6f6f6"}
              p={1}
              cursor="pointer"
              onClick={() => handleDeleteSnack(ele._id)}
            >
              <i
                className="fa-solid fa-circle-minus"
                style={{ color: "red" }}
              ></i>
            </Box>
          </Flex>
        </Flex>
      ))}
      {/* <Box w={"35%"} backgroundColor={"#f6f6f6"} p={1}>
          Mango, 0.5 cup, pieces
        </Box> */}
      {/* <Flex w={"65%"} gap={"3px"} textAlign="center">
          <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
            50
          </Box>
          <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
            12
          </Box>
          <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
            0
          </Box>
          <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
            1
          </Box>
          <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
            1
          </Box>
          <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
            11
          </Box>
          <Box w="14%" backgroundColor={"#f6f6f6"} p={1}>
            <i
              className="fa-solid fa-circle-minus"
              style={{ color: "red" }}
            ></i>
          </Box>
        </Flex> */}
      <Flex fontSize={"14px"}>
        <Box w={"35%"} p={"1"}>
          <Flex color={"blue"} fontWeight="semibold" gap={"2"}>
            <Text>
              <Link to={"/snackSearch"}>Add Food</Link>
            </Text>
            <Text>|</Text>
            <Text>Quick Tools</Text>
          </Flex>
        </Box>
        <Flex w={"65%"} gap={"3px"} textAlign="center">
          <Box w="14%" p={"1"}>
            {cal}
          </Box>
          <Box w="14%" p={"1"}>
            {carbs}
          </Box>
          <Box w="14%" p={"1"}>
            {fat}
          </Box>
          <Box w="14%" p={"1"}>
            {protein}
          </Box>
          <Box w="14%" p={"1"}>
            {sodium}
          </Box>
          <Box w="14%" p={"1"}>
            {sugar}
          </Box>
          <Box w="14%" p={"1"}></Box>
        </Flex>
      </Flex>
    </>
  );
};

export default SnackCell;
