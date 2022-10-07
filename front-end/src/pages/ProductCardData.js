import Img1 from '../image/ImgVoid.jpg'

function ProductCardData({Product,Price,Detail}){
    return(
        <div>
            <div class="ml-5 mt-5 flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img class="rounded-t-lg" src={Img1} alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">{Product}</h5>
                                <h5 class="text-gray-900 text-xl font-medium mb-2">{Price}</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    {Detail}
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">เพิ่มลงรถเข็น</button>
                                <button type="button" class="ml-5 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ซื้อสินค้า</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default ProductCardData