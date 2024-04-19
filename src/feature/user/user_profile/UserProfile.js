import React from 'react'
import UserOrder from './UserOrder'
import UserDetailForm from './UserDetailForm'
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { user } = useSelector((state) => state.userSlice);
  return (
    <div className='grid grid-cols-3 p-4 gap-10'>
      <div>
        <UserDetailForm user={user} />
      </div>

      <div className='col-span-2'>
        <UserOrder user={user} />
      </div>



    </div>
  )
}

export default UserProfile