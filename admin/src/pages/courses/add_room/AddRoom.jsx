

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../config";
const ModulesConfig = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    all_rooms();
    if (!token) {
      navigate("/login");
    
    }
  }, [id]);
  const [roomDetails, setRoomDetails] = useState('');

  const all_rooms = () => {

    axios
     .get(`${BASE_URL}/all_rooms/${id}`,)
      .then((response) => {
        const data = response.data.data
        setRoomDetails(data);
        console.log("all rooms", data);
      })
     .catch((error) => {
        console.log(error);
      });
  }



  const deleteRoom = (_id) => {

    const payload = {
      moduleId:id
  }
    axios.delete(`${BASE_URL}/delete_room/${_id}`,payload).
      then((response) => {
        console.log("delete room", response);
        all_rooms();
    }).catch((error) => {
      console.log(error);
    })
  }
  // Adding dummy data to the entries state
  const [entries, setEntries] = useState([
    { id: 1, room: "Room A", price: "100" },
    { id: 2, room: "Room B", price: "150" },
    { id: 3, room: "Room C", price: "200" },
  ]);
  const [room, setRoom] = useState("");
  const [price, setPrice] = useState("");

  const handleAddEntry = () => {
    if (room && price) {
      const newEntry = { id: entries.length + 1, room, price };
      setEntries([...entries, newEntry]);
      setRoom("");
      setPrice("");
    }
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };
  console.log('roomDetails', roomDetails)
  
//   RoomOffers
// : 
// "1"
// RoomPrice
// : 

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-3">
        <div className="bg-light d-flex justify-content-between p-3">
          <Link to="/courses/addModule" className="btn btn-info">
            Back To Modules
          </Link>

          {/* <Link
            to=`/manage_roomModule/id`
            className="btn btn-info"
            onClick={handleAddEntry}>
            Add New Konfiguriere
        </Link> */}
        
        <Link
  to={`/manage_roomModule/${id}`} // Assuming 'id' is a variable
  className="btn btn-info"
  onClick={handleAddEntry}
>
  Add New Konfiguriere
</Link>


        </div>
        <div className="bg-light d-flex justify-content-between mb-3 px-3">
          <h4 className="card-title mb-4">Modules Konfiguriere</h4>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Room</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {roomDetails.length > 0 ? (
                roomDetails.map((entry, index) => (
                  <tr key={entry._id}>
                    <td>{index + 1}</td>
                    <td>{entry.RoomOffers}</td>
                    <td>{entry.RoomPrice}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteRoom(entry._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No entries available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Form to add new entry */}
          {/* <div className="mt-4">
            <h5>Add New Entry</h5>
            <div className="row g-3">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Room"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleAddEntry}
                >
                  Add
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ModulesConfig;
