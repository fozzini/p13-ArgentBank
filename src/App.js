

import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";


const App = () => {
  
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/SignIn' element={<SignIn/>}/>
       <Route path='/User' element={<User/>}/>
     </Routes>
    </BrowserRouter>
  );
};

export default App;
