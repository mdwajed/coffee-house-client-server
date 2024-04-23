import { Button } from "@material-tailwind/react";

const DeliciousCoffee = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute space-y-4 top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h2 className="text-4xl font-bold font-rancho  text-[#FFFFFF]">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-base font-raleway text-white">
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of <br /> every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <Button className="bg-[#e3b577] text-2xl text-black font-rancho lowercase">
            Learn More
          </Button>
          ;
        </div>
        <img
          className="w-full max-h-screen bg-cover bg-center"
          src="/src/assets/images/more/3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DeliciousCoffee;
