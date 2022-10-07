import Img1 from '../image/Void.jpg'

function Trelley() {
    
    return (
        <main>
            <div class="mt-5 flex justify-center">
                <a href="#" class=" block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">สรุปการสั่งซื้อ</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">รวมทั้งหมด(บาท) 0.00</p>
                    <p class="font-normal text-gray-700 dark:text-gray-400">ราคาสุทธิที่ต้องชำระ(บาท) 0.00</p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ชำระสินค้า</button>



                </a>
            </div>
            <div class="mt-5 flex justify-center ml-5">

                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img class="rounded-t-lg" src={Img1} alt="" />
                    </a>

                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                        </div>
                        <h5 class="text-gray-900 text-xl font-medium mb-2">สินค้า IOT1</h5>
                        <h5 class="text-gray-900 text-xl font-medium mb-2">ราคา 300 บาท</h5>
                        <p class="text-gray-700 text-base mb-4">
                            รายละเอียดสินค้า 1
                        </p>
                        



                    </div>
                </div>
            </div>
            <div class="mt-5 flex justify-center ml-5">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img class="rounded-t-lg" src={Img1} alt="" />
                    </a>

                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                        </div>
                        <h5 class="text-gray-900 text-xl font-medium mb-2">สินค้า IOT2</h5>
                        <h5 class="text-gray-900 text-xl font-medium mb-2">ราคา 1490 บาท</h5>
                        <p class="text-gray-700 text-base mb-4">
                            รายละเอียดสินค้า 2
                        </p>
                        



                    </div>
                </div>
            </div>

            <div class="mt-5 flex justify-center ml-5">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img class="rounded-t-lg" src={Img1} alt="" />
                    </a>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                        </div>
                        <h5 class="text-gray-900 text-xl font-medium mb-2">สินค้า IOT3</h5>
                        <h5 class="text-gray-900 text-xl font-medium mb-2">ราคา 499 บาท</h5>
                        <p class="text-gray-700 text-base mb-4">
                            รายละเอียดสินค้า 3
                        </p>
                        


                    </div>
                </div>
            </div>

            <div>

            </div>




        </main>
    );

}


export default Trelley;
