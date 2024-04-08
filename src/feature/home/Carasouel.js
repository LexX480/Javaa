import { Carousel } from "@material-tailwind/react";
import { useGetTopProductsQuery } from "../admin/productApi";


const Carasouel = () => {
  const { isLoading, data, error, isError } = useGetTopProductsQuery();
  console.log(data);
  return (
    <div>
      {data && <Carousel autoplay={true} className="rounded-xl max-w-4xl mx-auto">
        {data.data.map((product) => {
          return <img className="h-[300px]" key={product._id} src={product.product_image} alt="" />
        })}

      </Carousel>}
    </div>
  );
}

export default Carasouel