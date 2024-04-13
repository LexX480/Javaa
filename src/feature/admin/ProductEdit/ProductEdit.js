import { useParams } from 'react-router';
import ProductEditForm from './ProductEditForm';
import { useGetProductByIdQuery } from '../../products/productApi';

const ProductEdit = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  return (
    <div>
      {data && <ProductEditForm data={data.data} />}
    </div>
  )
}
export default ProductEdit