import React from 'react';
import './Routes.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Path.js';
import Homepage from '../pages/Homepage';
import Introduceplants from '../pages/Introduceplants';
import Comunityonline from '../pages/Comunityonline.js';
import Howtouse from '../pages/Howtouse.js';
import Temperature from '../pages/Equipment.js';
import Logout from '../pages/Logout.js';
import Equipment from '../pages/Equipment.js';
import ProductList from '../pages/ProductList.js';
import Notes from '../data/notepad/Notes';
import Searchplants from '../data/searchplants/Searchplants';
import Destination from '../Shop/components/Destination';
import Trelley from '../Shop/components/Trelley';
import Detail from '../pages/data/Detail';
import Login from '../pages/Login';



const Router = () => {
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
          <Route path="/search" element={<Searchplants />} />
          <Route path='/addr' element={<Destination/>}/>
          <Route path='/Trell' element={<Trelley/>}/>
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  );
};

export default Router;