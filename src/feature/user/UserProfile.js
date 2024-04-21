import React from 'react'
import UserOrder from '../order/UserOrder'
import UserDetailForm from '../shared/UserDetailForm'
import { useSelector } from 'react-redux';
import { useOrderByUserQuery } from '../order/orderApi';

const UserProfile = () => {
  const { user } = useSelector((state) => state.userSlice);
  const { data, error, isError, isLoading } = useOrderByUserQuery({
    token: user.token,
    userId: user.id
  });
  return (
    <div className='grid grid-cols-3 p-4 gap-10'>
      <div>
        <UserDetailForm user={user} />
      </div>

      <div className='col-span-2'>
        <UserOrder data={data} />
      </div>



    </div>
  )
}

export default UserProfile