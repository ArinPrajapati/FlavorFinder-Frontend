import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// Import the Category interface from your utils folder
import { Category } from "../../lib/utils/category";

function CategorySection() {
  return (
    <>
      <h1 className="text-center font-semibold text-[3rem] my-5 textBLueGreen">
        Category's
      </h1>
      <div className="overflow-x-auto whitespace-nowrap my-4 w-[100rem] m-auto">
        <div className="flex space-x-4 gap-4 p-10">
          {Category.map((category, index) => (
            <div className="w-96" key={index}>
              <Card className="w-[16rem] scale-90 p-3">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img src={category.img} alt={category.Name} width={"100%"} />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {category.Name}
                  </Typography>
                  <Typography>{category.sub}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button color="indigo">Find About</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategorySection;
