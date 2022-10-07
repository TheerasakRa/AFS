import axios from "axios"
import { useState, useEffect } from "react"
import ProductCardData from "./ProductCardData";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import styles from "./App.module.css";

const apiURL = "http://localhost:8050/shop"

function Mainshop() {

    const [post, setPost] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
    }, []);

    if (!post) return "no post";


    return (
        <main className={styles.section}>
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

                <section className={styles.containers}>
                    <div className={styles.layout}>
                        {
                        post.map(e => {
                            return <ProductCardData iotname={e.iotname} price={e.price} detail={e.detail} e={e}/>

                        })}
                    </div>
                </section>
        </main>
          
    );
}
export default Mainshop
