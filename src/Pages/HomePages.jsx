import Banner from "../Component/Banner";
import DeliciousCoffee from "../Component/DeliciousCoffee";
import EspressoEmporium from "../Component/EspressoEmporium";
import Expresso from "../Component/Expresso";
import Instagram from "../Component/Instagram";
import PopularProducts from "../Component/PopularProducts";



const HomePages = () => {
    return (
        <div>
         <EspressoEmporium></EspressoEmporium>  
          <DeliciousCoffee></DeliciousCoffee>
          <Banner></Banner>
          <PopularProducts></PopularProducts>
          <Instagram></Instagram>
          <Expresso></Expresso>
        </div>
    );
};

export default HomePages;