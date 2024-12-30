import React from 'react';
import './price_card.scss';

const PriceCard = ({
  title,
  price,
  offerPrice,
  location,
  date,
  description,
  phoneNumber,
  email
}) => {


  function formatDateRange(dateRange) {
    // Split the input string into start and end dates
    const [startDate, endDate] = dateRange.split(" - ");
  
    // Helper function to format a date
    function formatDate(dateString) {
      const [year, month, day] = dateString.split("-");
      return `${day}.${month}.${year}`;
    }
  
    // Format both start and end dates
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
  
    // Combine them into the desired format
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
  
  // Example usage
  const inputDateRange = "2025-01-11 - 2025-01-31";
  const formattedDateRange = formatDateRange(inputDateRange);
  console.log(formattedDateRange); // Output: "11.01.2025 - 31.01.2025"
  


  return (
    <div className="about_wrapper__right mb-3">
      <h3>{title}</h3>
      <div className="price-tag">
        {
          offerPrice?<h6><i className="bx bxs-purchase-tag" />{ offerPrice?offerPrice:price}</h6>:null
        }
        
        {/* <p>{offerPrice}</p> */}
      </div>
      <div className="about-date">
        {location ? <p><i className="bx bxs-map" />{location}</p> : null}
       {date ? <p><i className="bx bxs-calendar" /> {formatDateRange(date)}</p> :null}
      </div>
      <div className="about-text">
        <p>{description}</p>
      </div>
      <div className="about-contact">
        <a href={`tel:${phoneNumber}`}><i className="bx bxs-phone-call" /> {phoneNumber}</a>
        <a href={`mailto:${email}`}><i className="bx bxs-envelope" /> {email}</a>
      </div>
    </div>
  );
}

export default PriceCard;
