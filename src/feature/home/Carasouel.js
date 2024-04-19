import { Carousel } from "@material-tailwind/react";

import { imageUrl } from "../../contants/apis";
import { useGetTopProductsQuery } from "../products/productApi";



const Carasouel = () => {
  const { data } = useGetTopProductsQuery();

  return (
    <div>
      {data && <Carousel loop={true} autoplay={true} className="rounded-xl max-w-4xl mx-auto">
        {data.data.map((product) => {
          return <img className="h-[300px]" key={product._id} src={`${imageUrl}${product.product_image}`} alt="" />
        })}

      </Carousel>}
    </div>
  );
}

export default Carasouel


