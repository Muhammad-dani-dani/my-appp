
import Dashboard from './componets/Dashboard'
import Myprovider from './componets/Myprovider'
import Test from './componets/Test'


const page = () => {
  // const user = {
  //   id: 1,
  //   name: 'danish'

  // }

  return (
    <div className='flex flex-col items-center justify-between p-6 m-6 ring ring-black bg-gray-300'>
      <p className='text-6xl'>this is our home page </p>
   <Myprovider > 
   <Test/>

    <Dashboard />
   </Myprovider>

     
    </div>
  )
}

export default page