import React, { useEffect, useState } from "react";
import "./profile.scss";
import axios from "axios";
import profile_image from "../assets/images/profile/profile_img.jpg";
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../config";
const Profile = () => {
  const id = localStorage.getItem("turiya_auth_id");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [cartFetchedData, setcartFetchedData] = useState("");
  const [purchasedCourse, setPuchasedCourse] = useState("");

  function formatDate(isoDate) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0"); // Ensures two-digit day
    const month = months[date.getMonth()]; // Get month as a string
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const updatedAt = "2024-12-19T05:23:23.539Z";
  const formattedDate = formatDate(updatedAt);

  // const fetchCartData = () => {
  //   axios
  //     .get("http://127.0.0.1:7000/api/get_all_cart_module")
  //     .then((response) => {
  //       console.log("response of cart fetched", response.data.data);
  //       setcartFetchedData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  console.log("fetchedData of profile", cartFetchedData);

  const [loading, setLoading] = useState(true);

  const FetchedPurchased = () => {
    if (id) {
      setLoading(true);
      axios
        .get(BASE_URL + `/get_purchasedModule/${id}`)
        .then((response) => {
          console.log("response of get_purchasedModule", response.data.data);
          setPuchasedCourse(response.data.data);
          setLoading(false)
        })
        .catch((error) => {
          console.log("error", error);
          setLoading(false)
        });
    }

  };



  const fetchAggreementPDF = async (invoiceId) => {
    if (id) {
      const invoiceId2 = "6763c0a093898e80869c4552";
      console.log("invoiceId", invoiceId);
      try {
        const response = await axios.get(
          BASE_URL + `/getAgreement_invoice/${invoiceId}`,
          {
            responseType: "blob", // Ensure the response is treated as a file
          }
        );

        // Create a Blob URL for the PDF
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `agreement_${invoiceId}.pdf`); // Set the file name
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (error) {
        console.error("Error downloading the agreement:", error);
      }
    }

  }



  useEffect(() => {
    // fetchCartData();
    FetchedPurchased();
  }, []);

  const fetchUserDetail = () => {
    axios
      .get(BASE_URL + `/getUserDetailById/${id}`)
      .then((response) => {
        console.log("response of user", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("turiya_auth_id");
    localStorage.removeItem("turiya_auth_token");
    localStorage.removeItem("user");
    navigate('/login')
  };

  const downloadInvoice = async (invoiceId) => {
    const invoiceId2 = "6763c0a093898e80869c4552";
    console.log("invoiceId", invoiceId);
    try {
      const response = await axios.get(
        BASE_URL + `/get_purchasedModule_invoice/${invoiceId}`,
        {
          responseType: "blob", // Ensure the response is treated as a file
        }
      );

      // Create a Blob URL for the PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `invoice_${invoiceId}.pdf`); // Set the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the invoice:", error);
    }
  };

  console.log("purchasedCourse", purchasedCourse);


  const [formData, setFormData] = useState({
    transportMode: "",
    arrivalTime: "",
    taxi: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);


    axios.post(BASE_URL + '/add_profile_query', formData).then((response) => {
      console.log("response of profile", response);

      //       if (response.status == 201) {

      //       } else {

      // }

    }).catch((error) => {
      console.log("error", error)
    })
  };



  return (
    <>
      {loading ?
        <div className=" d-flex justify-content-center align-items-centers my-5 gap-5">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only"></span>
          </div>
          <p className="mb-0">Loading your details..</p>
        </div> :
        <section className="myProfile global_wrapper">
          <div className="container">
            <button type="button" onClick={logout} className="btn btn_logout">
              Logout
            </button>
            <div className="myProfile_content">
              <h3> Namaste {data && data.First_name} </h3>
            </div>
            <div className="myProfile_content">
              {/*<h3> Namaste*/}
              {/*    DSCSeducation*/}
              {/*</h3>*/}

              {purchasedCourse.length > 0 ?
                purchasedCourse.map((item, index) => {
                  return (
                    <>
                      <div
                        className="myProfile_content__box border p-3 m-3"
                        key={index}>
                        <div className="profile_heading">
                          <p>Auftragsnummer - {item.orderNumber} </p>
                          <div className="profile_heading__right">
                            <p>Kaufdatum</p>
                            <p>
                              <i className="bx bxs-calendar" />
                              {formatDate(item.updatedAt)}
                            </p>
                          </div>
                        </div>
                        <div className="profile-row">
                          <p>
                            <b>Padi Amount : €{item.paid_amount}</b>
                            {/*<span> Überfällig seit 0 Tage </span>*/}
                            <b>&nbsp;&nbsp;Total Amount : €{item.price}</b>
                            <b>&nbsp;&nbsp;Left Amount : €{item.price}</b>
                          </p>
                          <p>
                            <span>Unbezahlt </span>
                          </p>
                        </div>
                        <div className="profile-picture">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="profile-picture-box">
                                <img
                                  // src="media/modules-images/42307037_"
                                  src={profile_image}
                                  className="img-fluid"
                                  alt="profile"
                                />
                              </div>
                            </div>
                            <div className="col-lg-9">
                              <div className="profile-picture-content">
                                <h6>
                                  {item.courseData && item.courseData.Ausbildung}
                                </h6>
                                <p>
                                  {item.courseData && item.courseData.Location}
                                </p>
                                <p>
                                  Starttermin{" "}
                                  <i className="bx bxs-calendar me-1" />
                                  {item.courseData && item.courseData.StartDate}
                                  {console.log("invoice_id", item._id)}
                                </p>
                                <div className="profile-btn">
                                  <button
                                    type="button"
                                    className="invoice_download_btn"
                                    onClick={() => downloadInvoice(item._id)}>
                                    <i className="bx bxs-download" /> Rechnung
                                  </button>
                                  <button
                                    type="button"
                                    className="invoice_download_btn"
                                    onClick={() => fetchAggreementPDF(item._id)}>
                                    <i className="bx bxs-download" /> Vereinbarung
                                  </button>
                                  <button
                                    type="button"
                                    className="invoice_download_btn"

                                    style={{ backgroundColor: '#eb9c4d' }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    <i className="bx bxs-edit" /> Dein
                                    Ankunftsticket{" "}
                                  </button>
                                  {/* <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#TY1729683518505545">
                            {" "}
                            <i className="bx bxs-edit" />
                            Dein Ankunftsticket{" "}
                          </a> */}
                                  <a href="#">
                                    <i className="bx bx-money" /> Zahlungsdetails{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }) : <h5 className="text-center mt-4">No Purchased course Found</h5>}
            </div>
          </div>


          <div className="container">
            <div className="row">

              {/* <div
          className="modal fade modal-fullscreen-md-down"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-md-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal Title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="col-12 mb-2">
                  <label htmlFor="transport_mode">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        How do you get to us?
                      </font>
                    </font>
                  </label>
                  <select
                    className="form-select"
                    name="transport_mode"
                    id="transport_mode"
                    aria-label="Default select example">
                    <option selected>-- Choose one --</option>
                    <option value="Flug">Flight</option>
                    <option value="Zug">Train</option>
                    <option value="Bus">Bus</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>

                <div className="col-sm-12">
                  <label htmlFor="arrival_time">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Time of arrival date?
                      </font>
                    </font>
                  </label>

                  <input
                    type="datetime-local"
                    id="arrival_time"
                    name="arrival_time"
                    value=""
                    class="required form-control"
                  />
                </div>

                <div className="col-12 mb-2 mb-2 mt-3 form-group">
                  <label className="nott ls0 fw-medium mb-1" htmlFor="taxi">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Should we order you a taxi?
                      </font>
                    </font>
                    <small>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>*</font>
                      </font>
                    </small>
                  </label>
                  <input
                    name="taxi"
                    id="taxi_yes_TY1731133092441081"
                    className="my-1 mx-1 taxi-option"
                    type="radio"
                    defaultValue="yes"
                  />
                  <label
                    htmlFor="taxi_yes_TY1731133092441081"
                    className="nott ls0 fw-medium mb-1">
                    Yes
                  </label>
                  <input
                    name="taxi"
                    id="taxi_no_TY1731133092441081"
                    className="my-1 mx-1 taxi-option"
                    type="radio"
                    defaultValue="no"
                  />
                  <label
                    htmlFor="taxi_no_TY1731133092441081"
                    className="nott ls0 fw-medium mb-1">
                    No
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div> */}

              <div
                className="modal fade modal-fullscreen-md-down"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen-md-down">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal Title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="col-12 mb-2">
                        <label htmlFor="transport_mode">
                          How do you get to us?
                        </label>
                        <select
                          className="form-select"
                          name="transportMode"
                          id="transport_mode"
                          value={formData.transportMode}
                          onChange={handleInputChange}
                        >
                          <option value="">-- Choose one --</option>
                          <option value="Flight">Flight</option>
                          <option value="Train">Train</option>
                          <option value="Bus">Bus</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>

                      <div className="col-sm-12">
                        <label htmlFor="arrival_time">
                          Time of arrival date?
                        </label>
                        <input
                          type="datetime-local"
                          id="arrival_time"
                          name="arrivalTime"
                          value={formData.arrivalTime}
                          className="required form-control"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="col-12 mb-2 mt-3 form-group">
                        <label htmlFor="taxi">Should we order you a taxi?</label>
                        <div>
                          <input
                            name="taxi"
                            id="taxi_yes"
                            className="my-1 mx-1 taxi-option"
                            type="radio"
                            value="yes"
                            onChange={handleInputChange}
                            checked={formData.taxi === "yes"}
                          />
                          <label htmlFor="taxi_yes" className="nott ls0 fw-medium mb-1">
                            Yes
                          </label>
                          <input
                            name="taxi"
                            id="taxi_no"
                            className="my-1 mx-1 taxi-option"
                            type="radio"
                            value="no"
                            onChange={handleInputChange}
                            checked={formData.taxi === "no"}
                          />
                          <label htmlFor="taxi_no" className="nott ls0 fw-medium mb-1">
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        data-bs-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>}
    </>
  );
};

export default Profile;
