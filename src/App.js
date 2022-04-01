

import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import { store } from "./utils/services/store/store";

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
