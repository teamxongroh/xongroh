import Assets from '@/assets/Assets'
import ImageDiv from '@/components/ImageDiv'

const Profile = () => {
  return (
      <div className='bg-[#FFDEB4]'>
        <div className='flex flex-col'>
          <img src={Assets.dummy1} className=' h-40 object-cover'/>
          <div className='header px-3 pt-5 pb-5 bg-[#F0D9FF] rounded-b-3xl flex flex-col items-center'>
              <div className='flex flex-row -mb-10'>
                <div>25 creations</div>
                <img src={Assets.user2} className='relative bottom-16'/>
                <div>25k Supporters</div>
              </div>
              
              <div className='font-bold pb-2'>Mahindra alpha beta</div>
              <p className=' px-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis a est dapibus posuere. Donec molestie risus ac elit imperdiet pretium. Phasellus volutpat nec ligula at accumsan.</p>
              
              <div className='flex flex-row'>
                  <button className='border-2 border-black rounded-3xl  bg-[#F5F5F7]'>Creators</button>
                  <button className='border-2 border-black rounded-3xl  bg-[#F5F5F7]'>Communities</button>
                  <button className='border-2 border-black rounded-3xl  bg-[#F5F5F7]'>Events</button>
              </div>
          </div>
        </div>

        <div className='p-5'>
          <div className='overflow-x-scroll whitespace-nowrap'>
              <div className='flex flex-row justify-between font-semibold'>
                  <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Creators</button>
                  <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Communities</button>
                  <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Events</button>
                  <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Courses</button>
              </div>
          </div>
        </div>

      <div className='px-3'>
        <ImageDiv/>
        <ImageDiv/>
        <ImageDiv/>
      </div>

  </div>
  )
}

export default Profile