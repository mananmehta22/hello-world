import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import VegetableList from "./components/VegetableList.js";
import Footer from "./components/Footer.js";

function App() {
  const vegetables = [
    {
      price: 20,
      name: "Potato",
      quantity: 0,
    },
    {
      price: 35,
      name: "Tomato",
      quantity: 0,
    },
  ];

  let [vegetablesList, setVegetableList] = useState(vegetables);

  const incrementQuantity = (index) => {
    let newVegetableList = [...vegetablesList];
    newVegetableList[index].quantity++;
    setVegetableList(newVegetableList);
  };

  const decrementQuantity = (index) => {
    let newVegetableList = [...vegetablesList];
    newVegetableList[index].quantity > 0
      ? newVegetableList[index].quantity--
      : (newVegetableList[index].quantity = 0);
    setVegetableList(newVegetableList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <VegetableList
          vegetablesList={vegetablesList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer/>
    </>
  );
}

export default App;
