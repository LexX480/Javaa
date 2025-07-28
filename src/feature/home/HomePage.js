import CardSkeleton from "../../ui/CardSkeleton"
import { useGetProductsQuery } from "../admin/productApi"
import Carasouel from "./Carasouel"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const HomePage = () => {

  const { data, isLoading, isError, error } = useGetProductsQuery();
  if (isLoading) {
    return <CardSkeleton />
  }

  return (
    <div className="p-4">
      <Carasouel />
      <div className="grid grid-cols-3 gap-5">


        {data && data.data.map((product) => {
          return <Card key={product._id} className="mt-6  ">
            <CardHeader shadow={false} floated={false} className="h-52">
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {product.product_name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  ${product.product_price}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {product.product_detail}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                moree
              </Button>
            </CardFooter>
          </Card>;
        })}
      </div>

    </div>
  )
}
export default HomePage