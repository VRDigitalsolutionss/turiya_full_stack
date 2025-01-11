import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('admintoken');
    navigate('/logout');
  }



  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar>
        <div className="container-fluid">
          <div className="row">
          
              <div className="col-sm-8">

              </div>
              <div className="col-sm-4 d-flex justify-content-end">
            <h5 className="mb-0">Admin Panel</h5>
     
         <h6 className="ms-4 mb-0" style={{cursor:'pointer',color:"blue"}} onClick={handleLogout}>Logout</h6>
         {/* <h6 className="ms-4 mb-0"><Link to="/logout" style={{textDecoration:"none"}}>Logout</Link></h6> */}
            </div>
          </div>
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;