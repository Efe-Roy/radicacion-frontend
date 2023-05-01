import SideBar from "@/components/SideBar";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  MdOutlineNotificationsNone,
  MdOutlineAccountCircle,
} from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  let router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const openSidebar = (event) => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const closeSidebar = (event) => {
    if (isActive) {
      setIsActive(false);
    }
  };

  useEffect(() => {
     if (!localStorage.getItem("profile")) {
        router.push("/login");
     }
  },[])
  return (
    <div className="grid-container" style={{ background: "#f6f9fc" }}>
      {/* <!-- Header --> */}
      {/* <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <AiOutlineMenu />
        </div>
        <div className="header-left">
          <Image
            src="/LogoCDNR.png"
            alt="Vercel Logo"
            className=""
            width={100}
            height={34}
            priority
          />
        </div>
        <div className="header-right">
          <span className="badge bg-primary rounded-pill position-relative">
            <MdOutlineNotificationsNone className="fs-6" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0+
              <span className="visually-hidden">unread messages</span>
            </span>
          </span>
          <MdOutlineAccountCircle className="fs-4 mx-3" />
        </div>
      </header> */}
      {/* <!-- End Header --> */}

      {/* <!-- Sidebar --> */}
      <SideBar isActive={isActive} closeSidebar={closeSidebar} />
      {/* <!-- End Sidebar --> */}

      {/* <!-- Main --> */}
      <main className="main-container" style={{ overflowX: "hidden" }}>
        <NavBar openSidebar={openSidebar} />
        <div className="mb-5"></div>
        {children}
      </main>
      {/* <!-- End Main --> */}
    </div>
  );
};

export default Layout;
