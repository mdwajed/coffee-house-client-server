const Banner = () => {
  return (
    <>
      <div className="bg-[#ECEAE3] grid grid-cols-2 md:grid-cols-4 gap-8 px-56 p-6">
        <div>
          <img src="/src/assets/images/icons/1.png" alt="" />
          <h2 className="text-4xl font-rancho">Awesome Aroma</h2>
          <p className="text-base">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="/src/assets/images/icons/2.png" alt="" />
          <h2 className="text-4xl font-rancho">High Quality</h2>
          <p className="text-base">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img src="/src/assets/images/icons/3.png" alt="" />
          <h2 className="text-4xl font-rancho">Pure Grades</h2>
          <p className="text-base">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src="/src/assets/images/icons/4.png" alt="" />
          <h2 className="text-4xl font-rancho">Proper Roasting</h2>
          <p className="text-base">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
