import Assets from '@/assets/Assets'
import CommunityBox from '@/components/CommunityBox'


const Communities = () => {
  return (
    <div className='bg-[#C1EFFF]'>
    <div className='header pt-5 pb-10 bg-white rounded-b-3xl flex flex-col items-center'>
        <h1 className="text-center text-2xl font-bold">My communities</h1>
    </div>

    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>
    <CommunityBox/>

</div>
  )
}

export default Communities