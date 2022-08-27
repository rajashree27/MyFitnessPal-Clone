import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBreakfast,
  getDinner,
  getLunch,
  getSnack,
} from "../redux/app/action";

const TotalCal = () => {
  let totalBreakfastCalories = 0;
  let totalBreakfastCarbs = 0;
  let totalBreakfastFat = 0;
  let totalBreakfastProtein = 0;
  let totalBreakfastSodium = 0;
  let totalBreakfastSugar = 0;

  let totalLunchCalories = 0;
  let totalLunchCarbs = 0;
  let totalLunchFat = 0;
  let totalLunchProtein = 0;
  let totalLunchSodium = 0;
  let totalLunchSugar = 0;

  let totalDinnerCalories = 0;
  let totalDinnerCarbs = 0;
  let totalDinnerFat = 0;
  let totalDinnerProtein = 0;
  let totalDinnerSodium = 0;
  let totalDinnerSugar = 0;

  let totalSnackCalories = 0;
  let totalSnackCarbs = 0;
  let totalSnackFat = 0;
  let totalSnackProtein = 0;
  let totalSnackSodium = 0;
  let totalSnackSugar = 0;

  const dispatch = useDispatch();
  const dailyGoal = [1500, 188, 50, 75, 2300, 56];

  const { isLoading, breakfasts, lunch, dinner, snack } = useSelector(
    (state) => state.appReducer
  );
  console.log(breakfasts, lunch, dinner, snack);

  breakfasts.map((ele) => {
    totalBreakfastCalories += Number(ele.calories);
    totalBreakfastCarbs += Number(ele.carbs);
    totalBreakfastFat += Number(ele.fat);
    totalBreakfastProtein += Number(ele.protein);
    totalBreakfastSodium += Number(ele.sodium);
    totalBreakfastSugar += Number(ele.sugar);
  });

  lunch.map((ele) => {
    totalLunchCalories += Number(ele.calories);
    totalLunchCarbs += Number(ele.carbs);
    totalLunchFat += Number(ele.fat);
    totalLunchProtein += Number(ele.protein);
    totalLunchSodium += Number(ele.sodium);
    totalLunchSugar += Number(ele.sugar);
  });

  dinner.map((ele) => {
    totalDinnerCalories += Number(ele.calories);
    totalDinnerCarbs += Number(ele.carbs);
    totalDinnerFat += Number(ele.fat);
    totalDinnerProtein += Number(ele.protein);
    totalDinnerSodium += Number(ele.sodium);
    totalDinnerSugar += Number(ele.sugar);
  });

  snack.map((ele) => {
    totalSnackCalories += Number(ele.calories);
    totalSnackCarbs += Number(ele.carbs);
    totalSnackFat += Number(ele.fat);
    totalSnackProtein += Number(ele.protein);
    totalSnackSodium += Number(ele.sodium);
    totalSnackSugar += Number(ele.sugar);
  });

  let totalCalories =
    totalBreakfastCalories +
    totalLunchCalories +
    totalDinnerCalories +
    totalSnackCalories;
  let totalCarbs =
    totalBreakfastCarbs + totalLunchCarbs + totalDinnerCarbs + totalSnackCarbs;
  let totalFat =
    totalBreakfastFat + totalLunchFat + totalDinnerFat + totalSnackFat;
  let totalProtein =
    totalBreakfastProtein +
    totalLunchProtein +
    totalDinnerProtein +
    totalSnackProtein;
  let totalSodium =
    totalBreakfastSodium +
    totalLunchSodium +
    totalDinnerSodium +
    totalSnackSodium;
  let totalSugar =
    totalBreakfastSugar + totalLunchSugar + totalDinnerSugar + totalSnackSugar;

  let remainingCalories = dailyGoal[0] - totalCalories;
  let remainingCarbs = dailyGoal[1] - totalCarbs;
  let remainingFat = dailyGoal[2] - totalFat;
  let remainingProtein = dailyGoal[3] - totalProtein;
  let remainingSodium = dailyGoal[4] - totalSodium;
  let remainingSugar = dailyGoal[5] - totalSugar;

  useEffect(() => {
    dispatch(getBreakfast());
    dispatch(getLunch());
    dispatch(getDinner());
    dispatch(getSnack());
  }, [dispatch]);

  return (
    <>
      <Flex width={"90%"} margin={"auto"} mt={5}>
        <Box w={"10%"}></Box>
        <Flex w={"90%"} gap={"1"}>
          <Box w={"30%"} textAlign="right" p="1">
            <Text fontWeight={"semibold"}>Totals</Text>
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {totalCalories}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {totalCarbs}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {totalFat}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {totalProtein}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {totalSodium}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {totalSugar}
          </Box>
        </Flex>
      </Flex>
      <Flex width={"90%"} margin={"auto"} mt={1}>
        <Box w={"10%"}></Box>
        <Flex w={"90%"} gap={"1"} textAlign="center" fontWeight={"semibold"}>
          <Box w={"30%"} textAlign="right" p="1">
            <Text>Your Daily Goal</Text>
          </Box>
          {dailyGoal.map((el) => (
            <Box w={"12%"} bg="#f6f6f6" p="1">
              {el}
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex width={"90%"} margin={"auto"} mt={1}>
        <Box w={"10%"}></Box>
        <Flex w={"90%"} gap={"1"}>
          <Box w={"30%"} textAlign="right" p="1">
            <Text fontWeight={"semibold"}>Remaining</Text>
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {remainingCalories}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {remainingCarbs}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {remainingFat}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {remainingProtein}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {remainingSodium}
          </Box>
          <Box
            w={"12%"}
            bg="#f6f6f6"
            p="1"
            textAlign={"center"}
            fontWeight="semibold"
          >
            {remainingSugar}
          </Box>
        </Flex>
      </Flex>
      <Flex width={"90%"} margin={"auto"} mt={1}>
        <Box w={"10%"}></Box>
        <Flex
          w={"90%"}
          gap={"1"}
          textAlign="center"
          fontSize={{ base: "8px", md: "12px", lg: "14px" }}
          fontWeight="bold"
        >
          <Box w={"30%"} textAlign="right" p="1"></Box>
          <Box
            backgroundColor={"#00548f"}
            w="12%"
            pt={"1"}
            pb={"1"}
            lineHeight="1"
          >
            <span style={{ color: "white" }}>Calories</span>
            <br />
            <span style={{ color: "#a4c2d6" }}>kcal</span>
          </Box>
          <Box
            backgroundColor={"#00548f"}
            w="12%"
            pt={"1"}
            pb={"1"}
            lineHeight="1"
          >
            <span style={{ color: "white" }}>Carbs</span>
            <br />
            <span style={{ color: "#a4c2d6" }}>g</span>
          </Box>
          <Box
            backgroundColor={"#00548f"}
            w="12%"
            pt={"1"}
            pb={"1"}
            lineHeight="1"
          >
            <span style={{ color: "white" }}>Fat</span>
            <br />
            <span style={{ color: "#a4c2d6" }}>g</span>
          </Box>
          <Box
            backgroundColor={"#00548f"}
            w="12%"
            pt={"1"}
            pb={"1"}
            lineHeight="1"
          >
            <span style={{ color: "white" }}>Protein</span>
            <br />
            <span style={{ color: "#a4c2d6" }}>g</span>
          </Box>
          <Box
            backgroundColor={"#00548f"}
            w="12%"
            pt={"1"}
            pb={"1"}
            lineHeight="1"
          >
            <span style={{ color: "white" }}>Sodium</span>
            <br />
            <span style={{ color: "#a4c2d6" }}>mg</span>
          </Box>
          <Box
            backgroundColor={"#00548f"}
            w="12%"
            pt={"1"}
            pb={"1"}
            lineHeight="1"
          >
            <span style={{ color: "white" }}>Sugar</span>
            <br />
            <span style={{ color: "#a4c2d6" }}>g</span>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default TotalCal;
