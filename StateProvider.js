// set-up data layer
// we need this to track the basket
import React, {createContext, useContext,useReducer}  from "react";


//{
/*  It is like creating global variables that can be 
    passed around in a react app instead of passing props
    from grand parents to paremt to child */
//}

 

// This is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>      
 {children}
</StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);

 // line 18 : here, reducer,initialState,chlidren are 3 props where initialstate told how our inital basket look like 
 // line 19 : use data layer to store information 
 // line 20 : here, children is refering to App in index.js file 
