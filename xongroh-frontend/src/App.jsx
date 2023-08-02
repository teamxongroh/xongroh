import { Routes, Route } from "react-router-dom"
import LoginPage from '@/scenes/loginPage'
import RegisterPage from '@/scenes/registerPage'
import PageNotFound from './scenes/pageNotFound/PageNotFound'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path= '/register' element= {<RegisterPage/>} />
      <Route path= '/*' element= {<PageNotFound/>} />
    </Routes>
  )
}

export default App
