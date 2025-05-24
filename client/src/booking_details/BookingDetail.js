// ================================================== 3 thrd =================================================

import React, { useEffect, useState } from "react";
import "./bookingDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
const BookingDetail = () => {
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const userId = localStorage.getItem("turiya_auth_id");

  const { id } = useParams();

  console.log("course_id", id);
  const navigate = useNavigate();
  const [invoiceType, setInvoiceType] = useState("Private_Invoice"); // State for invoice type
  const [addressType, setAddressType] = useState("Other_Address"); // State for address type
  const [loading, setLoading] = useState(true)
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const [formData, setFormData] = useState({
    registeredUserId: userId, // Pre-filled ID
    userType: invoiceType,
    inv_email: "",
    inv_num: "",
    inv_address: "",
    inv_country: "",
    inv_state: "",
    inv_city: "",
    inv_pcode: "",
    inv_company: "",
  });

  // useEffect(() => {
  //   window.grecaptcha.ready(() => {
  //     window.grecaptcha.execute('YOUR_SITE_KEY', { action: 'homepage' }).then(token => {
  //       setRecaptchaToken(token);
  //     });
  //   });
  // }, []);

  // Handle changes for invoice type
  const handleInvoiceTypeChange = (e) => {
    setInvoiceType(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, []);

  // Handle changes for address type ${BASE_URL}/getModuleById/67543744c21f7e4272deb098
  const handleAddressTypeChange = (e) => {
    setAddressType(e.target.value);
  };

  const [courseData, setCourseData] = useState("");
  const [availableRooms, setAvailableRooms] = useState([])
  const [availableMeals, setAvailableMeals] = useState([])

  const fetchCourseById = () => {
    if (id) {
      setLoading(true);
      axios
        .get(`${BASE_URL}/getModuleById/${id}`)
        .then((resonse) => {
          console.log("response of billing module", resonse.data.data);
          setCourseData(resonse.data.data);
          setAvailableRooms(resonse.data.data.availableRooms)
          setAvailableMeals(resonse.data.data.availableMeals)
          setLoading(false)
        })
        .catch((error) => {
          console.log("error", error);
          alert("something went wrong");
          setLoading(false)
        });
    } else {
      alert("id not found");
    }
  };


  const addOtherAddress = () => {




    const payload = {
      "registeredUserId": formData.registeredUserId,
      "userType": formData.userType,
      "company": formData.inv_company,
      "email": formData.inv_email,
      "phone": formData.inv_num,
      "address": formData.inv_address,
      "country": formData.inv_country,
      "federal_state": formData.inv_state,
      "city": formData.inv_city,
      "postal_code": formData.inv_pcode,
    };

    if (payload.email && payload.phone && payload.city) {
      console.log("addOtherAddress payload", payload);
      axios
        .post(`${BASE_URL}/add_otherAddress`, payload)
        .then((response) => {
          console.log("response of add other address", response);
          // if (response.status == 201) {

          // }
        })
        .catch((error) => {
          console.log("error of add other address", error);
        });
    } else {
      // alert("formdata is not available");

      console.log("formdata is not available")
    }
  };


  const updateInvoiceType = async () => {

    const userid = localStorage.getItem("turiya_auth_id");
    const payload = {
      "userId": userid,
      "invoiceType": invoiceType,
    };
    await axios
      .put(`${BASE_URL}/addInvoiceType`, payload)
      .then((response) => {
        console.log("response of update user type", response);
        // if (response.status == 200) {
      }).catch((error) => {
        console.log("error of update user type", error);
      })
  }


  const generateInvoice = async () => {
    if (id) {
      if (addMeal) {
        localStorage.setItem('selectedMeal', JSON.stringify(selectedMeal));
      }

      if (addRoom) {
        localStorage.setItem('selectedRoom', JSON.stringify(selectedRoom));
      }

      await updateInvoiceType();
      if (addressType == 'Other_Address') {
        addOtherAddress();
      }
      navigate(`/bilingDetails/${id}`);
    } else {
      console.log("id not found")
    }
  };

  useEffect(() => {
    if (!addMeal) {
      localStorage.removeItem('selectedMeal');
    }
    if (!addRoom) {
      localStorage.removeItem('selectedRoom');
    }
  }, [])

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission

  // Function to handle form submission

  useEffect(() => {
    fetchCourseById();
  }, []);

  console.log("courseData", courseData);

  const [addMeal, setAddMeal] = useState(false);
  const [addRoom, setAddRoom] = useState(false);

  const handleMealCheckboxChange = () => {
    setAddMeal(!addMeal);
  };

  const handleRoomCheckboxChange = () => {
    setAddRoom(!addRoom);
  };

  // ========================================================================


  const originalPrice = 2699;
  const finalPrice = calculatePriceWithTax(originalPrice);
  console.log("Final price with 19% tax:", finalPrice);

  const submitOtherAddress = () => {
    console.log("Form Data:", formData);
  };
  // const finalPrice = calculatePriceWithTax(originalPrice, invoiceType);
  // console.log("Final price with tax:", finalPrice);

  function isOfferValid(offerEndDate) {
    if (!offerEndDate) return false;

    const today = new Date();
    const offerEnd = new Date(offerEndDate);

    return today <= offerEnd;
  }

  function calculatePriceWithTax(price, offerEndDate, offerPrice) {
    const isOfferStillValid = isOfferValid(offerEndDate) && offerPrice > 0;

    const priceToCalculate = isOfferStillValid ? offerPrice : price;

    if (invoiceType !== "Private_Invoice") {
      const price_number = Number(priceToCalculate);
      const taxRate = 0.19; // 19% tax rate
      const taxAmount = price_number * taxRate;
      const finalPrice = price_number + taxAmount;
      return finalPrice;
    } else {
      return priceToCalculate;
    }
  }

  // Handler to select a room
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  // Handler to select a meal
  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };


  return (
    <>
      {loading ?
        <div className=" d-flex justify-content-center align-items-centers my-5 gap-5">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only"></span>
          </div>
          <p className="mb-0">Loading your details..</p>
        </div> : <div className="BookingDetail">
          <div className="global_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="cart_wrapper__left">
                    <h3>Auftragsrüberblick</h3>
                    <div className="cart_wrapper__left-box">
                      <div className="cart_left__heading">
                        <h6> {courseData && courseData.Ausbildung}</h6>
                        <div className="del cart-price">
                          <p>{isOfferValid(courseData.OfferEndDate) && courseData.Offerprice > 0 ? (
                            <span>
                              € {courseData.Offerprice}
                            </span>
                          ) : (
                            <span>€{courseData.price}</span>
                          )} </p>
                        </div>
                      </div>

                      <div className="cart-list">
                        {/* Place  */}
                        <ul>
                          <li>
                            <i className="bx bxs-calendar me-2" />
                            {courseData.StartDate}
                          </li>
                          <li>{courseData.Location}</li>
                          <li>
                            {" "}
                            {"Noch" +
                              " " +
                              courseData.Place +
                              " " +
                              "Plätze frei"}{" "}
                          </li>
                          {addMeal && <li>Verpflegung : € {selectedMeal?.MealPrice ? selectedMeal?.MealPrice : '00.00'}</li>}
                          {addRoom && <li>Unterkunftskosten : € {selectedRoom?.RoomPrice ? selectedRoom?.RoomPrice : '00.00'}</li>}
                        </ul>
                      </div>
                      <div className="cart-total">
                        <h6>TOTAL</h6>
                        <p>
                          {isOfferValid(courseData.OfferEndDate) && courseData.Offerprice > 0 ? (
                            <span>
                              € {Number(courseData.Offerprice) + Number(selectedMeal?.MealPrice && addMeal ? Number(selectedMeal?.MealPrice) : 0) + (selectedRoom?.RoomPrice && addRoom ? Number(selectedRoom?.RoomPrice) : 0)}
                            </span>
                          ) : (
                            <span>€{Number(courseData.price) + Number(selectedMeal?.MealPrice && addRoom ? Number(selectedMeal?.MealPrice) : 0) + (selectedRoom?.RoomPrice && addRoom ? Number(selectedRoom?.RoomPrice) : 0)}</span>
                          )} 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="cart-right">
                    <form method="post">
                      <div className="registration_box">
                        <div className="registration-second">
                          <h6>Informationen zur Rechnungsstellung</h6>
                          <div className="registration-second-radio">
                            <div className="second-radio-flex">
                              <input
                                type="radio"
                                name="invoice_type"
                                value="Private_Invoice"
                                checked={invoiceType === "Private_Invoice"}
                                onChange={handleInvoiceTypeChange}
                              />
                              <label htmlFor="PRIVATRECHNUNG">
                                PRIVATRECHNUNG
                              </label>
                            </div>
                            <div className="second-radio-flex">
                              <input
                                type="radio"
                                name="invoice_type"
                                value="Company_invoice"
                                checked={invoiceType === "Company_invoice"}
                                onChange={handleInvoiceTypeChange}
                              />
                              <label htmlFor="FIRMENRECHNUNG">
                                FIRMENRECHNUNG
                              </label>
                            </div>
                          </div>
                        </div>

                        {invoiceType === "Company_invoice" && (
                          <div>
                            <div className="registration-second-radio">
                              <div className="second-radio-flex">
                                <input
                                  type="radio"
                                  name="address_type"
                                  value="Other_Address"
                                  id="ANDERE"
                                  checked={addressType === "Other_Address"}
                                  onChange={handleAddressTypeChange}
                                />
                                <label htmlFor="ANDERE">ANDERE ADRESSE</label>
                              </div>
                              <div className="second-radio-flex">
                                <input
                                  type="radio"
                                  name="address_type"
                                  value="Registration_Address"
                                  id="IDENTISCH"
                                  checked={addressType === "Registration_Address"}
                                  onChange={handleAddressTypeChange}
                                />
                                <label htmlFor="IDENTISCH">
                                  IDENTISCH MIT REGISTRIERUNGS ADRESSE
                                </label>
                              </div>
                            </div>

                            {/* Conditionally render the second_data_form */}
                            {addressType === "Other_Address" && (
                              <div
                                className="second_data_form"
                                style={{ display: "block" }}>
                                <div className="registration_box__flex">
                                  <div
                                    className="modal_input"
                                    style={{
                                      display: "none",
                                    }}>
                                    <label>
                                      Vorname <span>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="inv_fname"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div
                                    className="modal_input"
                                    style={{
                                      display: "none",
                                    }}>
                                    <label>
                                      Nachname <span>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="inv_lname"
                                      onChange={handleChange}
                                      value={formData.inv_lname}
                                    />
                                  </div>
                                </div>
                                <div className="registration_box__flex">
                                  <div
                                    className="modal_input"
                                    id="company_name_input"
                                    style={{ display: "block" }}>
                                    <label>
                                      Enter company name : <span>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="inv_company"
                                      id="inv_company"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="registration_box__flex">
                                  <div className="modal_input">
                                    <label>E-Mail</label>
                                    <input
                                      type="email"
                                      name="inv_email"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="modal_input">
                                    <label>HANDY / TELEFON</label>
                                    <input
                                      type="number"
                                      name="inv_num"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div
                                  className="registration_box__flex"
                                  onChange={handleChange}>
                                  <div className="modal_input">
                                    <label>Adresse</label>
                                    <input
                                      type="text"
                                      name="inv_address"
                                      placeholder="Straße / Haus Nr."
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="modal_input">
                                    <label>LAND</label>
                                    <input
                                      type="text"
                                      name="inv_country"
                                      placeholder="Deutschland"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="registration_box__flex">
                                  <div className="modal_input">
                                    <label>Bundesstaat</label>
                                    <input
                                      type="text"
                                      name="inv_state"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="modal_input">
                                    <label>STADT</label>
                                    <input
                                      type="text"
                                      name="inv_city"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="modal_input">
                                    <label>Postleitzahl</label>
                                    <input
                                      type="text"
                                      name="inv_pcode"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* ============== */}
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            checked={addMeal}
                            onChange={handleMealCheckboxChange}
                            className="me-3"
                          />
                          Add Verpflegung
                        </label>
                      </div>
                      <label>
                        <input
                          type="checkbox"
                          checked={addRoom}
                          className="me-3"
                          onChange={handleRoomCheckboxChange}
                        />
                        Add Unterkunftskosten
                      </label>

                      {addRoom && <div>
                        <h2>Available Rooms</h2>
                        <table class="table table-bordered">
                          <thead class="thead-dark">
                            <tr>
                              <th>Unterkunftskosten Offer</th>
                              <th>Unterkunftskosten Price (in €)</th>
                              <th>Select</th>
                            </tr>
                          </thead>
                          <tbody>
                            {availableRooms.map((room) => (
                              <tr
                                key={room?._id}
                                className={
                                  selectedRoom?._id === room?._id ? "table-success" : "table-light"
                                }
                              >
                                <td>{room.RoomOffers}</td>
                                <td>{room.RoomPrice}</td>
                                <td>
                                  <input
                                    type="radio"
                                    name="room"
                                    value={room?._id}
                                    checked={selectedRoom?._id === room?._id}
                                    onChange={() => handleRoomSelect(room)}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>}
                      {addMeal && <div>
                        <h2>Available Meals</h2>
                        <table class="table table-bordered">
                          <thead class="thead-dark">
                            <tr>
                              <th>Verpflegung Offer</th>
                              <th>Verpflegung Price (in €)</th>
                              <th>Select</th>
                            </tr>
                          </thead>
                          <tbody>
                            {availableMeals.map((meal) => (
                              <tr
                                key={meal?._id}
                                className={
                                  selectedMeal?._id === meal?._id ? "table-success" : "table-light"
                                }
                              >
                                <td>{meal.MealOffers}</td>
                                <td>{meal.MealPrice}</td>
                                <td>
                                  <input
                                    type="radio"
                                    name="meal"
                                    value={meal?._id}
                                    checked={selectedMeal?._id === meal?._id}
                                    onChange={() => handleMealSelect(meal)}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>}

                      <div className="registration-btn">
                        <button
                          className="global_btn"
                          type="button"
                          // name="booking_form"
                          onClick={generateInvoice}>
                          Buchung fortsetzen
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  row: {
    backgroundColor: "#fff",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  selectedRow: {
    backgroundColor: "#e0f7e9 !important", // Light green background for selected row
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  header: {
    backgroundColor: "#f4f4f4",
    textAlign: "left",
    fontWeight: "bold",
  },
};


export default BookingDetail;
