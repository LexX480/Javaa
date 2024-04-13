import { Carousel } from "@material-tailwind/react";
import { useGetTopProductsQuery } from "../products/productApi";
import { imageUrl } from "../../contants/apis";


const Carasouel = () => {
  const { isLoading, data, error, isError } = useGetTopProductsQuery();

  return (
    <div>
      {data && <Carousel autoplay={true} className="rounded-xl max-w-4xl mx-auto">
        {data.data.map((product) => {
          return <img className="h-[300px]" key={product._id} src={`${imageUrl}${product.product_image}`} alt="" />
        })}

      </Carousel>}
    </div>
  );
}

export default Carasouel