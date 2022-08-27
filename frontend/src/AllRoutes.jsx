import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignupWelcome from './pages/signup/SignupWelcome'
import SignupWeightGoal from './pages/signup/SignupWeightGoal'
import SignupActivity from './pages/signup/SignupActivity'
import SignupTall from './pages/signup/SignupTall'
import SignupWeekly from './pages/signup/SignupWeekly'
import SignupCreateAcc from './pages/signup/SignupCreateAcc'
import SignupUsername from './pages/signup/SignupUsername'
import SignupCongrats from './pages/signup/SignupCongrats'
import Login from './pages/login/Login'
import Premium from './pages/premium/Premium'
import RecipesPage from './pages/RecipesPage'
import AppPage from './pages/AppPage'
import MyHome from './pages/MyHome'
import Header from './components/Header'
import Home from './pages/Home'
import BlogHomePage from './pages/BlogHomePage'
import Food from './pages/Food'
import SearchPage from './pages/BreakfastSearch'
import SearchResult from './pages/LunchSearch'
import BreakfastSearch from './pages/BreakfastSearch'
import LunchSearch from './pages/LunchSearch'
import DinnerSearch from './pages/DinnerSearch'
import SnackSearch from './pages/SnackSearch'
import Exercise from './pages/Exercise/Exercise'



const AllRoutes = () => {
  return (
    <>
    
  
    
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupWelcome />} />
        <Route path='/signupWeightGoal' element={<SignupWeightGoal />} />
        <Route path='/signupActivity' element={<SignupActivity />} />
        <Route path='/signupTall' element={<SignupTall />} />
        <Route path='/signupWeekly' element={<SignupWeekly />} />
        <Route path='/signupCreateAccount' element={<SignupCreateAcc />} />
        <Route path='/signupUsername' element={<SignupUsername />} />
        <Route path='/signupCongrats' element={<SignupCongrats />} />
        <Route path='/foods' element={<Food />} />
        <Route path='/login' element={<Login />} />
        <Route path='/premium' element={<Premium />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path='/blog' element={<BlogHomePage />} />
        <Route path='/breakfastSearch' element={<BreakfastSearch />} />
        <Route path='/lunchSearch' element={<LunchSearch />} />
        <Route path='/dinnerSearch' element={<DinnerSearch />} />
        <Route path='/snackSearch' element={<SnackSearch />} />
        <Route path='/myHome' element={<MyHome/>} />
        <Route path='/apps' element={<AppPage />} />
        <Route path='/exercise' element={<Exercise/>} />



    </Routes>
    </>
  )
}

export default AllRoutes