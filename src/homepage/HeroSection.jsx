import bg from "../assets/bgimage.png";
const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        width: "100%",
      }}
      className="relative  flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <section className="  font-bold relative text-white text-center p-7">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Hotel Babari</h1>
          </div>

          <div>
            <p className="text-lg  p-5 mx-[10%]">
              Experience unparalleled comfort and luxury at our hotel, where
              modern amenities meet timeless elegance. Indulge in exquisite
              dining, relax in spacious rooms, and enjoy world-class hospitality
              tailored to make every moment unforgettable.
            </p>
          </div>

          <div className="cursor-pointer bg-[#3D69CB] px-14 py-4 rounded-xl hover:scale-105 mt-2 ">
            <button>Book Now</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
