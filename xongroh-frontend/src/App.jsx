import { Routes, Route } from "react-router-dom"
import LoginPage from '@/scenes/loginPage'
import RegisterPage from '@/scenes/registerPage'
import HomePage from "@/scenes/homePage/homePage"
import PageNotFound from '@/scenes/pageNotFound/PageNotFound'
import SearchPage from "@/scenes/searchPage/SearchPage"
import Layout from "@/scenes/Layout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path= 'register' element= {<RegisterPage/>} />
        <Route path= '*' element= {<PageNotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
