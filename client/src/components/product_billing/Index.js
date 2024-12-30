import React, { useState } from "react";

const Index = () => {
  // State variables for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [country, setcountry] = useState('');
  const [address, setAddress] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
  };

  return (
    <>
      <section>
        <div className="container my-4">
          <div className="row">
            <div className="col-sm-4">
              <div className="card shadow-sm mb-3">
                <img
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{ maxHeight: "350px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">FAOES</h5>
                  <p className="card-text my-3">Price :₹279</p>
                </div>
              </div>
            </div>

                      <div className="col-sm-8">
                          

                          <h4 className="text-center my-3">Address</h4>
              <div className="card p-3">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                                      </div>
                                      
                                      <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                          State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">
                          Country
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                                      </div>


                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
