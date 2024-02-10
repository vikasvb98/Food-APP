import './App.css'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path='/' element= {<HomeScreen /> }/>
      <Route path='/login' element= {<LoginScreen /> }/>
      <Route path='/signup' element= {<SignupScreen /> }/>
    </Routes>
  )
}

export default App
