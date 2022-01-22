import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Card from "./components/card/Card";
import File from "./components/themeContext/File";
import { ThemeContext, ThemeProvider } from "styled-components";
import { useState } from 'react';
import { DarkTheme, LightTheme } from "./components/themeContext/styled";
import Reducer from "./components/reducer/Reducer";
import IceCreamList from "./components/ice-cream/IceCreamList";
import AddIceCream from "./components/ice-cream/AddIceCream";


function App() {
  
  const [theme, toggleTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
       <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/card' element={<Card/>}  />
     <Route path='/thema' element={<File/>}  />
     <Route path='/reducer' element={<Reducer/>} />
     <Route path='/IceCream' element={<IceCreamList/>} />
     <Route path='/AddIceCream' element={<AddIceCream/>} />
     
   </Routes>
   
   </BrowserRouter>   
     </ThemeProvider>
    </ThemeContext.Provider>
      
   
  );
}

export default App;
