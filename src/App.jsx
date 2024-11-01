import Sidebar, {SidebarItem} from "./components/Sidebar"
import RightSidebar from "./components/Rightsidebar";
import { useState } from "react"
import {Home, Users, BookOpenText, User, Clipboard, Bell, Settings, DoorOpen} from "lucide-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <Sidebar>
          <div className="mb-10"/>
          <SidebarItem icon={<Home size={20} />} text="Dashboard" active/>
          <hr className="my-6"/>
          <SidebarItem icon={<Users size={20} />} text="Pengguna"/>
          <SidebarItem icon={<BookOpenText size={20} />} text="Materi"/>
          <SidebarItem icon={<User size={20} />} text="Pembinaan"/>
          <SidebarItem icon={<Clipboard size={20} />} text="Analisis & Laporan"/>
          <SidebarItem icon={<Bell size={20} />} text="Notifikasi"/>
          <hr className="my-6"/>
          <SidebarItem icon={<Settings size={20} />} text="Pengaturan"/>
          <SidebarItem icon={<DoorOpen size={20} />} text="Keluar"/>
        </Sidebar>
        
        <div className="flex-grow p-6 bg-gray-100"/>
        <RightSidebar />

      </div>
    </>
  )
}

export default App
