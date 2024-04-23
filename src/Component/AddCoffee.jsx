import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { FaArrowLeftLong } from "react-icons/fa6";
const AddCoffee = () => {
  return (
    <>
      <div className="md:max-w-6xl mx-auto my-12">
        <h2 className="flex gap-4 font-bold items-center py-6">
          <FaArrowLeftLong></FaArrowLeftLong>
          <span className="text-3xl font-rancho">Back to home</span>
        </h2>
        <div className="bg-[#F4F3F0]  rounded-lg my-6">
          <div className="p-12">
            <div className="text-center">
              <h2 className="font-normal text-5xl font-rancho text-[#374151]">
                Add New Coffee
              </h2>
              <p className="my-4 font-raleway">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking 
                at its layout.The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters,
               as opposed to using Content here.
              </p>
            </div>
            <form>
              <div className=" flex flex-col gap-6 sm:flex-row">
                <Card color="transparent" shadow={false} className="flex-1">
                  {/* <div className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"> */}
                  <div className="flex flex-col gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-4"
                    >
                      Name
                    </Typography>
                    <Input
                      size="lg"
                      name="name"
                      placeholder="Enter Coffee Name"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-4"
                    >
                      Supplier
                    </Typography>
                    <Input
                      size="lg"
                      name="supplier"
                      placeholder="Enter Coffee Supplier"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-4"
                    >
                      Category
                    </Typography>
                    <Input
                      size="lg"
                      name="category"
                      placeholder="Enter Coffee Category"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  {/* </card> */}
                </Card>
                <Card color="transparent" shadow={false} className="flex-1">
                  {/* sm:w-96 w-80 */}
                  <div className="mb-1 flex flex-col gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-4"
                    >
                      Chef
                    </Typography>
                    <Input
                      size="lg"
                      name="chef"
                      placeholder="Enter Coffee Chef"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-4"
                    >
                      Taste
                    </Typography>
                    <Input
                      size="lg"
                      name="taste"
                      placeholder="Enter Coffee Taste"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-4"
                    >
                      Details
                    </Typography>
                    <Input
                      size="lg"
                      name="details"
                      placeholder="Enter Coffee Details"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </Card>
              </div>

              <div className="w-full mx-auto">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Photo
                </Typography>
                <Input
                  size="lg"
                  name="photoURL"
                  placeholder="Enter Your Photo URL"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="w-full mx-auto mt-4 rounded-lg">
                <Button
                  fullWidth
                  className="bg-[#D2B48C] text-black font-rancho text-base"
                >
                  Add Coffee
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
