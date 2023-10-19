import { Outlet } from "react-router-dom"
import Navbar from "./ui/Navbar"


const HomeLayout = () => {
  return (
    <div className="h-auto pb-10">
        <Navbar />
        <div className="px-20">
        <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout