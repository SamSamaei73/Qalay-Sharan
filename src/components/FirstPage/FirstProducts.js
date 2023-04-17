import React from "react";
import "use-slider/lib/slider.min.css";
import useSlider from "use-slider";
import Points from "../../img/image624.png";
import PhotoPro from "../../img/Frame39210.jpg";
import Photo1 from "../../img/4050.jpeg";
import Photo2 from "../../img/5070.jpeg";
import Photo3 from "../../img/6070.jpeg";
import Photo4 from "../../img/70100.jpeg";
import Photo5 from "../../img/80100.jpeg";

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
  });

  return (
    <div className="FirstProducts">
      <img className="Points" src={Points} alt="Points" />
      <h1>OUR PRODUCTS</h1>
      <h3>Ready For Your Order</h3>
      <div className="slider">
        <div className="MainSlide" ref={ref}>
          <div className="item">
            <div className="mainItem">
              <div className="placeImg">
                <img src={Photo1} alt="PhotoPro" />
              </div>
              <h2>BITUMEN 40/50</h2>
              <h4>
                A grade of 40/50 bitumen means the penetration value is in the
                range 40 to 50 at standard test conditions which is commonly
                used as a Paving Grade. Bitumen Penetration Grade 40/50 is a
                standard penetration grade Bitumen usually used as a Paving
                Grade Bitumen suitable for road construction and for the
                production of asphalt pavements with superior properties. This
                grade of Bitumen is mainly used in the manufacture of hot mix
                asphalt for bases and wearing courses.
              </h4>
              <button>Read more</button>
            </div>
          </div>

          <div className="item">
            <div className="mainItem">
              <div className="placeImg">
                <img src={Photo2} alt="PhotoPro" />
              </div>
              <h2>BITUMEN 50/70</h2>
              <h4>
                Bitumen Penetration Grade 50/70 is a standard penetration grade
                Bitumen usually used as a Paving Grade Bitumen suitable for road
                construction and for the production of asphalt pavements with
                superior properties. This grade of Bitumen is mainly used in the
                manufacture of hot mix asphalt for bases and wearing courses.
              </h4>
              <button>Read more</button>
            </div>
          </div>

          <div className="item">
            <div className="mainItem">
              <div className="placeImg">
                <img src={Photo3} alt="PhotoPro" />
              </div>
              <h2>BITUMEN 60/70</h2>
              <h4>
                Mainly used in road construction as a binder in Hot Mix Asphalt
                (HMA) and as main component to produce bitumen emulsion used as
                prime and tack coat. It can also be used as a blending component
                in the production of polymer modified bitumen/ asphalt (PMB/PMA)
                and in spraying and chip applications.
              </h4>
              <button>Read more</button>
            </div>
          </div>

          <div className="item">
            <div className="mainItem">
              <div className="placeImg">
                <img src={Photo4} alt="PhotoPro" />
              </div>
              <h2>BITUMEN 70/100</h2>
              <h4>
                Bitumen Penetration Grade 70/100 is a standard penetration grade
                Bitumen usually used as a Paving Grade Bitumen suitable for road
                construction and for the production of asphalt pavements with
                superior properties. This grade of Bitumen is mainly used in the
                manufacture of hot mix asphalt for bases and wearing courses
              </h4>
              <button>Read more</button>
            </div>
          </div>

          <div className="item">
            <div className="mainItem">
              <div className="placeImg">
                <img src={Photo5} alt="PhotoPro" />
              </div>
              <h2>BITUMEN 80/100</h2>
              <h4>
                The most common usage of bitumen 85/100 is in road construction,
                water proofing, building construction industries and also in
                cutback bitumen production. This kind of bitumen is suitable to
                be used in cold regions.
              </h4>
              <button>Read more</button>
            </div>
          </div>

     
    
        </div>
      </div>
    </div>
  );
};

export default FirstProducts;
