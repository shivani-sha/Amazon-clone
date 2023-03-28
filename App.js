import React, {useEffect} from "react";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from "./Login.js";
import {useStateValue} from './StateProvider';
import {auth} from "./firebase";
  /* React Router gives the app the feel of desktop apps so you're switching b/w pages without talking to server
    thus the page doesn't reload
    */


function App() {

  const [{user}, dispatch] = useStateValue();
 
  // useEffect <<<< POWERFUL
  //  if we use a return in a useEffect then the result of that will run when the component is unmounted.

  // Component didmount is used with class component and useEffect is used with functional components

  // Piece of code which runs based on a given condition
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // the user is logged in.....
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        // the user is logged out......
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // any cleanup operation go in here...
      unsubscribe();
    }





  }, []);


  console.log("USER IS >>> ",user);


  return (
    <Router>
      <div className="app">
       
        {/*One can go from one page to another page without refreshing using SWITCH 
            or we can set diffrent routes for our page
        */}
        <Switch>
           <Route path = "/checkout">
           <Header />
            <Checkout />
           </Route>
           <Route path="/login">

             <Login/>
            
             
           </Route>
           <Route path="/">
             <Header />
              <Home />


            </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
