import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";


import {
   Textarea,
    Input,
   Button
  } from "@material-tailwind/react";
const Expresso = () => {

  return (
    <>
   
    <div

      className="bg-cover bg-center w-full md:px-20 lg:px-40 py-16"
      style={{ backgroundImage: "url('/src/assets/images/more/13.jpg')" } }
    >
       
      <div className="w-12 h-12 mb-6"><img src="./src/assets/images/more/logo1.png" alt="" /></div>
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
   <div>
   <h2 className="text-4xl font-rancho font-extrabold mb-4">Espresso Emporium</h2>
   <div className=" ">

      <div className="space-y-5 ">
        <div className="text-sm font-normal font-raleway">
        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
        </div>
        <div className="flex gap-4 text-3xl font-extrabold justify-start items-center text-black"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><LuInstagram></LuInstagram><FaLinkedin></FaLinkedin></div>
        <h2 className="text-4xl font-rancho font-bold text-[#331A15]">Get in Touch</h2>
        <p className="flex items-center gap-4 text-base"><FaPhoneAlt className="text-black"></FaPhoneAlt><span>+88 01533 333 333</span></p>
        <p className="flex gap-4 text-base items-center"><IoMailSharp className="text-black"></IoMailSharp><span>info@gmail.com</span></p>
        <p className="flex gap-4 text-base justify-start items-center"><MdPlace className="text-black text-3xl"></MdPlace><span>72, Wall street, King Road, Dhaka</span></p>
      </div>
    </div>
   </div>
   
   <div className="">
   <h2 className="text-4xl font-rancho font-extrabold text-[#331A15] mb-4 ">Connect with Us</h2>
   <div className="">
       <div className="flex flex-col gap-4 ">
         <Input label="Email" className="bg-white" size="lg" />
         <Input label="Password"  className="bg-white" size="lg" />
         <div className="">
         <Textarea label="Message" className="bg-white" />
    </div>
    <Button variant="outlined" className="rounded-full font-rancho font-normal text-[#331A15] bg-white md:w-32" >
    Send Message
      </Button>
      

       </div>
     </div>
   </div>
      </div>
    </div>
     
    <div

      className="bg-cover bg-center w-full h-14  flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/images/more/24.jpg')" } }
    >
<h2 className="text-xl font-rancho text-white">Copyright Espresso Emporium ! All Rights Reserved</h2>
    </div>
    </>
  );
};

export default Expresso;
