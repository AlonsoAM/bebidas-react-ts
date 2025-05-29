import {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./layouts/Layout.tsx";

const FavoritesPage = lazy(() => import("./views/FavoritesPage.tsx"))
const IndexPage = lazy(() => import("./views/IndexPage.tsx"))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={
            <Suspense fallback={<div>Cargando...</div>}>
              <IndexPage/>
            </Suspense>
          } index/>
          <Route path="/favoritos" element={
            <Suspense fallback={<div>Cargando...</div>}>
              <FavoritesPage/>
            </Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
