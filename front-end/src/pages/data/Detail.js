import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom';
import {CardMedia} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Detail() {
    const apiURL = "http://localhost:8050"
    const [post, setPost] = useState([]);

    // useEffect(() => {
    //     axios.delete(`${apiURL}` + ID, {
    //     }).then((response) => {
    //     setPost(response.data);
    //     console.log(response.data)
    //   });
    // }, []);
  
    if (!post) return "no post";

  return (
    <div className='detail text-3xl mt-5 ' >Detail
    <div>
    <Link to="/introduceplants" className="back bg-gray-200 ">
          <button class="mt-2">
            <p><ArrowBackIcon />Back</p>
          </button>
        </Link>
    </div>

      <div className="grid grid-cols-3 mt-2 overflow-y-auto max-h-[35rem]">
        {post.map((e) => {
          return <div class='mt-4 ml-5 mr-5 p-20 bg shadow-lg font-sm text-xl mt-2'>
            <CardMedia
                                        component="img"
                                        height="140"
                                        image={e.image}
                                        alt=""
                                    />
            <p class="mt-3">ชื่อพืช: {e.nameplant}</p>
            <p>ประเภทพืช :{e.type}</p>
            <p>ภูมิภาค: {e.region}</p>
            <p>รายละเอียด: {e.content}</p>
          </div>
        })}
      </div>
    </div>
    
  )
}

export default Detail