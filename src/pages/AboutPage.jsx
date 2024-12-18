import React from "react";
import "../styles/style.css";

const AboutPage = () => {
  return (
    <section className="about-section">
      <h1 className="section-title">About Hotel Babari Pvt. Ltd.</h1>
      <div className="about-info">
        <p>
          Hotel Babari Pvt. Ltd. is a premier hotel located in Sinamaina-2,
          Rupandehi, Nepal. We are committed to providing our guests with
          exceptional service and unforgettable experiences during their stay.
        </p>
        <p>
          Whether you're traveling for business or leisure, our hotel offers
          comfortable accommodations, modern amenities, and personalized service
          to ensure a pleasant stay.
        </p>
        <hr />
        <h4>Contact Us</h4>
        <ul>
          <li>
            <strong>Email:</strong> mail.hotelbabari@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 071422080 ,9857024734
          </li>
          <li>
            <strong>VAT No.:</strong> 606002343
          </li>
          <li>
            <strong>Location:</strong> Sainamaina-2, Sorauli,Rupandehi, Nepal
          </li>
        </ul>
        <p>
          We look forward to welcoming you to Hotel Babari Pvt. Ltd. for an
          unforgettable stay.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
