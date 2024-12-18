import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" py-6 my-3 bg-black text-white h-full">
      <div className="flex justify-around">
        <h2 className="text-2xl">Babari.</h2>
        {/* contact form */}
        <div>
          <h2 className="text-2xl">Contact Us</h2>
          <div>
            <p>Phone: 071422080 9857024734</p>
            <p>
              Email:
              <a href="mailto:mail.hotelbabari@gmail.com">
                mail.hotelbabari@gmail.com
              </a>
            </p>
            <p>VAT No.: 606002343</p>
          </div>
        </div>
        {/* Location */}
        <div>
          <h2 className="text-2xl">Location</h2>
          <p>Old Baneshwar, Kathmandu</p>
        </div>
        {/* Follow us */}
        <div>
          <h2 className="text-2xl">Follow Us</h2>
          <div className="flex gap-4 cursor-pointer text-2xl py-1">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
