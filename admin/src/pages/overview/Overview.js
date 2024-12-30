import React, { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { RiUser2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { BASE_URL,BASE_URL_IMAGE } from "../../config";

const Overview = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [total_users, setTotalUsers] = useState('');
const [query,setQuery] = useState('');
  const [booking, setBooking] = useState('');
  


  // http://127.0.0.1:7000/api/userQueries
  const fetchTotalUser = () => {
    axios.get(BASE_URL + '/getRegisteredUser').then((response) => {
      console.log("Total getRegisteredUser", response.data);
      // const   total_users = response.data
    
      setTotalUsers(response.data.data)
      // setTotalUsers(response.data);
    })
  }


  const fetchTotalquery = () => {
    axios.get(BASE_URL +  '/userQueries').then((response) => {
      console.log("Total userQueries", response.data);
      // const   total_users = response.data
    
      setQuery(response.data.data)
      // setTotalUsers(response.data);
    })


  }

  const fetchtotalBooking = () => {
    axios.get(BASE_URL + '/get_totalpurchasedModule').then((response) => {

      console.log("response of get_totalpurchasedModule", response.data);
    setBooking(response.data.totalPurchasedModules)
    }).catch((error) => {
    console.log("error", error);
  })
}





  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   } else {
  //     fetchTotalUser();
  //     fetchTotalquery();
  //     fetchtotalBooking();
  //   }
  // }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4 ">
          <div
            className="card px-3 py-5"
            style={{ backgroundColor: "#3bc0c3" }}>
            <h4 className="text-center my-4 text-white heading">
              Total Registured Users
            </h4>
            <div className="row d-flex align-items-center">
              <div className="col-sm-6 d-flex justify-content-center">
                <h3 className="number">
                  
                 {total_users && total_users}
                
                
                </h3>
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <HiUserGroup className="card_icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div
            className="card px-3 py-5"
            style={{ backgroundColor: "#9ec54e" }}>
            <h4 className="text-center my-4  text-white heading">
              Total User Query
            </h4>
            <div className="row d-flex align-items-center">
              <div className="col-sm-6 d-flex justify-content-center">
                <h3 className="number">
                  
                  
                
                
                {query && query}
                
                </h3>
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <RiUser2Fill className="card_icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div
            className="card px-3 py-5"
            style={{ backgroundColor: "#33b0e0" }}>
            <h4 className="text-center my-4  text-white heading">
              Total Bookings
            </h4>
            <div className="row">
              <div className="col-sm-6 d-flex justify-content-center">
                <h3 className="number">
                  
                
                {booking && booking}
                
                
                </h3>
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <FaNotesMedical className="card_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
