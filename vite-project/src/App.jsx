 import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import { Profile } from './pages/Profile'
import Header from './component/Header'
import { Footer } from './component/Footer'

function App() {
  

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
