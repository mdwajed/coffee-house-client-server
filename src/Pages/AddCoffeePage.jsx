import AddCoffee from "../Component/AddCoffee";
import EspressoEmporium from "../Component/EspressoEmporium";
import Expresso from "../Component/Expresso";


const AddCoffeePage = () => {
    return (
        <div>
          <EspressoEmporium></EspressoEmporium> 
          <AddCoffee></AddCoffee>
          <Expresso></Expresso>
        </div>
    );
};

export default AddCoffeePage;