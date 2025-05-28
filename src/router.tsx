import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from "./views/IndexPage.tsx";
import FavoritesPage from "./views/FavoritesPage.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/favoritos" element={<FavoritesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
