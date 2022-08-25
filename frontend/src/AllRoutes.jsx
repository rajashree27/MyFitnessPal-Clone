import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignupWelcome from './pages/signup/SignupWelcome'
import SignupWeightGoal from './pages/signup/SignupWeightGoal'
import SignupActivity from './pages/signup/SignupActivity'
// import SignupSelect from './pages/signup/SignupSelect'
import SignupTall from './pages/signup/SignupTall'
import SignupWeekly from './pages/signup/SignupWeekly'
import SignupCreateAcc from './pages/signup/SignupCreateAcc'
import SignupUsername from './pages/signup/SignupUsername'
import SignupCongrats from './pages/signup/SignupCongrats'
import Login from './pages/login/Login'
import Premium from './pages/premium/Premium'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SignupWelcome />} />
        <Route path='/signupWeightGoal' element={<SignupWeightGoal />} />
        <Route path='/signupActivity' element={<SignupActivity />} />
        {/* <Route path='/signupSelect' element={<SignupSelect />} /> */}
        <Route path='/signupTall' element={<SignupTall />} />
        <Route path='/signupWeekly' element={<SignupWeekly />} />
        <Route path='/signupCreateAccount' element={<SignupCreateAcc />} />
        <Route path='/signupUsername' element={<SignupUsername />} />
        <Route path='/signupCongrats' element={<SignupCongrats />} />

        <Route path='/login' element={<Login />} />
        <Route path='/premium' element={<Premium />} />



    </Routes>
  )
}

export default AllRoutes