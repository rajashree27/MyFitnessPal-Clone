import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../styling/home.css";
import { Link } from "react-router-dom";

import diary from "../assests/diary.PNG";
import barcode from "../assests/barcode.PNG";
import shoe from "../assests/shoe.PNG";

import appStore from "../assests/app-store.PNG";
import googlePlay from "../assests/google-play.PNG";
import Carousel from "../components/Carousel";

import stephanie from "../assests/Stephanie.PNG";
import eric from "../assests/Eric.PNG";
import lori from "../assests/Lori.PNG";

const Home = () => {
  return (
    <Box>
      <Box className="top-section">
        <Box className="left-column">
          <Box height={"82.7%"} width="100%"></Box>
          <Box
            height={"17.3%"}
            width="100%"
            className="bottom-left-column"
          ></Box>
        </Box>
        <Box className="mid-column">
          <Box className="container">
            <Box className="heading">
              <Heading size={{base: "xl", sm: "2xl"}} as={"h1"}>
                Fitness starts with what you eat.
              </Heading>
            </Box>
            <Text className="description" fontSize={{base: "md", sm: "2xl", md: "2xl"}}>
              Take control of your goals. Track calories, break down
              ingredients, and long activities with MyFitnessPal.
            </Text>
            <Button colorScheme={"blue"} width={{base: "150px", md: "150px", lg: "200px"}} height="50">
              START FOR FREE
            </Button>

            <Text>
              Already have an account?{" "}
              <Link to={"#"}>
                <span style={{ color: "blue" }}>Login</span>
              </Link>
            </Text>
          </Box>
        </Box>
        <Box className="right-column"></Box>
      </Box>
      <Box className="second-section">
        <Box className="whiteLine"></Box>
        <Box className="second-section-heading">
          <Heading as={"h2"} size="2xl">
            Search over 11 million foods in our database.
          </Heading>
        </Box>
        <Box className="second-section-des">
          <Text fontSize={"xl"}>
            What's in your food? Learn about calories count, nutritions
            information and serving size.
          </Text>
        </Box>
      </Box>
      <Box className="third-section">
        <Box className="third-section-img">
          <Box className="input-box">
            <Box className="inner-input-box">
              <input placeholder="Get the nutrition for any food, like an apple" />
            </Box>
            <Box className="search-Icon">
              <SearchIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="fourth-section">
        <Box className="fourth-section-innerBox">
          <Box className="fourth-section-heading" mt={"16"}>
            <Heading as={"h3"} size={"2xl"}>
              The Tools for Your Goals
            </Heading>
          </Box>
          <Box className="fourth-section-des" mt={5}>
            <Text fontSize={"lg"}>
              Trying to lose weight, tone up, lower your BMI, or invest in your
              overall health? We give you the right features to hit your goals.
            </Text>
          </Box>
          <Flex m="16" gap={"40px"}>
            <Box>
              <Box>
                <Image src={diary} m={"auto"} />
              </Box>
              <Box m={2}>
                <Heading as={"h5"} size="md">
                  Learn. Track. Improve.
                </Heading>
              </Box>
              <Box>
                <Text>
                  Keeping a food diary helps you understand your habits and
                  increases your likehood of hitting your goals.
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Image src={barcode} m="auto" />
              </Box>
              <Box m="2">
                <Heading as={"h5"} size="md">
                  Logging Simplified
                </Heading>
              </Box>
              <Box>
                <Text>
                  Scan barcodes, save meals and recipes, and use Quick Tools for
                  fast and easy food tracking.
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Image src={shoe} m={"auto"} />
              </Box>
              <Box m={2}>
                <Heading as={"h5"} size="md">
                  Stay Motivated
                </Heading>
              </Box>
              <Box>
                <Text>
                  Join the World’s Largest Fitness Community for advice, tips,
                  and support 24/7.
                </Text>
              </Box>
            </Box>
          </Flex>
          <Box textAlign={"center"} p="5">
            <Button colorScheme="blue" p="6">
              START YOUR JOURNEY TODAY
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="fifth-section">
        <Box>
          <Box className="fifth-section-heading">
            <Heading as={"h1"} size={"2xl"}>
              Victory Stories
            </Heading>
          </Box>
          <Box className="fifth-section-des">
            <Text>
              When you reach your goals, our whole community celebrates with
              you. That’s over 200 million members sharing in your victory—using
              it to inspire their own journey.
            </Text>
          </Box>
        </Box>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={stephanie} />
            </div>
            <div className="carousel-item">
              <Image src={eric} />
            </div>
            <div className="carousel-item">
              <Image src={lori} />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Box>
      <Box className="sixth-section">
        <Box className="sixth-section-heading">
          <Heading as={"h2"} size={"2xl"}>
            Recipes & Inspiration
          </Heading>
          <Text fontSize={"md"} pt="8" pr={16} pb={8} pl={16}>
            Get nutritionist-approved recipes and motivational workout tips from
            MyFitnessPal experts.
          </Text>
        </Box>
        <Flex gap={"8"}>
          <Box className="sixth-section-cards">
            <Box>
              <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75" />
            </Box>
            <Box m={3} h={"50px"}>
              <Heading as={"h5"} size={"sm"}>
                15 Make-Ahead Breakfasts Under 300 Calories
              </Heading>
            </Box>
            <Box m={3}>
              <Text color={"blue"} fontWeight="bold">
                <Link to={"#"}>MyFitnessPal Blog</Link>
              </Text>
            </Box>
          </Box>
          <Box className="sixth-section-cards">
            <Box>
              <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75" />
            </Box>
            <Box m={3} h={"50px"}>
              <Heading as={"h5"} size={"sm"}>
                The Problem With Cheat Days
              </Heading>
            </Box>
            <Box m={3}>
              <Text color={"blue"} fontWeight="bold">
                <Link to={"#"}>MyFitnessPal Blog</Link>
              </Text>
            </Box>
          </Box>
          <Box className="sixth-section-cards">
            <Box>
              <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75" />
            </Box>
            <Box m={3} h={"50px"}>
              <Heading as={"h5"} size={"sm"}>
                Essential Guide to Getting Moving
              </Heading>
            </Box>
            <Box m={3}>
              <Text color={"blue"} fontWeight="bold">
                <Link to={"#"}>MyFitnessPal Blog</Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box className="seventh-section">
        <Box className="seventh-section-heading" mt={"24"}>
          <Heading as="h1" size={"2xl"}>
            Connect with over 50 apps.
          </Heading>
        </Box>
        <Box pt={8}>
          <Text>
            Easily link your MyFitnessPal account with apps that support your
            healthier lifestyle. It’s not just about calories. It’s about
            feeling better, looking better, and living better.
          </Text>
        </Box>
        <Box mt={16}>
          <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" />
        </Box>
        <Flex justifyContent={"center"} mt={16}>
          <Image src={appStore} w={"200px"} />
          <Image src={googlePlay} w={"200px"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
