import Assets from '@/assets/Assets'
import ImageDiv from '@/components/ImageDiv'
import Navbar from '@/components/Navbar'

const HomePage = () => {
  return (
    <div className='bg-[#F8E8EE]'>
      <div className='header px-5 pb-5 bg-[#F5F0BB] rounded-b-3xl'>
       
        <div className='header-text flex flex-row justify-between py-5 items-center'>
          <h1 className='text-3xl font-bold'>Xongroh</h1>
          <div className='flex flex-row space-x-4'>
            <img src={Assets.bell} alt = 'bell'/> 
            <img src={Assets.chat} alt = 'chat'/>
          </div>
        </div>

        <p className='text-base font-semibold p-5 '>Hi XYZ, Have a nice day rgebb trbtr la !</p>

        <div className='grid grid-cols-2 gap-6 px-10 font-semibold'>
          <button className='border-2 border-black rounded-3xl w-32 h-10 bg-[#FDCEDF]'>DRAFTS</button>
          <button className='border-2 border-black rounded-3xl w-32 h-10 bg-[#FDCEDF]'>DICUSSIONS</button>
          <button className='border-2 border-black rounded-3xl w-32 h-10 bg-[#F5F5F7]'>STORE</button>
          <button className='border-2 border-black rounded-3xl w-32 h-10 bg-[#F5F5F7]'>MASTERCLASS</button>
          <button className='border-2 border-black rounded-3xl w-32 h-10 bg-[#F5F5F7]'>EVENTS</button>
          <button className='border-2 border-black rounded-3xl w-32 h-10 bg-[#F5F5F7]'>ANALYTICS</button>
        </div>

      </div>
      <div className='px-5'>
        <h1 className='text-2xl font-bold pt-6 pb-5'>Creations</h1>

        <div className='flex flex-row justify-between px-3 font-semibold'>
          <button className='border-2 border-black rounded-3xl w-20 h-8 bg-[#F5F5F7]'>New</button>
          <button className='border-2 border-black rounded-3xl w-20 h-8 bg-[#F5F5F7]'>Popular</button>
          <button className='border-2 border-black rounded-3xl w-20 h-8 bg-[#F5F5F7]'>Mine</button>
          <button className='border-2 border-black rounded-3xl w-20 h-8 bg-[#F5F5F7]'>Saved</button>
        </div>

        <ImageDiv/>
        
      </div>
    </div>
  )
}

export default HomePage