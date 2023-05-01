import React, { useEffect } from 'react'
import {
  AiOutlineClose,
} from "react-icons/ai";
import {
  MdOutlineInventory,
  MdOutlineDashboard,
  MdInventory2,
  MdChecklistRtl,
  MdPublishedWithChanges,
  MdLogout,
} from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from '@/redux/features/authSlice';
import { getFiles } from '@/redux/features/fileSlice';

const SideBar = ({ isActive, closeSidebar }) => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles());
    // console.log("bernard", user_id);
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      const sd = JSON.parse(localStorage.getItem("profile"));
      dispatch(getUserId(sd));
    }
  }, [dispatch]);
  
  const { is_organisor, is_support, is_agent } = useSelector(
    (stateData) => ({
      ...stateData.auth,
    })
  );

  const router = useRouter();

  const logOut = () => {
    if (localStorage.getItem("profile")) {
      localStorage.removeItem("profile");
      router.push("/login");
    }
  }
  return (
    <aside id="sidebar" className={isActive ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <MdOutlineInventory /> Radicacion
        </div>
        <AiOutlineClose onClick={closeSidebar} className="d-lg-none" />
      </div>

      <ul className="sidebar-list">
        {!is_agent && (
          <Link
            href="/dashboard"
            style={{ textDecoration: "none", color: "#9799ab" }}
          >
            <li className="sidebar-list-item">
              <MdOutlineDashboard /> Panel principal
            </li>
          </Link>
        )}
        <Link
          href="/files"
          style={{ textDecoration: "none", color: "#9799ab" }}
        >
          <li className="sidebar-list-item">
            <MdInventory2 /> Tramites
          </li>
        </Link>
        {!is_organisor ? (
          ""
        ) : (
          <Link
            href="/agent"
            style={{ textDecoration: "none", color: "#9799ab" }}
          >
            <li className="sidebar-list-item">
              <MdChecklistRtl /> Usuarios
            </li>
          </Link>
        )}
        <Link
          href="/changepass"
          style={{ textDecoration: "none", color: "#9799ab" }}
        >
          <li className="sidebar-list-item">
            <MdPublishedWithChanges /> Cambiar contraseña
          </li>
        </Link>
        <li className="sidebar-list-item">
          <span onClick={logOut}>
            <MdLogout /> Cerrar sesión
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar