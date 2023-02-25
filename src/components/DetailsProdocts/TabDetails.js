import React, { Component } from 'react'
import Tabs, {Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';


const TabDetails = () => {
  return (
    <div className='TabDetails'>
        <div className="TabPlace">
        <Tabs
          activeTab="1"
          className="HeadTab"
          ulClassName=""
          activityClassName="bg-success"
          onClick={(event, tab) => console.log(event, tab)}
        >
            <Tab title="DESCRIPTION" className="mr-3">
                <div className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </Tab>
            <Tab title="PRODUCT DETAILS" className="mr-3">
                <div className="mt-3">
                    Tab 2 content
                </div>
            </Tab>
        </Tabs>

        </div>
    </div>
  )
}

export default TabDetails