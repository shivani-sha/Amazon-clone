import React from 'react';
import Product from './Product';
import './Home.css';

// react-context-API = 
// redux = 

function Home(){
    return (
        <div className="home">
           {/* <h1>I am the Homepage!!!</h1>  */}
           <img className="home__image" src="https://m.media-amazon.com/images/I/61jX61wWoYL._SX3000_.jpg" alt="Banner"/>

            {/* Product: id, title, price, rating, image,  */}
           <div className="home__row">
                <Product
                    id="1234123421"
                    title="Urban Furnishing Sofa Cums Bed Furniture (5x6) Three Seater for Home & Living Room (Blue)"
                    price={12399.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61F8-dmWr+S._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Product
                    id="1234123422"
                    title="ASUS ZenBook Pro Duo Intel Core i7-10750H 10th Gen 15.6 inch | 4K UHD OLED Touchscreen Laptop (32GB RAM/1TB NVMe SSD/Windows 10/6GB NVIDIA GeForce RTX 2060 Graphics/Blue/2.5 Kg) UX581LV-H2034T"
                    price={224494.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91VR2ZXL9LL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1234123423"
                    title="Cracking the Coding Interview: 189 Programming Questions and Solutions | Indian Edition"
                    price={581.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-7dH4JHmL._AC_UY327_FMwebp_QL65_.jpg"
                />

                <Product
                    id="1234123424"
                    title="New Apple iPhone 11 (256GB) - Green"
                    price={74399.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UY327_FMwebp_QL65_.jpg"
                />

                <Product
                    id="4321234921"
                    title="Rolex Cosmograph Dayton Dial Watch with Google Wear OS, 24x7 Activity and Sleep Tracking (No-Cost EMI Available)"
                    price={6607362.00}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51gG1E-CGvL._SX300_SY300_QL70_FMwebp_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="9844234251"
                    title="Samsung 108 cm (43 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA43AUE70AKLXL (Black) (2021 Model)"
                    price={37899.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61GwJAhftvS._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>

        </div>
    );
}

export default Home;