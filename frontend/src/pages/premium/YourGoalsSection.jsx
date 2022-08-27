import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import PremiumTable from "../../assets/PremiumTable.png"

const YourGoalsSection = () => {
  return (
    <Box className='yourGoalsSection'>
        <Text fontSize="3xl" as="b">Your Goals, Your Way</Text>
        <Text fontSize="lg" color="#696969" mt="20px">Advanced tools and in-depth analysis to help you build lifelong healthy habits.</Text>
        <Image src={PremiumTable} />
    </Box>
  )
}

export default YourGoalsSection