import { Button } from "@material-tailwind/react";


import Expresso from "../Component/Expresso";
import AddCoffee from "../Component/AddCoffee";
import DeliciousCoffee from "../Component/DeliciousCoffee";

const Fram1 = () => {
    return (
            <>
              <div className="mx-12 my-12">
                <h1 className="mx-16 text-[#331a15] text-7xl my-4 font-bold font-rancho ">
                  Before
                </h1>
              
              </div>
              <DeliciousCoffee></DeliciousCoffee>
              <div className="mx-12 my-12">
                <h1 className="md:mx-16  text-[#331a15] text-7xl my-4 font-bold font-rancho ">
                  After Hover Effect
                </h1>
              
              </div>
              <DeliciousCoffee></DeliciousCoffee>
              <div className="flex justify-around items-center md:w-[80%] mx-16">
              <div className="space-y-8 flex flex-col justify-center items-center">
              <h1 className="mx-16 text-[#331a15] text-5xl my-4 font-bold font-rancho ">
                  Before
                </h1>
                <Button size="sm" className="bg-[#e3b577] text-lg text-black font-rancho lowercase">
                  Add Coffee
                </Button>
              </div>
              <div className="space-y-8 flex flex-col justify-center items-center">
              <h1 className="md:mx-16  text-[#331a15] text-5xl my-4 font-bold font-rancho ">
                  After Hover Effect
                </h1>
                <Button
                  variant="outlined" size="sm"
                  className=" text-lg text-black font-rancho lowercase"
                >
                  Add Coffee
                </Button>
              </div>
              </div>
        
              <div className="my-12 mx-12 w-[75%]">
              <h1 className="mx-16 text-[#331a15] text-7xl my-4 font-bold font-rancho ">
                  Before
                </h1>
                <Expresso></Expresso>
              </div>
              
              <div className="my-12 mx-12 w-[75%]">
              <h1 className="mx-16 text-[#331a15] text-7xl my-4 font-bold font-rancho ">
              After Hover Effect
                </h1>
               <Expresso></Expresso> 
              </div>
              <div className="mx-12 flex flex-row items-center justify-center gap-12">
              <div className="w-1/2">
              <h1 className="mx-16 text-[#331a15] text-6xl my-4 font-bold font-rancho ">
                  Before
                </h1>
                <div className=""><AddCoffee></AddCoffee></div>
              </div>
              <div className="w-1/2">
              <h1 className="mx-16 text-[#331a15] text-6xl my-4 font-bold font-rancho ">
              After Hover Effect
                </h1>
               <div> <AddCoffee></AddCoffee></div>
              </div>
              </div>
            </>
          
    );
};

export default Fram1;