import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Homepage from './Sidebar/Homepage.jsx';
import Introduceplants from './Sidebar/Introduceplants.jsx';
import Comunityonline from './Sidebar/Comunityonline.jsx';
import Howtouse from './Sidebar/Howtouse.jsx';
import Temperature from './Sidebar/Equipment.jsx';
import Logout from './Sidebar/Logout.jsx';
import Equipment from './Sidebar/Equipment.jsx';
import ProductList from './Sidebar/ProductList.jsx';
import Notes from '../Menu/Notes/Notes';


const Menubar = () => {
  return (
    
    <BrowserRouter>
      <Sidebar> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/introduceplants" element={<Introduceplants />} />
          <Route path="/comunityonline" element={<Comunityonline />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/howtouse" element={<Howtouse />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/notes" element={<Notes />} />
    
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  );
};

export default Menubar;