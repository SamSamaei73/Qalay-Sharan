import React from "react";
import Photo from "../../img/IMG_20230206_143545.png";
import SearchPhoto from "../../img/Vector.png";
import Points from "../../img/image624.png";
import { NavLink } from "react-router-dom";
import Photo1 from "../../img/4050.jpeg";
import Photo2 from "../../img/5070.jpeg";
import Photo3 from "../../img/6070.jpeg";
import Photo4 from "../../img/70100.jpeg";
import Photo5 from "../../img/80100.jpeg";

const ProLists = () => {
  return (
    <div id="container" className="ProLists">
      <img className="PointPro" src={Points} alt="Points" />
      <img className="PointPro" src={Points} alt="Points" />
      <img className="PointPro" src={Points} alt="Points" />

      <h1>OUR PRODUCTS</h1>
      <div className="searchPlace">
        <div className="SearchPut">
          <img src={SearchPhoto} alt="SearchPhoto" />
          <input type="search" placeholder="Search..." />
        </div>
      </div>
      <div className="MainProductsList">
        <div className="Box">
          <img src={Photo1} alt="P4050" />
          <h2>BITUMEN 40/50</h2>
          <h4>
            A grade of 40/50 bitumen means the penetration value is in the range
            40 to 50 at standard test conditions which is commonly used as a
            Paving Grade. Bitumen Penetration Grade 40/50 is a standard
            penetration grade Bitumen usually used as a Paving Grade Bitumen
            suitable for road construction and for the production of asphalt
            pavements with superior properties. This grade of Bitumen is mainly
            used in the manufacture of hot mix asphalt for bases and wearing
            courses.
          </h4>
          <NavLink to="/ProductsPage" className="InfoProData" >
            Read More
          </NavLink>
        </div>

        <div className="Box">
          <img src={Photo2} alt="Photo" />
          <h2>BITUMEN 50/70</h2>
          <h4>
            Bitumen Penetration Grade 50/70 is a standard penetration grade
            Bitumen usually used as a Paving Grade Bitumen suitable for road
            construction and for the production of asphalt pavements with
            superior properties. This grade of Bitumen is mainly used in the
            manufacture of hot mix asphalt for bases and wearing courses.
          </h4>
          <button>Read More</button>
        </div>

        <div className="Box">
          <img src={Photo3} alt="Photo" />
          <h2>BITUMEN 60/70</h2>
          <h4>
            Mainly used in road construction as a binder in Hot Mix Asphalt
            (HMA) and as main component to produce bitumen emulsion used as
            prime and tack coat. It can also be used as a blending component in
            the production of polymer modified bitumen/ asphalt (PMB/PMA) and in
            spraying and chip applications.
          </h4>
          <button>Read More</button>
        </div>

        <div className="Box">
          <img src={Photo4} alt="Photo" />
          <h2>BITUMEN 70/100</h2>
          <h4>
            Bitumen Penetration Grade 70/100 is a standard penetration grade
            Bitumen usually used as a Paving Grade Bitumen suitable for road
            construction and for the production of asphalt pavements with
            superior properties. This grade of Bitumen is mainly used in the
            manufacture of hot mix asphalt for bases and wearing courses
          </h4>
          <button>Read More</button>
        </div>

        <div className="Box">
          <img src={Photo5} alt="Photo" />
          <h2>BITUMEN 80/100</h2>
          <h4>
            The most common usage of bitumen 85/100 is in road construction,
            water proofing, building construction industries and also in cutback
            bitumen production. This kind of bitumen is suitable to be used in
            cold regions.
          </h4>
          <button>Read More</button>
        </div>

      
      </div>
      <div className="Pagination">
        <div className="NumPage active">
          <p>1</p>
        </div>
        {/* <div className="NumPage">
          <p>2</p>
        </div>
        <div className="NumPage">
          <p>3</p>
        </div> */}
      </div>
    </div>
  );
};

export default ProLists;
