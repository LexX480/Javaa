import React from 'react'
import { useSelector } from 'react-redux';
import UserDetailForm from '../shared/UserDetailForm';
import UserOrder from '../order/UserOrder';
import { useGetAllOrdersQuery } from '../order/orderApi';

const AdminProfile = () => {
  const { user } = useSelector((state) => state.userSlice);
  const { data, error, isError, isLoading } = useGetAllOrdersQuery(user?.token);
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

export default AdminProfile