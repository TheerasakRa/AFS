import React from 'react';
import Productcard from '../../Productcard/Productcard';

const ProductList = () => {
    return (

        <div class="flex">  
        <div className="pl-80">    
                <h1 className='text-4xl pt-5 pl-52'>Product List Page</h1>
        </div>
                
                <Productcard />
        </div>

    );
};

export default ProductList;