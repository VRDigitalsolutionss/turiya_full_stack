import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../config";

const BilingDetails = () => {
  const { id } = useParams();
  const userAuthId = localStorage.getItem("turiya_auth_id");
  const [registerId, setregisterAuthId] = useState("");
  const navigate = useNavigate();


  const fetchOtherAddress = () => {
    axios
      .get(`${BASE_URL}/getOtherAddress/${userAuthId}`)
      .then((response) => {
        console.log("response of other address", response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
        alert("something went wrong");
      });
  };




  const login_id = localStorage.getItem("turiya_auth_id");
  const [userDetails, setUserDetail] = useState("");

  const [courseData, setCourseData] = useState("");
  console.log("user detils", userDetails);
  console.log("course data", courseData);
  const [taxAmount, setTaxAmount] = useState("");

  function calculatePriceWithTax(price) {
    const price_number = Number(price);
    const taxRate = 0.19;
    const taxAmount = price_number * taxRate;

    const finalPrice = price_number + taxAmount;
    return finalPrice;
  }



  const fetchCourseById = () => {
    if (id) {
      axios
        .get(`${BASE_URL}/getModuleById/${id}`)
        .then((resonse) => {
          console.log("response of billing module", resonse.data.data);
          setCourseData(resonse.data.data);
        })
        .catch((error) => {
          console.log("error", error);
          alert("something went wrong");
        });
    } else {
      alert("id not found");
    }
  };

  const taxCalculationnew = () => {
  console.log("taxCalculationnew", courseData.price)
    if (userDetails && userDetails.userType == "company") {
      const price = courseData.price;
      const price_number = Number(price);
      const taxRate = 0.19;
      const taxAmount = price_number * taxRate;
  
      const finalPrice = price_number + taxAmount;
      return finalPrice;
      } else {
        return courseData.price;
      }
  }

  const generateInvoiceNumber = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `TY-WEB-REG ${randomNumber}-${month}-${year}`;
  };
  
  const generateCustomerNumber = () => {
    return Math.floor(70000 + Math.random() * 10000).toString(); // Generates a random 5-digit number
  };
  

  const generateOrderNumber = () => {
    const timestamp = Date.now(); // Use current timestamp for uniqueness
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    return `TY${timestamp}${randomSuffix}`;
  };

// Function to generate the due date in "YYYY-MM-DD" format
// Function to generate today's date in "YYYY-MM-DD" format
function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

  

  


  const fetchModuleDetails = (e) => {
    e.preventDefault();
    console.log("generateInvoiceNumber", generateInvoiceNumber());
    console.log("generateCustomerNumber", generateCustomerNumber());
    console.log("generateOrderNumber", generateOrderNumber());

    const invoice_num = generateInvoiceNumber();
    const custumer_num = generateCustomerNumber();
    const order_num = generateOrderNumber();
    const due_date = getTodayDate();
    const taxCalculationnewv = taxCalculationnew();
    // generateInvoiceNumber();
    // generateCustomerNumber();
    // generateOrderNumber();

    const payload = {
      productnumber:courseData._id,
      invoiceNumber:invoice_num,
      customerNumber: userDetails._id,
      orderNumber: order_num,
      dueDate: due_date,
      customerName: userDetails.company?userDetails.company:userDetails.First_name,
      customerAddress:userDetails.address,
      productDescription: courseData.Ausbildung,
      quantity: 1,
      totalPrice:taxCalculationnewv,
      email: userDetails.email,
      user_type:userDetails.userType,
      price: courseData.Offerprice ? courseData.Offerprice : courseData.price,
      courseData: courseData,
     userDetails:userDetails
    };


    console.log("total price", payload)
    axios
      .post(`${BASE_URL}/generateInvoice`, payload)
      .then((response) => {
        console.log("response of invoice", response.data.data);
        navigate('/thank-you');
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/getUserDetailById/${login_id}`)
      .then((response) => {
        console.log("response of billing user", response.data);
        console.log("response of otherAddress", response.data.otherAddress);
        if (response.data.otherAddress) {
          setUserDetail(response.data);
        } else {
          setUserDetail(response.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchCourseById();
  }, []);




  console.log("course data userType", userDetails);


  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-sm-12">
            <div className="cart_details__box">
              <h3>Agreement on training as a yoga teacher</h3>
              <div className="cart_details__box-content">
                <div className="cart_details__heading">
                  <h6>{courseData.Ausbildung}</h6>
                  <button>
                    <i className="bx bx-trash" />
                  </button>
                </div>
                <div className="cart_details__heading">
                  <span>
                    <i className="bx bxs-calendar" /> {courseData.StartDate}
                  </span>
                  <p> € {courseData && courseData.price}</p>
                </div>
                <div className="cart_details__list">
                  <span> {courseData.Location}</span>
                  <span>
                    {courseData.Place}
                    <strong>places</strong> left
                  </span>
                </div>
                <div className="cart_details__heading">
                  <h6 />
                  <p>€0.00</p>
                </div>
                {/* <div class="cart_details__heading">
                  <h6>VAT (0%)</h6>
                  <p>€0</p>
              </div> */}
                <div className="cart_details__heading">
                  <h6 />
                  <p>€0.00</p>
                </div>
                {
         
              
                  userDetails.userType !== "Private_Invoice" ? <div className="cart_details__heading">
                  <h6>VAT (19%)</h6>
                  <p> {(Number(courseData.price) * 0.19).toFixed(2)} </p>
                </div>:null
                }
                
                
                {/* {courseData &&
                courseData.otherAddress.userType !== "Private_Invoice" ? (
                  <div className="cart_details__heading">
                    <h6>VAT (19%)</h6>
                    <p> {(Number(courseData.price) * 0.19).toFixed(2)} </p>
                  </div>
                ) : null} */}

                
                  {/* {courseData &&
                courseData.otherAddress.userType !== "Private_Invoice" ? (
                  <div className="cart_details__heading">
                    <h6>VAT (19%)</h6>
                    <p> {(Number(courseData.price) * 0.19).toFixed(2)} </p>
                  </div>
                ) : null} */}


                <div className="cart_details__heading">
                  <p>TOTAL</p>
                  <p>€{calculatePriceWithTax(courseData.price)}</p>
                </div>
                <div className="box-row">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="cart_details__box-left">
                        <div className="box-title">
                          <h6>Billing information </h6>
                        </div>

                        <div className="box-desc">
                          <ul>
                            <li>
                              Name:
                              {userDetails?.First_name +
                                "" +
                                userDetails?.Last_name}{" "}
                            </li>
                            <li>
                              Company Name:
                              {userDetails && userDetails?.otherAddress !== null
                                ? userDetails?.otherAddress?.company
                                : userDetails?.company}{" "}
                            </li>
                            <li>Email:&nbsp; {userDetails?.email} </li>
                            <li>
                              Gender:&nbsp; {userDetails && userDetails?.gender}
                            </li>
                            <li>
                              Number:&nbsp; {userDetails && userDetails?.phone}
                            </li>
                            <li>
                              Address:&nbsp;{" "}
                              {userDetails && userDetails?.otherAddress !== null
                                ? userDetails?.otherAddress?.address
                                : userDetails?.address}
                            </li>
                            <li>City:&nbsp; {userDetails?.city}</li>
                            <li>
                              Pincode:&nbsp;{" "}
                              {userDetails && userDetails?.postal_code}
                            </li>
                            <li>State:&nbsp; {userDetails?.federal_state}</li>

                            <li>
                              Country:&nbsp;{" "}
                              {userDetails && userDetails?.country}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="box-title">
                    <h6>
                      Info <i className="bx bx-info-circle" />
                    </h6>
                    <p>
                      Im Ausbildungspreis inbegriffen sind Ausbildungsskript,
                      Workbook, Prüfungsgebühr und Zertifikat.
                    </p>
                  </div>
                  {/* <form> */}
                  <div className="info_desc">
                    <p>Mein Ausbildungsstatus:</p>
                    <div className="info_desc__radio">
                      <input
                        name="student_type"
                        defaultValue="Ich möchte Yogalehrer werden"
                        type="radio"
                        defaultChecked
                      />
                      <label htmlFor>Ich möchte Yogalehrer werden</label>
                    </div>
                    <div className="info_desc__radio">
                      <input
                        name="student_type"
                        type="radio"
                        defaultValue="Ich bin bereits Yogalehrer"
                      />
                      <label htmlFor>Ich bin bereits Yogalehrer</label>
                    </div>
                    <p>Ausbildungserwartung:</p>
                    <div className="info_desc__radio">
                      <input
                        name="name1"
                        type="checkbox"
                        defaultValue="Ich mache die Ausbildung als reine Freizeitbeschäftigung für mich"
                      />
                      <label htmlFor>
                        Ich mache die Ausbildung als reine Freizeitbeschäftigung
                        für mich
                      </label>
                    </div>
                    <div className="info_desc__radio">
                      <input
                        name="name2"
                        type="checkbox"
                        required
                        defaultValue="Ich bin bereits selbständig und möchte Yoga mit ins Programm nehmen"
                      />
                      <label htmlFor>
                        Ich bin bereits selbständig und möchte Yoga mit ins
                        Programm nehmen
                      </label>
                    </div>
                    <div className="info_desc__radio">
                      <input
                        name="name3"
                        type="checkbox"
                        required
                        defaultValue="Die Widerrufsbelehrung/ AGB habe ich zur Kenntnis genommen. Die Widerruffsmöglichkeit beträgt ab dem Tag der Anmeldung 14 Tage."
                      />
                      <label htmlFor>
                        Die Widerrufsbelehrung/ AGB habe ich zur Kenntnis
                        genommen. Die Widerruffsmöglichkeit beträgt ab dem Tag
                        der Anmeldung 14 Tage.{" "}
                      </label>
                    </div>
                    <div
                      className="info_desc__radio "
                      style={{ display: "none" }}>
                      <input
                        name="name4"
                        type="checkbox"
                        defaultValue="Ja, ich möchte den kostenlosen Turiya Yoga Newsletter abonnieren um immer auf dem neusten Stand über Ausbildungen, Angebote und Rabatte zu sein."
                      />
                      <label htmlFor>
                        Ja, ich möchte den kostenlosen Turiya Yoga Newsletter
                        abonnieren um immer auf dem neusten Stand über
                        Ausbildungen, Angebote und Rabatte zu sein.
                      </label>
                    </div>
                    <div className="info_desc__radio">
                      <input
                        name="name5"
                        type="checkbox"
                        required
                        defaultValue="Ich akzeptiere die allgemeinen Geschäftsbedingungen, die Bestandteil dieses vereinbarung sind."
                      />
                      <label htmlFor>
                        {" "}
                        Ich{" "}
                        <span
                          className="btn p-0"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal">
                          akzeptiere die allgemeinen Geschäftsbedingungen{" "}
                        </span>
                        , die Bestandteil dieses vereinbarung sind.
                      </label>
                    </div>
                    <span>
                      *Die Ausbildung ist bei Privatpersonen inkl. MwSt. Nach
                      Erhalt der Anmeldung/ Vereinbarung erhältst du von Turiya
                      Yoga eine ordnungsgemäße Teilnahmebestätigung/Rechnung,
                      die alle Zahlungsinformationen nochmals enthält. Für
                      Firmen ist die MwSt. zusätzlich zu den Ausbildungsgebühren
                      hinzuzurechnen
                    </span>
                    <div className="mt-3">
                      Nicht enthalten sind z. B. Pflichtbücher, Reisekosten zum
                      Seminarort. Solche trägt der Teilnehmer zusätzlich.
                    </div>
                    <div className="info_desc__radio" required>
                      <input
                        name="name6"
                        type="checkbox"
                        required
                        defaultValue="ICH STIMME DEN Turiya Yoga"
                      />
                      <label htmlFor>
                        {" "}
                        ICH STIMME DEN Turiya Yoga{" "}
                        <span
                          className="btn p-0"
                          data-bs-toggle="modal"
                          data-bs-target="#second_modal">
                          AGB ZU *{" "}
                        </span>
                        ,{" "}
                      </label>
                    </div>
                  </div>
                  <div className="order-now">
                    <button
                      className="btn-primary"
                      // name="book_order"
                      //   type="submit"
                      onClick={fetchModuleDetails}>
                      Gebührenpflichtig bestellen
                    </button>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BilingDetails;