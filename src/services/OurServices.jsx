import { MdBedroomChild } from "react-icons/md";
const OurServices = () => {
  const serviceData = [
    {
      icon: <MdBedroomChild />,
      name: "Room Service",
      description:
        "Enjoy delicious meals delivered to your room, available 24/7.",
    },
    {
      icon: <MdBedroomChild />,
      name: "Room Service",
      description:
        "Enjoy delicious meals delivered to your room, available 24/7.",
    },
    {
      icon: <MdBedroomChild />,
      name: "Room Service",
      description:
        "Enjoy delicious meals delivered to your room, available 24/7.",
    },
  ];
  return (
    <main>
      <h1 className="text-center font-bold text-3xl p-2 my-2">Our Services</h1>
      <hr />
      <div className="flex justify-center items-center gap-5 mx-[2%] my-2">
        {serviceData.map((val, i) => {
          return (
            <div
              key={i}
              className="w-fit h-fit p-20 border rounded-md flex items-center gap-3 justify-center cursor-pointer"
            >
              <div className=" text-blue-500 text-9xl p-2    ">{val.icon}</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-semibold">{val.name}</div>
                <div className="text-sm">{val.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default OurServices;
