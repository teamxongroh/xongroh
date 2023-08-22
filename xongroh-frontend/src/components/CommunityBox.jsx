import Assets from '@/assets/Assets'

const CommunityBox = () => {
  return (
    <div className='bg-white flex flex-row p-3 m-3 border-2 border-black rounded-2xl justify-between'>
        <img src={Assets.music} alt = 'bell'/>
        <div>
            <h3 className='font-semibold'>Music Community</h3>
        </div>
        <div className='rounded-3xl w-8 h-8  bg-[#AEF95E]'>New</div>
    </div>
  )
}

export default CommunityBox