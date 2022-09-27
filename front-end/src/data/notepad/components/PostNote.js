import { RiPencilFill } from "react-icons/ri";
import {MdDeleteForever} from "react-icons/md"
import { useState } from "react";
import EditNotes from "./EditNotes";
import axios from 'axios'
import DataContext from "../Data/DataContext";

function PostNote(props) {
    const { ID, title, content } = props
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
            <DataContext.Provider value={props}>
                <div className='mt-4 ml-5 mr-5 p-8 bg-blue-500 shadow-lg font-sm rounded-lg hover:bg-blue-600 '>
                    <h3 class="mb-3 text-xl font-semibold tracking-tight text-white ">หัวข้อ:{title}</h3>
                    <div className="break-all">

                        <p class="leading-normal text-gray-100">เนื้อหา:{content}</p>

                    </div>
                    <div className="flex justify-end mt-10">
                        
                        <div className="mr-10 hover:text-gray-50" onClick={clickedUp}>
                            <RiPencilFill />
                        </div>

                        <div className="hover:text-gray-50" onClick={DeletePost}>
                            <MdDeleteForever />
                        </div>
                        {upDate && <EditNotes setUpdate={setUpdate} />}
                    </div>

                </div>
            </DataContext.Provider>
        </>
    )
}


export default PostNote