import { useParams } from 'react-router';
import { useGetProductByIdQuery } from './productApi';
import CardSkeleton from '../../ui/CardSkeleton';
import ProductTable from './ProductTable';
import ProductImage from './ProductImage';
import { Rating } from '@material-tailwind/react';
import ProductReview from './ProductReview';
import { useSelector } from 'react-redux';

const ProductDetail = () => {

  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetProductByIdQuery(id);

  const { user } = useSelector((state) => state.userSlice);

  if (isLoading) {
    return <CardSkeleton />
  }



  return (
    <div>
      <div className='grid-cols-3 grid p-10 gap-5 items-start'>


        <ProductImage data={data} />
        {data && <div>

          <p>{data.data.product_detail}</p>
          <Rating className="" value={4} color="green" readonly />
        </div>}

        {data && <ProductTable data={data} />}

        {user && data && <ProductReview user={user} id={data.data._id} reviews={data.data.reviews} />}

      </div>
    </div>
  )
}
export default ProductDetail