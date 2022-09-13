import React, { useState } from 'react';
import Logo from '../Image/Logo.png'
import {
    FaBars,
    FaShoppingBag,
    FaHome,
    
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import {
    RiLogoutCircleLine,
    RiPlantFill
}from "react-icons/ri";

import {
    HiChatAlt2,
    HiOutlineInformationCircle
}from "react-icons/hi";

import {
    MdViewCompact
}from "react-icons/md";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[ 
        {
            path:"/homepage",
            name:"Homepage",
            icon:<FaHome class="icons mt-1"/>
        },
        {
            path:"/introduceplants",
            name:"Introduce plants",
            icon:<RiPlantFill class="icons mt-1"/>
        },
        {
            path:"/comunityOnline",
            name:"Comunity Online",
            icon:<HiChatAlt2 class="icons mt-1"/>
        },
        {
            path:"/howtouse",
            name:"How to use",
            icon:<HiOutlineInformationCircle class="icons mt-1"/>
        },
        {
            path:"/equipment",
            name:"Equipment",
            icon:<MdViewCompact class="icons mt-1"/>
        },
        {
            path:"/productlist",
            name:"Product list",
            icon:<FaShoppingBag class="icons mt-1"/>
        },
        {
            path:"/logout",
            name:"Login",
            icon:<RiLogoutCircleLine class="icons mt-1"/>
        }

    ]
    return (
        <div className="container ">
           <div style={{width: isOpen ? "260px" : "60px"}} className="sidebar ">
               <div className="top_section ">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo mr-5">
                   <img src={Logo} class="mr-3 sm:h-14" alt="..." />
                   </h1>
                   <div style={{marginLeft: isOpen ? "1px" : "-40px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link " activeclassName="active">
                           <div className="icon ">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text ">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;