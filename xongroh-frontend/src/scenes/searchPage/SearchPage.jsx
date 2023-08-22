import Assets from '@/assets/Assets'
import UserBox from '@/components/UserBox'

const SearchPage = () => {
  return (
    <div className='bg-[#F8E8EE]'>
        <div className='header px-5 pb-5 bg-[#C8E4B2] rounded-b-3xl flex flex-col'>
        <div>
            <div className='relative'>
                <img src={Assets.search} className='absolute left-7 top-1/2 transform -translate-y-1/2' />
                <input type="search" id="site-search" name="search" className='pl-10 m-5 h-10 w-5/6 bg-white border-2 border-black rounded-2xl' placeholder='Search...' />
            </div>
        </div>

            
            <div className='grid grid-cols-2 gap-10 px-2 font-semibold'>
            <button className='border-2 border-black rounded-3xl w-40 h-10 bg-[#FDCEDF]'>Find communities</button>
            <button className='border-2 border-black rounded-3xl w-40 h-10 bg-[#FDCEDF]'>Find creators</button>
            <button className='border-2 border-black rounded-3xl w-40 h-10 bg-[#F5F5F7]'>Find events</button>
            <button className='border-2 border-black rounded-3xl w-40 h-10 bg-[#F5F5F7]'>Find courses</button>
            </div>

        </div>

        <div className='px-5'>
            <h1 className='text-2xl font-bold pt-6 pb-5'>Popular</h1>

            <div className='overflow-x-scroll whitespace-nowrap'>
                <div className='flex flex-row justify-between font-semibold'>

                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Creators</button>
                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Communities</button>
                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Events</button>
                    <button className='border-2 border-black rounded-3xl w-52 h-8 mx-1 bg-[#F5F5F7]'>Courses</button>

                </div>
            </div>
        </div>

      <UserBox/>
      <UserBox/>
      <UserBox/>
      <UserBox/>
    </div>
  )
}

export default SearchPage