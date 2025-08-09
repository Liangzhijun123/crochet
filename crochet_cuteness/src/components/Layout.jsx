import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the matched child route component here */}
      </main>
    </>
  )
}