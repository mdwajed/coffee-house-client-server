
import { FaArrowLeftLong } from "react-icons/fa6";
const NiceTies = () => {
  return (
    <>
    
    <div className="   w-full h-full" style={{ backgroundImage: "url('/src/assets/images/more/11.png')" } }>
    <h2 className="md:ml-48 flex gap-4 font-bold items-center py-6">
          <FaArrowLeftLong></FaArrowLeftLong>
          <span className="text-3xl font-rancho text-[#374151]">Back to home</span>
        </h2>
   <div className="bg-[#F4F3F0] md:flex justify-center items-center gap-24 md:max-w-6xl mx-auto  md:px-48 md:py-12 mb-8">
   <div>
        <img className="w-full md:h-[500px]" src="/src/assets/images/3.png" alt="" />
      </div>
      <div className="text-lg font-raleway space-y-3">
        <h2 className="text-4xl font-rancho mb-4 font-semibold">Niceties</h2>
        <p>
          <span className="font-bold">Name : </span>Americano Coffee
        </p>
        <p>
          <span className="font-bold">Chef : </span>Mr. Matin Paul
        </p>
        <p>
          <span className="font-bold">Supplier : </span>Cappu
        </p>
        <p>
          <span className="font-bold"> Authorizer Taste : </span>Sweet and hot
        </p>
        <p>
          <span className="font-bold"> Category : </span>Americano
        </p>
        <p>
          <span className="font-bold"> Details : </span> Espresso with hot water
        </p>
      </div>
   </div>
    </div>
    </>
  );
};

export default NiceTies;
