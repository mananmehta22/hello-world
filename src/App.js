import React,{ useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import VegetableList from './components/VegetableList.js'


function App() {
  const vegetables = [
    {
      price: 20,
      name: "Potato",
      quantity: 0 
    },
    {
      price: 35,
      name: "Tomato",
      quantity: 0
    }
  ]

  let [vegetablesList , setVegetableList] = useState(vegetables)

  const incrementQuantity = (index) => {
    let newVegetableList = [...vegetablesList]
    newVegetableList[index].quantity++
    setVegetableList(newVegetableList);
  }


  return (
   <>
   <Navbar/>
   <main className='container mt-5'>
   <VegetableList vegetablesList={vegetablesList} 
   incrementQuantity={incrementQuantity}
   />
   </main>
  </>
  );
}

export default App;
