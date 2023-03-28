// here all the data layer logic will be written

export const initialState = {
    basket: [],
    user: null,
};

// here, we using the concept of selectors to get the total amount
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount,0);  

// state = data layer || action = manipulates= data layer || switch = check against bunch of cases

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_USER':        
        // update the user when logged in and logged out....
            return {
                ...state,
                user: action.user,
            };
        case 'ADD_TO_BASKET':
            // logic of adding item to 
            return {
                ...state,           // returning the state
                basket: [...state.basket, action.item],   // overwrite the value of basket with a new value
            };
      //      break;
        case 'REMOVE_FROM_BASKET':
            // logic of removing an item 
            // here we cloned the basket
            let newBasket = [...state.basket];

            // we check to see if product exist, 
            const index =  state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if (index >= 0){
                //item exists in basket, remove it ...........
                newBasket.splice(index,1);
            }
            else{
                console.warn(`cant remove product (id: ${action.id}) as its not in basket`);
            }
            
            return {...state, basket: newBasket,}; 
         //   break;
        default :
            return state;
    }
};

export default reducer;   // this helps to use reducer outside