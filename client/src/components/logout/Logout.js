import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

const Logout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: formData.username,
      password: formData.password,
    };

    if (validate()) {
      console.log("Form submitted successfully", formData);

      axios
        .post(`${BASE_URL}/loginnew`, payload)
        .then((response) => {
          console.log("response of login", response.data);
          setToken(response.data.token);
          setUserDetail(response.data.user)
          localStorage.setItem('turiya_auth_token', response.data.token);
          localStorage.setItem('turiya_auth_id',response.data.user._id);
          if (response.status == 200) {
     Swal.fire({
              title: "Thank You!",
              text: "Logged Successfully!",
              icon: "success"
            });
            navigate("/");
          } else if(response.status == 404) {
            alert("Not Registered");
          }
        })
        .catch((error) => {
          alert("somwthing went wrong");

          console.log("error", error);
        });
    } else {
      alert("validation failed");
    }
  };

  return (
      <>
      
            {isModalOpen && (
                  <div className="form-body">
                    <div className="modal fade show" id="exampleModal-form">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-body">
                            <div className="form-body-top">
                              <div className="modal_input">
                                <label>
                                  Benutzername <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  name="username" // Set the name so it corresponds with the state field
                                  value={formData.username}
                                  onChange={handleChange} // Update the state when the value changes
                                />
                              </div>
                              <div className="modal_input">
                                <label>
                                  Passwort <span>*</span>
                                </label>
                                <input
                                  type="password"
                                  name="password" // Set the name so it corresponds with the state field
                                  value={formData.password}
                                  onChange={handleChange} // Update the state when the value changes
                                />
                              </div>
                              <div className="submit-form">
                                <button
                                  className="global_btn"
                                  onClick={handleSubmit} // Trigger the handleSubmit function on click
                                >
                                  Einloggen
                                </button>
                              </div>
                            </div>
                            <div className="form-body-bottom card-footer">
                              <div className="password-forgot">
                                <a
                                  href="forgot-login.php"
                                  className="btn btn-primary">
                                  Passwort vergessen?
                                </a>
                              </div>
                              <h3>Hast du noch keinen Account?</h3>
                              <div className="annmelden" onClick={handleredirect}>
                                <Link to="#">Anmelden</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
      
      </>
  )
}

export default Logout