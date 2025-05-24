import React, { useEffect, useState } from "react";
import "./profile.scss";
import axios from "axios";


courseData
: 
{_id: '6752cc4b8d673f43d669a766', modulecategory: '674ff7c8896941aaddfda58c', modulesubcategory: '674ffa12896941aaddfda5a6', moduleheading: '200H Yogalehrer Ausbildung M1 + M2', modulesubheading: '200H Yogalehrer Ausbildung M1 + M2', …}
createdAt
: 
"2024-12-19T05:23:23.539Z"
customerAddress
: 
"saket delhi"
customerName
: 
"vrdigitalsolution"
customerNumber
: 
"675414ad177b8c6e33957f3a"
dueDate
: 
"2024-12-19T00:00:00.000Z"
email
: 
"rishuam120@gmail.com"
invoiceNumber
: 
"TY-WEB-REG 3561-12-2024"
orderNumber
: 
"TY17345858035309576"
price
: 
0
productDescription
: 
"200H Yogalehrer Ausbildung M1 + M2"
quantity
: 
1
totalPrice
: 
2699
updatedAt
: 
"2024-12-19T05:23:23.539Z"
userDetails
: 
{_id: '675414ad177b8c6e33957f3a', userType: 'pursue', company: 'vrdigitalsolution', First_name: 'rishu', Last_name: 'kumar', …}
user_type
: 
"pursue"
__v
: 
0
_id
: 
"6763adcbdd426e046cb8bdca"
const Profile = () => {
  const id = localStorage.getItem("turiya_auth_id");
  const [data, setData] = useState('');


    const [cartFetchedData, setcartFetchedData] = useState('');
  const [purchasedCourse, setPuchasedCourse] = useState('');
  

  function formatDate(isoDate) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0"); // Ensures two-digit day
    const month = months[date.getMonth()]; // Get month as a string
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
    
  const updatedAt = "2024-12-19T05:23:23.539Z";
  const formattedDate = formatDate(updatedAt);

    const fetchCartData = () => {
      axios.get('http://127.0.0.1:7000/api/get_all_cart_module').then((response) => {
        console.log("response of cart fetched", response.data.data);
        setcartFetchedData(response.data.data);
      }).catch((error) => {
        console.log("error",error)
      })
    }
  

  console.log("fetchedData of profile", cartFetchedData);


  const FetchedPurchased = () => {
    axios.get('http://127.0.0.1:7000/api/get_purchasedModule').then((response) => {
      console.log("response of FetchedPurchased", response.data.data);
      setPuchasedCourse(response.data.data);
    }).catch((error) => {
      console.log("error",error)
    })
  }


  useEffect(() => {
    fetchCartData();
    FetchedPurchased();
  }, []);


  const fetchUserDetail = () => {
    axios
      .get(`http://127.0.0.1:7000/api/getUserDetailById/${id}`)
      .then((response) => {
        console.log("response of user", response);
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
    localStorage.removeItem('turiya_auth_id');
    localStorage.removeItem('turiya_auth_token')
  }
  



  console.log("purchasedCourse",purchasedCourse)

  return (
    <>
      <section className="myProfile global_wrapper">
        <div className="container">

          <button type="button" onclick={logout} className="btn btn_logout">Logout</button>
          <div className="myProfile_content">
            <h3> Namaste {data && data.First_name} </h3>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}

            {
              purchasedCourse && purchasedCourse.map((item, index )=> {
                return <>
                
                <div className="myProfile_content__box border p-3 m-3">
                <div className="profile_heading">
                  <p>Auftragsnummer - {item.orderNumber} </p>
                  <div className="profile_heading__right">
                    <p>Kaufdatum</p>
                    <p>
                      <i className="bx bxs-calendar" />
                   {   formatDate(item.updatedAt)  }
                    </p>
                  </div>
                </div>
                <div className="profile-row">
                  <p>
                    <b>Padi Amount : €</b>
                    {/*<span> Überfällig seit 0 Tage </span>*/}
                        <b>&nbsp;&nbsp;Total Amount : €{item.totalPrice}</b>
                        <b>&nbsp;&nbsp;Left Amount : -{ item.totalPrice}</b>
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
                          src="media/modules-images/42307037_"
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="profile-picture-content">
                            <h6>{item.courseData && item.courseData.Ausbildung
                            }</h6>
                        <p>{item.courseData && item.courseData.Location

                            }</p>
                        <p>
                          Starttermin <i className="bx bxs-calendar" />
                        {item.courseData && item.courseData.StartDate}
                        </p>
                        <div className="profile-btn">
                          <a href="contract-pdf.php?booking_id=TY1729683518505545">
                            <i className="bx bxs-download" /> Rechnung
                          </a>
                          <a href="amount-pdf.php?booking_id=TY1729683518505545">
                            <i className="bx bxs-download" /> Vereinbarung
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#TY1729683518505545">
                            {" "}
                            <i className="bx bxs-edit" />
                            Dein Ankunftsticket{" "}
                          </a>
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
              })
}
            {
              cartFetchedData && cartFetchedData.map((item, index) => {
                return;
                
                <div className="myProfile_content__box border p-3 m-3">
                <div className="profile_heading">
                  <p>Auftragsnummer - TY1729683518505545 </p>
                  <div className="profile_heading__right">
                    <p>Kaufdatum</p>
                    <p>
                      <i className="bx bxs-calendar" />
                      23-Oct-2024{" "}
                    </p>
                  </div>
                </div>
                <div className="profile-row">
                  <p>
                    <b>Padi Amount : €</b>
                    {/*<span> Überfällig seit 0 Tage </span>*/}
                    <b>&nbsp;&nbsp;Total Amount : €1699.00</b>
                    <b>&nbsp;&nbsp;Left Amount : -1101</b>
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
                          src="media/modules-images/42307037_"
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="profile-picture-content">
                        <h6>* All Inklusive Yogalehrer Ausbildung M3</h6>
                        <p>Goa, Indien</p>
                        <p>
                          Starttermin <i className="bx bxs-calendar" />
                          2024-11-15
                        </p>
                        <div className="profile-btn">
                          <a href="contract-pdf.php?booking_id=TY1729683518505545">
                            <i className="bx bxs-download" /> Rechnung
                          </a>
                          <a href="amount-pdf.php?booking_id=TY1729683518505545">
                            <i className="bx bxs-download" /> Vereinbarung
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#TY1729683518505545">
                            {" "}
                            <i className="bx bxs-edit" />
                            Dein Ankunftsticket{" "}
                          </a>
                          <a href="#">
                            <i className="bx bx-money" /> Zahlungsdetails{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              })
            }
            <div className="myProfile_content__box border p-3 m-3">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1729683518505545 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    23-Oct-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €1699.00</b>
                  <b>&nbsp;&nbsp;Left Amount : -1101</b>
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
                        src="media/modules-images/42307037_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>* All Inklusive Yogalehrer Ausbildung M3</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2024-11-15
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1729683518505545">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1729683518505545">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1729683518505545">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content ">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border p-3 m-3">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1733553971766286 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    07-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €1449.00</b>
                  <b>&nbsp;&nbsp;Left Amount : -1351</b>
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
                        src="media/modules-images/407120610_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>* All Inklusive 60H Senioren YLA</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2024-12-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1733553971766286">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1733553971766286">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1733553971766286">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border p-3 m-3">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1733553980658506 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    07-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €1449.00</b>
                  <b>&nbsp;&nbsp;Left Amount : -1351</b>
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
                        src="media/modules-images/407120610_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>* All Inklusive 60H Senioren YLA</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2024-12-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1733553980658506">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1733553980658506">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1733553980658506">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border p-3 m-3">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1733554039288616 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    07-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €1449.00</b>
                  <b>&nbsp;&nbsp;Left Amount : -1351</b>
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
                        src="media/modules-images/407120610_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>* All Inklusive 60H Senioren YLA</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2024-12-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1733554039288616">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1733554039288616">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1733554039288616">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1733554072943703 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    07-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €1724.31</b>
                  <b>&nbsp;&nbsp;Left Amount : -1075.69</b>
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
                        src="media/modules-images/407120610_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>* All Inklusive 60H Senioren YLA</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2024-12-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1733554072943703">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1733554072943703">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1733554072943703">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1733554407386250 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    07-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €1724.31</b>
                  <b>&nbsp;&nbsp;Left Amount : -1075.69</b>
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
                        src="media/modules-images/407120610_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>* All Inklusive 60H Senioren YLA</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2024-12-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1733554407386250">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1733554407386250">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1733554407386250">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1733554417314020 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    07-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €1724.31</b>
                  <b>&nbsp;&nbsp;Left Amount : -1075.69</b>
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
                        src="media/modules-images/407120610_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>* All Inklusive 60H Senioren YLA</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2024-12-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1733554417314020">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1733554417314020">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1733554417314020">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1734100430384041 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    13-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €2799.00</b>
                  <b>&nbsp;&nbsp;Left Amount : -1</b>
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
                        src="media/modules-images/732458808_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>200H Yogalehrer Ausbildung M1 + M2</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2025-01-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1734100430384041">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1734100430384041">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1734100430384041">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1734100530667490 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    13-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €3330.81</b>
                  <b>&nbsp;&nbsp;Left Amount : 530.81</b>
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
                        src="media/modules-images/732458808_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>200H Yogalehrer Ausbildung M1 + M2</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2025-01-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1734100530667490">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1734100530667490">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1734100530667490">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1734168042966576 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    14-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €3330.81</b>
                  <b>&nbsp;&nbsp;Left Amount : 530.81</b>
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
                        src="media/modules-images/732458808_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>200H Yogalehrer Ausbildung M1 + M2</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2025-01-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1734168042966576">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1734168042966576">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1734168042966576">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myProfile_content">
            {/*<h3> Namaste*/}
            {/*    DSCSeducation*/}
            {/*</h3>*/}
            <div className="myProfile_content__box border">
              <div className="profile_heading">
                <p>Auftragsnummer - TY1734171123775318 </p>
                <div className="profile_heading__right">
                  <p>Kaufdatum</p>
                  <p>
                    <i className="bx bxs-calendar" />
                    14-Dec-2024{" "}
                  </p>
                </div>
              </div>
              <div className="profile-row">
                <p>
                  <b>Padi Amount : €</b>
                  {/*<span> Überfällig seit 0 Tage </span>*/}
                  <b>&nbsp;&nbsp;Total Amount : €3330.81</b>
                  <b>&nbsp;&nbsp;Left Amount : 530.81</b>
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
                        src="media/modules-images/732458808_"
                        className="img-fluid"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="profile-picture-content">
                      <h6>200H Yogalehrer Ausbildung M1 + M2</h6>
                      <p>Goa, Indien</p>
                      <p>
                        Starttermin <i className="bx bxs-calendar" />
                        2025-01-11
                      </p>
                      <div className="profile-btn">
                        <a href="contract-pdf.php?booking_id=TY1734171123775318">
                          <i className="bx bxs-download" /> Rechnung
                        </a>
                        <a href="amount-pdf.php?booking_id=TY1734171123775318">
                          <i className="bx bxs-download" /> Vereinbarung
                        </a>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#TY1734171123775318">
                          {" "}
                          <i className="bx bxs-edit" />
                          Dein Ankunftsticket{" "}
                        </a>
                        <a href="#">
                          <i className="bx bx-money" /> Zahlungsdetails{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
