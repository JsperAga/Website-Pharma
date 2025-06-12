export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Feel free to reach out or visit us.</p>

        <div className="contact-details">
          <div>
            <h3>📍 Address</h3>
            <p>123 Birchmount Rd, Toronto, ON</p>
          </div>
          <div>
            <h3>📞 Phone</h3>
            <p>(416) 123-1234</p>
          </div>
          <div>
            <h3>📧 Email</h3>
            <p>contact@jzpharma.ca</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Jz Pharmacy Location"
            src="https://www.google.com/maps?q=123+Birchmount+Rd,+Toronto,+ON&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
