import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";

const TabDetails = () => {
  const [description, setDescription] = useState("");
  const [moredescription, setMoreDescription] = useState("");

  let { Id } = useParams();
  const products = [
    {
      description:
        "A grade of 40/50 bitumen means the penetration value is in the range 40 to 50 at standard test conditions which is commonly used as a Paving Grade. Bitumen Penetration Grade 40/50 is a standard  penetration grade Bitumen usually used as a Paving Grade Bitumen  suitable for road construction and for the production of asphalt pavements with superior properties. This grade of Bitumen is mainly used in the manufacture of hot mix asphalt for bases and wearing courses.",
      moredescription:
        "moreproduct1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      photo: 1,
    },
    {
      description:
        "Bitumen Penetration Grade 50/70 is a standard penetration grade Bitumen usually used as a Paving Grade Bitumen suitable for road construction and for the production of asphalt pavements with superior properties. This grade of Bitumen is mainly used in the manufacture of hot mix asphalt for bases and wearing courses.",
      moredescription:
        "moreproduct2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      photo: 2,
    },
    {
      description:
        "Mainly used in road construction as a binder in Hot Mix Asphalt (HMA) and as main component to produce bitumen emulsion used as prime and tack coat. It can also be used as a blending component in the production of polymer modified bitumen/ asphalt (PMB/PMA) and in spraying and chip applications.",
      moredescription:
        "moreproduct3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      photo: 3,
    },
    {
      description:
        "Bitumen Penetration Grade 70/100 is a standard penetration grade Bitumen usually used as a Paving Grade Bitumen suitable for road construction and for the production of asphalt pavements with superior properties. This grade of Bitumen is mainly used in the manufacture of hot mix asphalt for bases and wearing courses",
      moredescription:
        "moreproduct4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      photo: 4,
    },
    {
      description:
        "The most common usage of bitumen 85/100 is in road construction, water proofing, building construction industries and also in cutback bitumen production. This kind of bitumen is suitable to be used in cold regions.",
      moredescription:
        "moreproduct5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      photo: 5,
    },
  ];
  useEffect(() => {
    console.log("Id", Id);
    const selectedProduct = products.filter((item) => item.photo == Id);
    console.log("selected", selectedProduct);
    if (selectedProduct.length > 0) {
      setDescription(selectedProduct[0].description);
      setMoreDescription(selectedProduct[0].moredescription);
    }
  }, []);

  return (
    <div className="TabDetails">
      <div className="TabPlace">
        <Tabs
          activeTab="1"
          className="HeadTab"
          ulClassName=""
          activityClassName="bg-success"
          onClick={(event, tab) => console.log(event, tab)}
        >
          <Tab title="DESCRIPTION" className="mr-3">
            <div className="mt-3">{description}</div>
          </Tab>
          <Tab title="" className="mr-3">
            {/* <div className="mt-3">{moredescription}</div> */}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TabDetails;
