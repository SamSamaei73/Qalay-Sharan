import React from 'react';
import "use-slider/lib/slider.min.css";
import useSlider from "use-slider";
import Points from "../../img/image624.png";


const FirstProducts = () => {

    const { ref } = useSlider({
        loop: true,
        autoPlay: true,
        slidesPerView: 4,
        navigation: true,
         responsive: [
          [1300, { slidesPerView: 2 }],
          [750, { slidesPerView: 1 }],
        ],
      })


  return (
    <div className='FirstProducts'>
        <img className='Points' src={Points} alt="Points" />
        <h1>OUR PRODUCTS</h1>
        <h3>Ready For Your Order</h3>
        <div className="slider">
                <div className='MainSlide' ref={ref}>
                    
                    <div className='item'>
                    <div className="mainItem">
                        <div className="placeImg">

                        </div>
                        <h2>BITUMEN 40/50</h2>
                        <h4>A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions</h4>
                        <button>Read more</button>
                    </div>
                    </div>
            

                    <div className='item'>
                    <div className="mainItem">
                        <div className="placeImg">

                        </div>
                        <h2>BITUMEN 40/50</h2>
                        <h4>A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions</h4>
                        <button>Read more</button>
                    </div>
                    </div>
            

                    <div className='item'>
                    <div className="mainItem">
                        <div className="placeImg">

                        </div>
                        <h2>BITUMEN 40/50</h2>
                        <h4>A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions</h4>
                        <button>Read more</button>
                    </div>
                    </div>
            

                    <div className='item'>
                    <div className="mainItem">
                        <div className="placeImg">

                        </div>
                        <h2>BITUMEN 40/50</h2>
                        <h4>A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions</h4>
                        <button>Read more</button>
                    </div>
                    </div>
            

                    <div className='item'>
                    <div className="mainItem">
                        <div className="placeImg">

                        </div>
                        <h2>BITUMEN 40/50</h2>
                        <h4>A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions</h4>
                        <button>Read more</button>
                    </div>
                    </div>
            

                    <div className='item'>
                    <div className="mainItem">
                        <div className="placeImg">

                        </div>
                        <h2>BITUMEN 40/50</h2>
                        <h4>A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions</h4>
                        <button>Read more</button>
                    </div>
                    </div>
            

                    <div className='item'>
                    <div className="mainItem">
                        <div className="placeImg">

                        </div>
                        <h2>BITUMEN 40/50</h2>
                        <h4>A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions</h4>
                        <button>Read more</button>
                    </div>
                    </div>
            
            
            </div>
        </div>
    </div>
  )
}

export default FirstProducts