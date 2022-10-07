import React from 'react';
import Img1 from '../image/ImgVoid.jpg'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ProductCardData from './ProductCardData'; 


const ProductList = () => {
    return (
        <main>
            <div class="">
                <h1 className='text-4xl pt-5 '>Product List Page</h1>
            </div>


            <div class="flex justify-center mt-4">
                <input type="text" class=" form-control block w-25 h-8 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="SearchInput1" placeholder="Search" />
                <Link to="/Trell">
                <div className='ml-2 mt-2'><BsFillCartFill />
                </div>
                </Link>
                <Link to="/addr">
                    <button type="button" class="ml-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        ที่อยู่
                        </button>
                </Link>

                

            </div>
            <div class="flex justify-center">
                    <ProductCardData Product={"IOT 1"} Price={"500 Bath"} Detail={"xxx"}/>

                    <ProductCardData Product={"IOT 2"} Price={"300 Bath"} Detail={"xxx"}/>
                </div>
                <div class="flex justify-center">
                    <ProductCardData Product={"IOT 3"} Price={"1000 Bath"} Detail={"xxx"}/>

                    <ProductCardData Product={"IOT 4"} Price={"700 Bath"} Detail={"xxx"}/>
                </div>            
            





        </main>


    );
};

export default ProductList;