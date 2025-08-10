import Searchbar from "./Components/Searchbar"
import Nav from "./Components/Nav.jsx"
import { useState } from "react"
import "./App.css"
import Container from "./Components/Container.jsx"
function App() {
  let [FoodData,SetFoodData]=useState([])
  let [FoodId,SetFoodId]=useState("")
  return (
    <>
      <Nav/>
      <Searchbar FoodData={FoodData} SetFoodData={SetFoodData}/>
       <Container FoodData={FoodData} SetFoodData={SetFoodData} SetFoodId={SetFoodId} FoodId={FoodId}/>
    </>
  )
}

export default App
