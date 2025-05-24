import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    persone: '',
    c_name: '',
    f_name: '',
    l_name: '',
    email: '',
    email_confirm: '',
    gender: 'male',
    phone: '',
    user_name: '',
    password: '',
    address: '',
    country: 'india',
    federal_state: '',
    city: '',
    postal_code: '',
  });

  const [errors, setErrors] = useState({});
  const [showCompanyInput, setShowCompanyInput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'persone') {
      setShowCompanyInput(value === 'Corperate-Persone');
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.persone) newErrors.persone = 'Bitte auswählen';
    if (formData.persone === 'Corperate-Persone' && !formData.c_name)
      newErrors.c_name = 'Unternehmensname ist erforderlich';
    if (!formData.f_name) newErrors.f_name = 'Vorname ist erforderlich';
    if (!formData.l_name) newErrors.l_name = 'Nachname ist erforderlich';
    if (!formData.email) newErrors.email = 'E-Mail ist erforderlich';
    if (formData.email !== formData.email_confirm)
      newErrors.email_confirm = 'Die E-Mails stimmen nicht überein';
    if (!formData.phone) newErrors.phone = 'Telefon ist erforderlich';
    if (!formData.user_name) newErrors.user_name = 'Benutzername ist erforderlich';
    if (!formData.password) newErrors.password = 'Passwort ist erforderlich';
    if (!formData.address) newErrors.address = 'Adresse ist erforderlich';
    if (!formData.federal_state) newErrors.federal_state = 'Bundesstaat ist erforderlich';
    if (!formData.city) newErrors.city = 'Stadt ist erforderlich';
    if (!formData.postal_code) newErrors.postal_code = 'Postleitzahl ist erforderlich';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data:', formData);
      // Here you can send the data to the server or perform another action


      const payload = {
        "userType": "pursue",
        "company": "vrdigitalsolution",
        "First_name": formData.f_name,
        "Last_name": formData.l_name,
        "email": formData.email,
        "Confirm_email_address": formData.email_confirm,
        "gender": formData.gender,
        "phone": formData.phone,
        "username": formData.user_name,
        "create_password": formData.password,
        "address": formData.address,
        "country": formData.country,
        "federal_state": formData.federal_state,
        "city": formData.city,
        "postal_code": formData.postal_code
      };

      console.log("payload", payload);

      axios.post(`${BASE_URL}/register`, payload).then((response) => {
        console.log("response of register", response);
      }).catch((error) => {
        console.log("error", error);
})


    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-12 mb-3 form-group">
        <label className="nott ls0 fw-medium mb-1" htmlFor="taxi">
          Bist du? <small>*</small>
        </label>
        <input
          name="persone"
          id="persone_yes"
          className="my-1 me-1 ms-3 taxi-option"
          type="radio"
          value="Corperate-Persone"
          checked={formData.persone === 'Corperate-Persone'}
          onChange={handleInputChange}
        />
        <label htmlFor="persone_yes" className="nott ls0 fw-medium mb-1">
          Unternehmen
        </label>
        <input
          name="persone"
          id="persone_no"
          className="my-1 ms-3 me-1 taxi-option"
          type="radio"
          value="Private-Persone"
          checked={formData.persone === 'Private-Persone'}
          onChange={handleInputChange}
        />
        <label htmlFor="persone_no" className="nott ls0 fw-medium mb-1">
          Privatperson
        </label>
        {errors.persone && <p className="error">{errors.persone}</p>}
      </div>

      {showCompanyInput && (
        <div className="col-12 mb-2 taxi-time-container">
          <label htmlFor="c_name">Enter your company name: <small>*</small></label>
          <br />
          <input
            type="text"
            id="c_name"
            name="c_name"
            className="form-control"
            value={formData.c_name}
            onChange={handleInputChange}
          />
          {errors.c_name && <p className="error">{errors.c_name}</p>}
        </div>
      )}

      <div className="modal_input">
        <label>Vorname <span>*</span></label>
        <input
          type="text"
          name="f_name"
          value={formData.f_name}
          onChange={handleInputChange}
          required
        />
        {errors.f_name && <p className="error">{errors.f_name}</p>}
      </div>

      {/* Repeat similarly for other fields like l_name, email, etc. */}

      <div className="registration-btn">
        <button type="submit" name="submit_form" className="global_btn">
          REGISTRIEREN
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
