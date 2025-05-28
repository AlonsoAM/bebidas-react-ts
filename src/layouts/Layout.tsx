import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";
import Modal from "../components/Modal.tsx";

const Layout = () => {
  return (
    <>
      <Header/>
      <main className={'container mx-auto px-5 py-16'}>
        <Outlet/>
      </main>
      <Modal/>
    </>
  )
}
export default Layout
