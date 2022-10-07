import * as React from 'react';
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import { Stack, TextField, Button, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Post from "../data/Post"
import { RiPencilFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md"
import EditComment from './EditComment';
import { useState } from "react";
import axios from 'axios'


import styles from "./Card.module.css";

function Cardins(props) {
  const { ID, title, content, likes } = props
  const [upDate, setUpdate] = useState(false);
  const [, setPost] = useState([]);
  const apiURL = "http://localhost:8050/post"
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

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Post.Provider value={props}>
        <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
          <div className={styles.header}>
            <div className="flex justify-end">

              <div className="mr-5 hover:text-gray-50" onClick={clickedUp}>
                <RiPencilFill />
              </div>

              <div className="hover:text-gray-50" onClick={DeletePost}>
                <MdDeleteForever />
              </div>
              {upDate && <EditComment setUpdate={setUpdate} />}
            </div>
            <div className={styles.imageWrapper}>
              <img src="https://bit.ly/3BQdTqk" className={styles.image} alt="" />
            </div>
            <div className={styles.badgeWrapper}>
              <button
                className={classNames([styles.dangerBadge, styles.badgeAnime])}
              >
                <AiFillHeart />
              </button>
              <button
                className={classNames([
                  styles.primaryBadge,
                  styles.badgeAnime,
                  "group",
                ])}
              >
                <BsChatSquareFill />
                <span
                  className={classNames([styles.counter, "group-hover:text-white"])}
                >
                  {likes}
                </span>
              </button>

            </div>
          </div>

          <div className="break-all">
            <div className={styles.textWrapper}>
              <h1 className={styles.text}>{` ${title} `}</h1>

            </div>
            <h1 className='mb-3'>เนื้อความ</h1>
            <h1 className="font-medium leading-none text-base tracking-wider text-gray-400 mb-5">{`${content} `}</h1>
          </div>
          <div className="flex ">
            <Stack className="mb-5 mr-1">
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '19ch' },
                }}
                noValidate
                autoComplete="off"
              ><TextField label="Comment" variant="filled" multiline maxRows={4} value={value}
                onChange={handleChange} />
              </Box>

            </Stack>
            <Button onClick={() => { alert(`Send:${value}`); }} endIcon={<SendIcon />}>Send
            </Button>
          </div>
        </div>
      </Post.Provider>
    </>
  );
};

export default Cardins;