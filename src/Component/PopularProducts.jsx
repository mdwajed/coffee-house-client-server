import { BiCommentAdd } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
const PopularProducts = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center w-full h-full my-12"
        style={{ backgroundImage: "url('/src/assets/images/more/1.png')" }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xl font-raleway text-center ">
            --- Sip & Savor ---
          </p>
          <h2 className="text-6xl font-rancho text-center text-[#331A15]">
            Our Popular Products
          </h2>
          <div className="bg-[#E3B577] flex justify-center gap-3 w-32 my-3 py-2 font-rancho items-center md:ml-[500px] rounded-lg text-white">
            Add Coffee <BiCommentAdd></BiCommentAdd>
          </div>

          <div className="grid grid-cols-2 gap-2 ">
            <div className="bg-[#F5F4F1] flex gap-8 justify-center items-center rounded-xl ">
              {" "}
              <img
                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                src="/src/assets/images/1.png"
                alt=""
              />
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Name : </span>Americano Coffee
                </p>
                <p>
                  {" "}
                  <span>Chef : </span> Mr. Matin Paul
                </p>
                <p>
                  <span>Price : </span>890 Taka
                </p>
              </div>
              <div className="relative space-y-4">
                {/* Eye icon */}
                <div className="relative bg-[#D2B48C] p-4 rounded-full">
                  <IoEyeOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Delete icon */}
                <div className="relative bg-[#3C393B] p-4 rounded-full">
                  <AiOutlineDelete className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Pencil icon */}
                <div className="relative bg-[#EA4744] p-4 rounded-full">
                  <HiOutlinePencil className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-[#F5F4F1] flex gap-8 justify-center items-center rounded-xl">
              {" "}
              <img
                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                src="/src/assets/images/2.png"
                alt=""
              />
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Name : </span>Expreso Coffee
                </p>
                <p>
                  {" "}
                  <span>Chef : </span> Mrs. Morisha
                </p>
                <p>
                  <span>Price : </span>890 Taka
                </p>
              </div>
              <div className="relative space-y-4">
                {/* Eye icon */}
                <div className="relative bg-[#D2B48C] p-4 rounded-full">
                  <IoEyeOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Delete icon */}
                <div className="relative bg-[#3C393B] p-4 rounded-full">
                  <AiOutlineDelete className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Pencil icon */}
                <div className="relative bg-[#EA4744] p-4 rounded-full">
                  <HiOutlinePencil className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-[#F5F4F1] flex gap-8 justify-center items-center rounded-xl ">
              {" "}
              <img
                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                src="/src/assets/images/3.png"
                alt=""
              />
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Name : </span>Macchiato Coffee
                </p>
                <p>
                  {" "}
                  <span>Chef : </span> Mr. Muruti
                </p>
                <p>
                  <span>Price : </span>890 Taka
                </p>
              </div>
              <div className="relative space-y-5">
                {/* Eye icon */}
                <div className="relative bg-[#D2B48C] p-4 rounded-full">
                  <IoEyeOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Delete icon */}
                <div className="relative bg-[#3C393B] p-4 rounded-full">
                  <AiOutlineDelete className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Pencil icon */}
                <div className="relative bg-[#EA4744] p-4 rounded-full">
                  <HiOutlinePencil className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-[#F5F4F1] flex gap-8 justify-center items-center rounded-xl">
              {" "}
              <img
                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                src="/src/assets/images/4.png"
                alt=""
              />
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Name : </span> Blackhot  Coffee
                </p>
                <p>
                  {" "}
                  <span>Chef : </span> Mr. Nibra Sweden
                </p>
                <p>
                  <span>Price : </span>890 Taka
                </p>
              </div>
              <div className="relative space-y-4">
                {/* Eye icon */}
                <div className="relative bg-[#D2B48C] p-4 rounded-full">
                  <IoEyeOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Delete icon */}
                <div className="relative bg-[#3C393B] p-4 rounded-full">
                  <AiOutlineDelete className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Pencil icon */}
                <div className="relative bg-[#EA4744] p-4 rounded-full">
                  <HiOutlinePencil className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-[#F5F4F1] flex gap-8 justify-center items-center rounded-xl">
              {" "}
              <img
                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                src="/src/assets/images/5.png"
                alt=""
              />
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Name : </span>Cappuccino Coffee
                </p>
                <p>
                  {" "}
                  <span>Chef : </span> Mr. Matin Paul
                </p>
                <p>
                  <span>Price : </span>890 Taka
                </p>
              </div>
              <div className="relative space-y-4">
                {/* Eye icon */}
                <div className="relative bg-[#D2B48C] p-4 rounded-full">
                  <IoEyeOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Delete icon */}
                <div className="relative bg-[#3C393B] p-4 rounded-full">
                  <AiOutlineDelete className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Pencil icon */}
                <div className="relative bg-[#EA4744] p-4 rounded-full">
                  <HiOutlinePencil className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-[#F5F4F1] flex gap-8 justify-center items-center rounded-xl">
              {" "}
              <img
                className="h-40 max-w-full rounded-lg object-cover object-center md:h-60"
                src="/src/assets/images/6.png"
                alt=""
              />
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Name : </span>Madrionalcaf  Coffee
                </p>
                <p>
                  {" "}
                  <span>Chef : </span> Mr. Muruti Paul
                </p>
                <p>
                  <span>Price : </span>890 Taka
                </p>
              </div>
              <div className="relative space-y-4">
                {/* Eye icon */}
                <div className="relative bg-[#D2B48C] p-4 rounded-full">
                  <IoEyeOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Delete icon */}
                <div className="relative bg-[#3C393B] p-4 rounded-full">
                  <AiOutlineDelete className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Pencil icon */}
                <div className="relative bg-[#EA4744] p-4 rounded-full">
                  <HiOutlinePencil className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
