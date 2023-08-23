import Assets from '@/assets/Assets'
import ImageDiv from '@/components/ImageDiv'

const Profile = () => {
  return (
      <div className='bg-[#FFDEB4]'>
        <img src={Assets.dummy1}/>
        <div className='header pt-5 pb-10 bg-[#F0D9FF] rounded-b-3xl flex flex-col items-center'>
            <div className='flex flex-row'>
              <div>25 creations</div>
              <img src={Assets.user2}/>
              <div>25k Supporters</div>
            </div>
            <div>Mahindra alpha beta</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis a est dapibus posuere. Donec molestie risus ac elit imperdiet pretium. Phasellus volutpat nec ligula at accumsan.</p>
            <div className='flex flex-row'>
                <button className='border-2 border-black rounded-3xl  bg-[#F5F5F7]'>Creators</button>
                <button className='border-2 border-black rounded-3xl  bg-[#F5F5F7]'>Communities</button>
                <button className='border-2 border-black rounded-3xl  bg-[#F5F5F7]'>Events</button>
            </div>
        </div>

        <div className='px-5'>

            <div className='overflow-x-scroll whitespace-nowrap'>
                <div className='flex flex-row justify-between font-semibold'>

                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Creators</button>
                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Communities</button>
                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Events</button>
                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Courses</button>

                </div>
            </div>
        </div>

        <ImageDiv/>

  </div>
  )
}

export default Profile