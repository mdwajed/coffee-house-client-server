import { FaArrowLeftLong } from "react-icons/fa6";
import EspressoEmporium from "../Component/EspressoEmporium";
import Expresso from "../Component/Expresso";

const Page404 = () => {
    return (
        <>
        <EspressoEmporium></EspressoEmporium>
        <div className="flex flex-col justify-center items-center my-12">
            <h2 className="flex gap-4 font-bold items-center py-6">
          <FaArrowLeftLong></FaArrowLeftLong>
          <span className="text-3xl font-rancho">Back to home</span>
         
        </h2> 
        <img className="w-[700px] h-[500px]" src="/src/assets/images/404/404.gif" alt="" />
        </div>
        <Expresso></Expresso>
        </>
    );
};

export default Page404;