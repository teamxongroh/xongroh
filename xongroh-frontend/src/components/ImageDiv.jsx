import Assets from '@/assets/Assets'


const ImageDiv = () => {
  const divStyle = {
    backgroundImage: `url(${Assets.dummy1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  return (
    <>
    <div className='flex flex-row justify-between mt-5 h-60 w-full border-2 border-black rounded-t-3xl' style={divStyle}>
      <div className='bg-[#F5F0BB] mt-2 ml-2 py-1.5 font-semibold text-center border-2 border-black rounded-3xl w-[30%] h-[15%]'>
        Riki Phukon
      </div>
      <img className='mr-2 py-1.5 max-h-[20%]' src={Assets.save} alt='save'/> 
    </div>


      <div className='bg-[#F5F0BB] justify-between py-3 px-6 font-semibold flex flex-row w-100 h-14 border-x-2 border-b-2 rounded-b-3xl border-black'>
        <button className='border-2 border-black rounded-3xl w-20 h-8 bg-[#FDCEDF]'>100+</button>
        <p>ssssssssssssssssss</p>
      </div>
    </>
  )
};

export default ImageDiv;
