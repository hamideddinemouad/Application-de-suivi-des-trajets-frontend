import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DriverHeader from "./DriverHeader";
import AdminHeader from "./adminHeader";
import GuestHeader from "./GuestHeader";

export default function Navbar() {
  const [user, setUser] = useState("guest");
  useEffect(() => {
    const fetchme = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/me/", {
          withCredentials: true,
        });
        setUser(res.data.message);
        // console.log(res.data.message);
      } catch (error) {
        console.log(error.data?.message);
      }
    };
    fetchme();
  }),
    [];

  return (
    <>
      {user === "admin" && <AdminHeader />}
      {user === "driver" && <DriverHeader />}
      {user === "guest" && <GuestHeader />}
      <Outlet />
    </>
  );
}
