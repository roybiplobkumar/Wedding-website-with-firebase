

const Slider = () => {


    return (
        <div className="carousel w-full  md:h-[88.1vh] my-12">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/7694284/pexels-photo-7694284.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src='https://images.pexels.com/photos/690782/pexels-photo-690782.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src='https://images.pexels.com/photos/758898/pexels-photo-758898.png' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src='https://images.pexels.com/photos/8926472/pexels-photo-8926472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    )
};

export default Slider;