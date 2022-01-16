import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import VegetableList from './components/VegetableList.js'
import React,{useState} from 'react'

function App() {
  const vegetableList = [
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

  let [vegetablesList , setVegetableList] = useState(VegetableList)

  const incrementQuantity = (index) => {
    let newVegetableList = [...vegetablesList]
    newVegetableList[index].quantity++
    setVegetableList(newVegetableList);
  }


  return (
   <>
   <Navbar/>
   <main className='container mt-5'>
   <VegetableList vegetableList={vegetableList} incrementQuantity={this.incrementQuantity}/>
   </main>
  </>
  );
}

export default App;
