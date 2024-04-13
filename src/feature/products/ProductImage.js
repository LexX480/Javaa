import { imageUrl } from "../../contants/apis";



const ProductImage = ({ data }) => {
  const { data: product } = data;
  return (
    <figure className="relative h-[300px] w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={`${imageUrl}${product.product_image}`}
        alt="nature image"
      />

    </figure>
  );
}

export default ProductImage