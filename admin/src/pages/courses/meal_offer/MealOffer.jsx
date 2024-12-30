



import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../config";
const MealOffer = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { id } = useParams();


  const [mealDetails, setMealDetails] = useState('');

  useEffect(() => {
    all_meals();
  }, []);


  const all_meals = () => {

    axios
     .get(`${BASE_URL}/all_meals/${id}`,)
      .then((response) => {
        const data = response.data.data
        setMealDetails(data);
        console.log("all meals", data);
      })
     .catch((error) => {
        console.log(error);
      });
  }



  const deletemeal = (_id) => {
   
  
    axios.delete(`${BASE_URL}/delete_meal/${_id}`).
      then((response) => {
        console.log("delete meal", response);
        all_meals();
    }).catch((error) => {
      console.log(error);
    })
  }


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  // Adding dummy data to the entries state
  const [entries, setEntries] = useState([
    { id: 1, meal: "Spaghetti", price: "10" },
    { id: 2, meal: "Pizza", price: "12" },
    { id: 3, meal: "Salad", price: "8" },
  ]);
  const [meal, setMeal] = useState("");
  const [price, setPrice] = useState("");

  const handleAddEntry = () => {
    if (meal && price) {
      const newEntry = { id: entries.length + 1, meal, price };
      setEntries([...entries, newEntry]);
      console.log("New Entry Added:", newEntry); // Print to console
      setMeal("");
      setPrice("");
    }
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };


  // moduleId,  
  // MealOffers,
  // MealPrice,
  // status
  return (
    <div className="container-fluid mt-3">
      {/* <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-info">Back To Modules</button>
        <Link to="/manage_meal_offer" className="btn btn-info">
          Add New Konfiguriere
        </Link>
      </div> */}
      <div className="card shadow-sm" style={{ border: "none" }}>
        <div className="bg-light d-flex justify-content-between p-3">
          <Link to="/meal_offer" id className="btn btn-info">
            Back To Modules
          </Link>

          <Link
       

            to={`/manage_meal_offer/${id}`} // Assuming 'id' is a variable

            className="btn btn-info"
            onClick={handleAddEntry}>
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
                <th scope="col">Meals</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {mealDetails.length > 0 ? (
                mealDetails.map((entry, index) => (
                  <tr key={entry.moduleId}>
                    <td>{index + 1}</td>
                    <td>{entry.MealOffers}</td>
                    <td>{entry.MealPrice}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deletemeal(entry._id)}>
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
                  placeholder="Meal"
                  value={meal}
                  onChange={(e) => setMeal(e.target.value)}
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

export default MealOffer;
