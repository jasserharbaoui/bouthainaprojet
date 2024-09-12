
import './App.css';
import Navbar from './component/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCatrgory from './pages/shopCategory';
import Product from './pages/product';
import LoginSingUp from './pages/loginSingUp';
import Cart from './pages/cart';
import Footer from './component/footer/footer';
import men_banner from './component/assests/ph47.jpg'
import women_banner from './component/assests/pp1.jpg'
import kid_banner from './component/assests/pp4.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/arts1' element={<ShopCatrgory banner={men_banner} category='women'/>}/>
          <Route path='/acc' element={<ShopCatrgory banner={women_banner} category='men'/>}/>
          <Route path='/arts3' element={<ShopCatrgory banner={kid_banner} category='kid'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSingUp/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
