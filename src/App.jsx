import { Routes, Route } from 'react-router-dom'
import HomePage from './route/HomePage'
import AboutPage from './route/AboutPage'
import Navigation from './route/Navigation'
import './App.css'
import NavFooter from './route/NavFooter'
import Footer from './Footer'
import ConnectPage from './route/ConnectPage'
import Login from './Login'
import Signup from './Signup'
import ProfilePage from './ProfilePage'
function App() {
return(
  <Routes>
  <Route path= '/' element ={<NavFooter />} >
  <Route index element ={ <HomePage />} />
  <Route path ="about" element ={<AboutPage />} />
  <Route path ="connect" element ={<ConnectPage />} />
  <Route path ="login" element ={<Login />} />
  <Route path ="signup" element ={<Signup />} />
  <Route path= "profile" element ={<ProfilePage />} />
  </Route>


  
  </Routes>

)
  
}

export default App
