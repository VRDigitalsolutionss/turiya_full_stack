import React from 'react'

const Index = ({ imgSrc, imgAlt, country, description, link, linkText }) => {
  return (
      <>
<div className="third_section__box aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
      <div className="box_img">
        {/* Use props for the image source and alt text */}
        <img src={imgSrc} className="img-fluid" alt={imgAlt} />
      </div>
      <div className="box_content">
        {/* Use props for the country name and description */}
        <h3>{country}</h3>
        <p>{description}</p>
        <div className="mehr--btn">
          {/* Use props for the link and link text */}
          <a href={link}>{linkText}</a>
        </div>
      </div>
    </div>

      
      
      
      </>
  )
}

export default Index