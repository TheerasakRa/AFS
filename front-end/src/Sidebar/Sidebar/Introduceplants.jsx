import React from 'react';
import Cardinfo from '../Cardinfo/Cardinfo';
import Search from '../../Dataplants/Search';

const Introduceplants = () => {
    return (
        <div class="justify-center ">
            
        <div className="">    
                <h1 className='text-3xl pt-5 pl-24'>Introduce Plant</h1>
               
        </div>
        <Search />
        <div className=''>
            <Cardinfo />
        </div> 
        </div>
  
    );
};

export default Introduceplants;