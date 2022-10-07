import Img1 from '../image/ImgVoid.jpg'
import { useState } from "react";
import axios from 'axios'
import ShopContext from '../data/ShopContext';
import styles from "./Shop.module.css";
import * as React from 'react';
import classNames from "classnames";
import { Stack, TextField, Button, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


function ProductCardData({ props }) {
    const { ID, iotname, price, detail } = props
    const [upDate, setUpdate] = useState(false);
    const [, setPost] = useState([]);
    const apiURL = "http://localhost:8050/note"
    const clickedUp = () => {
        setUpdate(true)
    }

    function DeletePost() {
        axios.delete(`${apiURL}` + ID, {
        })
            .then(() => {
                setPost('');
                alert("Delete Successfully")
            })
        window.location.reload();
    }

    return (
        <>
            <ShopContext.Provider value={props}>
                <div class="ml-5 mt-5 flex justify-center">
                    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
                        <div className={styles.header}>
                            <div className={styles.imageWrapper}>
                                <img src="https://bit.ly/3BQdTqk" className={styles.image} alt="" />
                            </div>
                        </div>

                        <div className="break-all">
                            <div className={styles.textWrapper}>
                                <h1 className={styles.text}>{` ${iotname} `}</h1>

                            </div>
                            <h1 className='font-medium leading-none text-base tracking-wider text-gray-400 mb-3"'>{`${price} `}</h1>
                            <h1 className="font-medium leading-none text-base tracking-wider text-gray-400 mb-3">{`${detail} `}</h1>
                        </div>
                    </div>
                    
                </div>
            </ShopContext.Provider >
        </>
    );
}
export default ProductCardData