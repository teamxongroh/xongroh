import Assets from '@/assets/Assets'


const ImageDiv = () => {
  const divStyle = {
    backgroundImage: `url(${Assets.dummy1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  return <div className='mt-5 h-60 w-100 border-2 border-black rounded-3xl' style={divStyle}></div>;
};

export default ImageDiv;
