import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header/>
      <main className={'container mx-auto px-5 py-16'}>
        <Outlet/>
      </main>
    </>
  )
}
export default Layout
