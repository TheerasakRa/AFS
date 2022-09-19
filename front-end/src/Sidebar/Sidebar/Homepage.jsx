import React from 'react';
import Weather from "../../Weather/Weather.js";

const Homepage = () => {
    return (
            <div className="pl-96 ">    
                    <h1 className='text-4xl mt-5'>Homepage</h1>
                    <div className='weather pt-4'>
                    <Weather />
                    </div>
        </div>
    );
};


export default Homepage;