import React from 'react';
import Weather from "../data/weather/Weather.js";

const Homepage = () => {
    return (
            <div className=" ">    
                    <h1 className='text-4xl mt-5'>DASHBOARD</h1>
                    <div className='weather pt-4'>
                    <Weather />
                    </div>
        </div>
    );
};


export default Homepage;