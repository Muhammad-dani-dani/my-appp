
import UserDetail from './UserDetail'


const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-between p-6 m-6 ring ring-black bg-gray-200'>
        <p className='text-gray-900 font-bold m-2 text-3xl'>this is our Dashboard </p>
        
        <UserDetail />
    </div>
  )
}

export default Dashboard