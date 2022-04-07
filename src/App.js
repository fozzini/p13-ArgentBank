import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import { store } from "./utils/services/store/store";

/**
* app main file
*
* @param provider store - 
* @return store to provide through all the app
* @param router - 
* @return the routes for navigation and pages
*/
const App = () => {

  return (
    <Provider store={store}>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/SignIn' element={<SignIn/>}/>
       <Route path='/User' element={<User/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
