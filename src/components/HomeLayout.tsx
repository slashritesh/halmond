import { Outlet } from "react-router-dom"
import Navbar from "./ui/Navbar"


const HomeLayout = () => {
  return (
    <div>
        <Navbar />
        <div className="px-20">
        <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout