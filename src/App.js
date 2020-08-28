import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData/users'
import Details from './Details/Details';
import Navigation from './navigation/Navigation';
import Cart from './cart/Cart';


// i have create three child component "navigation""details""cart" and load data here i mean in app.js//

function App() {
  const [courses,setCourses] = useState(fakeData)
    const [cart , setCart] = useState([])
  
  const handleAddCourse =(course)=>{
    const newCart = [...cart,course]
  setCart(newCart)
}
  return (
    <div className="App">
           <Navigation></Navigation>
     <div className="cart">
           <Cart courses={cart} ></Cart>
       </div>
       {
         courses.map(course=> 
         <Details 
         handleAddCourse ={handleAddCourse}
         course = {course}>   
         </Details>)
       }
    </div>
  );
}

export default App;
