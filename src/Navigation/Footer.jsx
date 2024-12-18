import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white ">
      <div className="flex flex-wrap justify-around items-start gap-6">
        <h2 className="text-2xl font-bold">Babari.</h2>
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <div className="text-sm mt-2">
            <p>Phone: 071422080, 9857024734</p>
            <p>
              Email:{" "}
              <a
                href="mailto:mail.hotelbabari@gmail.com"
                className="underline text-blue-400"
              >
                mail.hotelbabari@gmail.com
              </a>
            </p>
            <p>VAT No.: 606002343</p>
          </div>
        </div>
        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold">Location</h2>
          <p className="text-sm mt-2">Old Baneshwar, Kathmandu</p>
        </div>
        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex gap-4 mt-2 text-2xl">
            <FaFacebook className=" cursor-pointer" />
            <FaTwitter className=" cursor-pointer" />
            <FaInstagram className=" cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
