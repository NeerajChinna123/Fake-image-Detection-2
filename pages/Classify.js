import Head from 'next/head'
import Image from 'next/image'
import IMAGES from '../Images/Images'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Classify = () => {

  
 const images = [{ src: "../Images", alt: "Your description here 1" }];

  return (
    <div className="flex bg-gray-100 lg:min-h-screen lg:w-full lg:items-center lg:justify-center">
      <div className="mx-auto flex flex-col max-w-7xl">
        <Carousel renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {marginLeft: 10,marginTop:10,width:20, flexWrap:'wrap', color: "white", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, color: "red" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {index+1}
          </span>
        );
      }} showThumbs={false}>  
          {IMAGES.map((image)=>(
            <div>   
                <img className="h-[34rem] object-contain border-r-2" id={image.id} src={image.path}></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Classify
