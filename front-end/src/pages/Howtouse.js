import React from 'react';
import './Howtouse.css'

const Howtouse = () => {
    return (
        <div className=" ">

            <div class="text-4xl mt-5">
                How To Use
            </div>
            <div class="grid card mt-5 ml-96">
                <div class="circle ml-10">
                    <div class="content">
                        <h2>AI FARM STAY</h2>
                        <p>TECHNOLOGY AND INNOVATION FARM FOR YOU</p>

                    </div>
                    <img src="https://www.pngall.com/wp-content/uploads/8/Farm-House-PNG-Image.png" alt="farmused" />

                </div>
            </div>
            <div className='bg-green-500 hover:bg-green-700 mt-10 ml-72 mr-72'>
                <p>1.Click Signup by using 1.Gmail 2.FullName 3.Password</p>
                <p>2.Click Login by using Gmail and Password</p>
                <p>3.There are many functions to choose from. Ex. See the weather. See the plant guide. and More</p>
                
                

            </div>
        </div>
    );
};

export default Howtouse;