import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { food_list } from './frontend_assets/assets';
import './Header.css';

export const Header = ({ cart, SetshowLogin }) => {
    const [underline, setunderline] = useState("");
    const [search, setsearch] = useState("");
    const [isSearchListVisible, setIsSearchListVisible] = useState(false); // State to manage search list visibility
    const searchRef = useRef(null); // Ref for the search container

    const handleClickOutside = (event) => {
        // Check if the click is outside the search input and the search list
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsSearchListVisible(false);
        }
    };

    useEffect(() => {
        // Add click event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchChange = (e) => {
        setsearch(e.target.value);
        setIsSearchListVisible(e.target.value !== ""); // Show search list if input is not empty
    };

    return (
        <div className='navbar1'>
            <div className="logo">
                <img id="logo" src="/images/mom's kitchen1.png" alt="" />
            </div>
            {underline !=="cart" && underline !=="signup" && (<div ref={searchRef}>
                <input className='header-search' type="text" placeholder='Search' 
                    onChange={handleSearchChange} 
                    onFocus={() => setIsSearchListVisible(true)} // Show the search list on focus
                />
                {isSearchListVisible && search !== "" && ( // Use state to manage visibility
                    <div className="header-search-list">
                        {food_list.filter((item) => {
                            return item.name.toLowerCase().includes(search.toLowerCase());
                        }).map((item, index) => (
                            <div className='search-contain' key={index}>
                                <img className='search-img' src={item.image} alt="no img" />
                                <h3 >{item.name}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>)}
            <div className='navbar1-option mt-3 me-4'>
                <ul>
                    <li onClick={() => setunderline("home")} className={underline === "home" ? "active" : " "}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li onClick={() => setunderline("menu")} className={underline === "menu" ? "active" : ""}>
                        <Link to={"/menu"}>Menu</Link>
                        {/* <a href='#menupage-content'>Menu</a> */}
                    </li>
                    <li onClick={() => setunderline("cart")} className={underline === "cart" ? "active" : ""}>
    <Link to={"/Cart"} className="cart-link">
        Cart 
        <sup>
            {cart.length > 0 && <div className="dot"></div>}
        </sup>
    </Link>
</li>

                    
                    <li onClick={() => setunderline("signup")} className={underline === "signup" ? "active" : ""}>
                                <span onClick={()=>SetshowLogin(true)}>SignUp</span>                        
                    </li>
                                
                </ul>
            </div>
        </div>
    );
};
