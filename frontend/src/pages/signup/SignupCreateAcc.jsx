import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import SignupNavbar from "../../components/signup/SignupNavbar";
import "./SignupStyles.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignupCreateAcc = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleCreateAccountClick = () => {
    if (emailRef.current.value && passwordRef.current.value) {
      if (passwordRef.current.value.length < 10) {
        return alert("Password length should be minimum 10 letters");
      }
      navigate("/signupCongrats");
    } else {
      alert("Email or password fields cannot be empty");
    }
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/google/callback`, "_self");
  };

  return (
    <>
      <SignupNavbar />
      <Box className="signupWrapper">
        <Box className="insideBox" h="fit-content" p="20px">
          <Box>
            <Heading fontSize="20px" my="10px">
              Almost there! Create your account.
            </Heading>

            <Input
              placeholder="Email Address"
              h="50px"
              my="20px"
              isRequired
              ref={emailRef}
            />
            <Input
              placeholder="Create a password"
              h="50px"
              isRequired
              ref={passwordRef}
            />

            <Text color="#A0A0A0" mb="10px" align="left" mt="5px">
              Must be at least 10 characters, no spaces.
            </Text>
          </Box>

          <Box mt="40px">
            <Text color="#A0A0A0" align="left" mt="5px">
              By signing up for MyFitnessPal, you are agreeing to our
            </Text>
            <Text
              color="blue"
              mb="10px"
              align="center"
              style={{ cursor: "pointer" }}
            >
              Privacy Policy <span style={{ color: "#A0A0A0" }}>and</span>{" "}
              Terms.
            </Text>
            <Button
              colorScheme="blue"
              w="350px"
              fontSize="18px"
              mt="10px"
              onClick={handleCreateAccountClick}
            >
              CONTINUE
            </Button>
            <Text color="#A0A0A0" mb="10px" align="center">
              or
            </Text>
            <Button
              leftIcon={<FcGoogle />}
              colorScheme="blue"
              variant="outline"
              w="350px"
              onClick={googleAuth}
            >
              CONTINUE WITH GOOGLE
            </Button>
            <Text color="#A0A0A0" my="10px" align="center" fontSize="sm">
              We will never post anything without your permission
            </Text>
            <Text color="#A0A0A0" align="center" fontSize="xs">
              This site is protected by reCAPTCHA and the Google{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>
                Privacy Policy
              </span>
            </Text>
            <Text color="#A0A0A0" mb="10px" align="center" fontSize="xs">
              and{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>Terms</span>{" "}
              apply
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignupCreateAcc;

// /signupCreateAccount
