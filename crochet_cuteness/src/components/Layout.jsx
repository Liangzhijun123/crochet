import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </>
  )
}