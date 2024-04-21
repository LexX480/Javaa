import { Button, Rating, Textarea } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useReviewAddMutation } from './productApi';


const ProductReview = ({ user, id, reviews }) => {

  const [addReview, { isLoading, error }] = useReviewAddMutation();

  const commentSchema = Yup.object({
    rating: Yup.number().required('required'),
    comment: Yup.string().min(5).required(),
  });

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      rating: 0,
      comment: ''
    },
    onSubmit: async (val) => {
      console.log(val);
      console.log(id);
      try {
        await addReview({
          id: id,
          token: user.token,
          body: {
            comment: val.comment,
            rating: val.rating,
            username: user.fullname
          }
        }).unwrap();
        toast.success('successfully added');
      } catch (err) {
        console.log(err);
        toast.error(err.data.message);
      }
    },
    validationSchema: commentSchema
  });
  console.log(reviews);
  return (
    <div className='space-y-2'>

      <h1>Add Review here</h1>

      {!user?.isAdmin && <form onSubmit={handleSubmit}>
        <div className="w-96 space-y-2" >
          <Rating onChange={(e) => setFieldValue('rating', e)} name="rating" />
          <Textarea label="Message" name='comment' onChange={handleChange} />
        </div>
        <Button loading={isLoading} type='submit' className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
      }

      <div className='mt-5'>
        {reviews.map(({ _id, comment, rating, username }) => {
          return <div key={_id} className=' space-y-1'>
            <h1>{username}</h1>
            <Rating value={rating} readonly />
            <p>{comment}</p>
          </div>
        })}
      </div>

    </div>
  )
}

export default ProductReview