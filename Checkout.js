import React from 'react';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import Subtotal from './Subtotal';



function Checkout() {
    const [{basket}] = useStateValue();
    return( <div className='checkout'>
            <div className="checkout__left">
            <img className="checkout__ad" 
            src ="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg"
            alt=""
            />
            {/* using ternary operator for Condition:  */}
            {/* if part */}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click on "Add to basket" next to the item. </p>
                </div>
            ) : (  
                // Else Part
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* List out all the checkout products */}
                    {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    
                    />
                    ))}
                </div>
            )}
        </div>
        {basket.length>0 && (
            <div className="checkout__right">
                <Subtotal/>
            </div>
        )}
    </div>
    );

}

export default Checkout;
