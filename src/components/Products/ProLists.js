import React from 'react';
import Photo from '../../img/IMG_20230206_143545.png';
import SearchPhoto from '../../img/Vector.png';
import Points from '../../img/image624.png';


const ProLists = () => {
  return (
    <div className='ProLists'>
        <img className='PointPro' src={Points} alt="Points" />
        <img className='PointPro' src={Points} alt="Points" />
        <img className='PointPro' src={Points} alt="Points" />

        <h1>OUR PRODUCTS</h1>
        <div className="searchPlace">
            <div className="SearchPut">
            <img src={SearchPhoto} alt="SearchPhoto" />
            <input type="search" placeholder='Search...' />
            </div>
        </div>
        <div className="MainProductsList">

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

            <div className="Box">
                <img src={Photo} alt="Photo" />
                <h2>BITUMEN 40/50</h2>
                <h4>A grade of 40/50 bitumen means the penetration value is intherange40to50at standard test conditions test for overrflow dsdfsf</h4>
                <button>Read More</button>
            </div>

        </div>
        <div className="Pagination">
             <div className="NumPage active"><p>1</p></div>
             <div className="NumPage"><p>2</p></div>
             <div className="NumPage"><p>3</p></div>
        </div>
    </div>
  )
}

export default ProLists