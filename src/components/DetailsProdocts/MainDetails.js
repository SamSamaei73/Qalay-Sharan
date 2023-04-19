import React, { useEffect, useRef, useContext, useState } from "react";
import ProPhoto from "../../img/Frame39210.jpg";
import Photo1 from "../../img/4050.jpeg";
import Photo2 from "../../img/5070.jpeg";
import Photo3 from "../../img/6070.jpeg";
import Photo4 from "../../img/70100.jpeg";
import Photo5 from "../../img/80100.jpeg";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const MainDetails = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState();
  const [Change, setChange] = useState(false);

  let { Id } = useParams();
  const products = [
    {
      name: "BITUMEN 40/50",
      price: 11.9,
      photo: 1,
    },
    {
      name: "BITUMEN 50/70",
      price: 10.9,
      photo: 2,
    },
    {
      name: "BITUMEN 60/70",
      price: 14.9,
      photo: 3,
    },
    {
      name: "BITUMEN 70/100",
      price: 13.9,
      photo: 4,
    },
    {
      name: "BITUMEN 80/100",
      price: 12.9,
      photo: 5,
    },
  ];
  useEffect(() => {
    console.log("Id", Id);
    const selectedProduct = products.filter((item) => item.photo == Id);
    console.log("selected", selectedProduct);
    if (selectedProduct.length > 0) {
      setName(selectedProduct[0].name);
      setPrice(selectedProduct[0].price);
      setChange(true);
      // switch (Id) {
      //   case 1:
      //     setPhoto(Photo1);
      //     setChange(true);
      //     break;
      //   case 2:
      //     setPhoto(Photo2);
      //     setChange(true);

      //     break;
      //   case 3:
      //     setPhoto(Photo3);
      //     setChange(true);

      //     break;
      //   case 4:
      //     setPhoto(Photo4);
      //     setChange(true);

      //     break;
      //   case 5:
      //     setPhoto(Photo5);
      //     setChange(true);

      //     break;
      //   default:
      //     setPhoto(Photo2);
      //     break;
      // }
    }
  }, []);

  return (
    <div className="MainDetails">
      <div className="InfoDetails">
        <h1 className="name">{name}</h1>
        <div className="Price">
          {/* <h1 className='PriceNum'>${price}</h1> */}
        </div>
      </div>
      <div className="Imgpro">
        {Id == 1 ? <img src={Photo1} alt="photo" /> : null}
        {Id == 2 ? <img src={Photo2} alt="photo" /> : null}
        {Id == 3 ? <img src={Photo3} alt="photo" /> : null}
        {Id == 4 ? <img src={Photo4} alt="photo" /> : null}
        {Id == 5 ? <img src={Photo5} alt="photo" /> : null}
      </div>
    </div>
  );
};

export default MainDetails;
