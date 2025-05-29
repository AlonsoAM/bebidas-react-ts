import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";
import Modal from "../components/Modal.tsx";
import {useEffect} from "react";
import {useAppStore} from "../stores/useAppStore.ts";
import Notification from "../components/Notification.tsx";

const Layout = () => {

  const loadFromStorage = useAppStore(state => state.loadFromStorage)

  useEffect(()=> {
    loadFromStorage()
  } , [])

  return (
    <>
      <Header/>
      <main className={'container mx-auto px-5 py-16'}>
        <Outlet/>
      </main>
      <Modal/>
      <Notification/>
    </>
  )
}
export default Layout
