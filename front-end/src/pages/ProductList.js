import React from 'react';
import Img1 from '../image/ImgVoid.jpg'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


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
                <div class="mt-5 flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <img class="rounded-t-lg" src={Img1} alt="" />
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">สินค้า IOT1</h5>
                            <h5 class="text-gray-900 text-xl font-medium mb-2">ราคา xxx</h5>
                            <p class="text-gray-700 text-base mb-4">
                                รายละเอียดสินค้า 1
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">เพิ่มลงรถเข็น</button>
                            <button type="button" class="ml-5 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ซื้อสินค้า</button>
                        </div>
                    </div>
                </div>

                <div class="mt-5 flex justify-center ml-5">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src={Img1} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">สินค้า IOT2</h5>
                            <h5 class="text-gray-900 text-xl font-medium mb-2">ราคา xxx</h5>
                            <p class="text-gray-700 text-base mb-4">
                                รายละเอียดสินค้า 2
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">เพิ่มลงรถเข็น</button>
                            <button type="button" class="ml-5 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ซื้อสินค้า</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mt-5 flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src={Img1} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">สินค้า IOT3</h5>
                            <h5 class="text-gray-900 text-xl font-medium mb-2">ราคา xxx</h5>
                            <p class="text-gray-700 text-base mb-4">
                                รายละเอียดสินค้า 3
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">เพิ่มลงรถเข็น</button>
                            <button type="button" class="ml-5 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ซื้อสินค้า</button>
                        </div>
                    </div>
                </div>

                <div class="mt-5 flex justify-center ml-5">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src={Img1} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">สินค้า IOT4</h5>
                            <h5 class="text-gray-900 text-xl font-medium mb-2">ราคา xxx</h5>
                            <p class="text-gray-700 text-base mb-4">
                                รายละเอียดสินค้า 4
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">เพิ่มลงรถเข็น</button>
                            <button type="button" class="ml-5 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ซื้อสินค้า</button>
                        </div>
                    </div>
                </div>
            </div>





        </main>


    );
};

export default ProductList;