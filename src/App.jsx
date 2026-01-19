import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePages from "./pages/HomePages"
import CartPages from "./pages/CartPages"
import FavouritePages from "./pages/FavouritePages"
import RegisterPages from "./pages/RegisterPages"
import SinglePages from "./pages/SinglePages"
import FilterPages from "./pages/FilterPages"
import Inputcard from "./pages/Inputcard"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
          <Route path='filter' element ={<HomePages/>}/>
          <Route path='/cart' element={<CartPages />} />
          <Route path='cart/:id' element={<SinglePages />} />
          <Route path='/' element={<FilterPages/>} />
          <Route path='like' element={<FavouritePages />} />
          <Route path='register' element={<RegisterPages />} />
          <Route path='/inputcart' element={<Inputcard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App