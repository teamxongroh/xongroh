import { Routes, Route } from "react-router-dom"
import LoginPage from '@/scenes/loginPage'
import RegisterPage from '@/scenes/registerPage'
import HomePage from "@/scenes/homePage/homePage"
import PageNotFound from '@/scenes/pageNotFound/PageNotFound'
import SearchPage from "@/scenes/searchPage/SearchPage"

function App() {

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path= '/register' element= {<RegisterPage/>} />
      <Route path= '/*' element= {<PageNotFound/>} />
    </Routes>
  )
}

export default App
