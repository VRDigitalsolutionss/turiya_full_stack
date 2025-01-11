import { Outlet, useNavigate } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";
import { verify } from "crypto";

const MainLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const adminToken = localStorage.getItem('admintoken');

    if (!adminToken) {
      navigate('/login')
      setLoading(false);
    }

    const verifyAdminToken = async () => {
      try {
        const response = await axios.post(BASE_URL + '/verify-admin-token', {
          token: adminToken
        })
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        navigate('/login')
      }
    }

    verifyAdminToken();
  }, [])
  return (
    <>
      {loading ?
        <div className=" d-flex justify-content-center align-items-centers my-5 gap-5">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only"></span>
          </div>
          <p className="mb-0">Loading..Please wait...</p>
        </div> : <Box sx={{ display: "flex" }}>
          <Topbar />
          <Box
            component="nav"
            sx={{
              width: sizeConfigs.sidebar.width,
              flexShrink: 0
            }}
          >
            <Sidebar />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: `calc(100% - ${sizeConfigs.sidebar.width})`,
              minHeight: "100vh",
              backgroundColor: colorConfigs.mainBg
            }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </Box>}
    </>
  );
};

export default MainLayout;