import React from 'react';
import Card from '../Comment/components/Card';
import Popup from '../Comment/components/Popups';
const Comunityonline = () => {
    return (
        <div class="justify-center">
            
        <div className="">    
                <h1 className='text-3xl mt-5'>Comunity Online</h1>
                <Popup />
        </div>
        <Card />
        </div>
        
    );
};

export default Comunityonline;