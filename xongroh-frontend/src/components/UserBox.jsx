import Assets from '@/assets/Assets'

const UserBox = () => {
  return (
    <div className='bg-white flex flex-row p-3 m-3 border-2 border-black rounded-2xl justify-between'>
        <img src={Assets.user1} alt = 'bell'/>
        <div>
            <h3 className='font-semibold'>John Doe</h3>
            <p>lorem ipsum lorem ipsum</p>
        </div>
        <button className='rounded-3xl w-20 h-8  bg-[#FFD9B7]'>Support</button>
    </div>
  )
}

export default UserBox