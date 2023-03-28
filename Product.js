import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, rating, price}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price,
            }
        })
    };


    


    return (<div className="product">
        <div className="product__info">
            <p>{title}</p>
            <div className="product__price">
                {/* <small>₹</small>
                <strong>{price}</strong> */}


                <CurrencyFormat 
                renderText = {(value) => (
                    <strong>{`${value}`}</strong>
                )}

                decimalScale={2}
                value={price}  
                displayType={'text'}
                thousandSeparator = {true}
                thousandSpacing={'2s'}
                fixedDecimalScale = {true}
                prefix={'₹'}
                />
            </div>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map ((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
             <img src={image} alt="" />
        
             <button onClick={addToBasket}>Add to basket</button>

            
    </div>);

    
}


export default Product;