import { useParams } from 'react-router';
import { useGetProductByIdQuery } from './productApi';
import CardSkeleton from '../../ui/CardSkeleton';
import ProductTable from './ProductTable';
import ProductImage from './ProductImage';
import { Rating } from '@material-tailwind/react';

const ProductDetail = () => {

  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <CardSkeleton />
  }



  return (
    <div className='grid-cols-3 grid p-10 gap-5 items-start'>


      <ProductImage data={data} />
      {data && <div>

        <p>{data.data.product_detail}</p>
        <Rating className="" value={4} color="green" readonly />
      </div>}

      {data && <ProductTable data={data} />}


    </div>
  )
}
export default ProductDetail