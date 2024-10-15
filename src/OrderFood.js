import React, { useState } from 'react'
import "./OrderFood.css"
import { Cartcontext } from './Cartcontext'
import { Header } from './Header'
import { HomePage } from './HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartPage } from './CartPage'
// import { SearchPage } from './SearchPage'
import { MenuPage } from './MenuPage'
import { SignupPage } from './SignupPage'
import { Footer } from './Footer'

export const OrderFood = () => {
    const[cart,setcart]=useState([]);
    const [showLogin,SetshowLogin]=useState(false);
    return (
    <>
      {showLogin?<SignupPage SetshowLogin={SetshowLogin}/>:<></>}
      <Cartcontext.Provider value={{cart,setcart}}>
        <BrowserRouter>
          <>
          <Header cart={cart} SetshowLogin={SetshowLogin}/>
          <div className="body">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              {/* <Route path="/search" element={<SearchPage/>} /> */}
              <Route path="/menu" element={<MenuPage/>} />
              {/* <Route path="/signup" element={<SignupPage/>} /> */}
              <Route path="/Cart" element={<CartPage/>} />
            </Routes>
            </div>
          <Footer/>
          </>
        </BrowserRouter>
      </Cartcontext.Provider>
    </>
    )
}
