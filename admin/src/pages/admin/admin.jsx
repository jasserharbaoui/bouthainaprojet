import React  from 'react'
import './admin.css';
import Sidebar from '../../component/sidebar/sidebar';
import {Routes,Route} from 'react-router-dom'

import Listproduct from '../../component/listproduct/listproduct.jsx';
import AddProduct from '../../component/addproduct/addproduct.jsx';

const Admin = () =>{
  return(
    <div className='admin'>

      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<Listproduct/>}/>
      </Routes>

    </div>

  )
}

export default Admin;

