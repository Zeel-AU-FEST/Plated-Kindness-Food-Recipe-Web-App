import { useEffect, useState } from "react";
import "./FoodDetail.css";
import ItemList from "./ItemList.jsx";
export default function FoodDetail({ FoodId }) {
  const [food, setFood] = useState(null);
  const apiKey = "f8539dce55504c218f9379e3d5158c64";
  useEffect(() => {
    if (!FoodId) return;

    async function fetchDetails() {
      const URL = `https://api.spoonacular.com/recipes/${FoodId}/information?apiKey=${apiKey}`;
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setFood(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching food detail:", err);
      }
    }

    fetchDetails();
  }, [FoodId]);

  if (!food) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="FoodDetails">
      <div className="recipeCard">
        <h2 className="recipeName">{food.title}</h2>
        <img src={food.image} alt="Food" className="recipeImage"/>

        <div className="recipeDetails">
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? <p>🥕 Vegetarian</p> : <p>🍗 Non-Vegetarian</p>}</strong>
          </span>
          <span><strong>{food.vegan ? "🐮 Vegan" : ""}</strong></span>
        </div>
        <div>
          <span><strong>$ {food.pricePerServing / 100}</strong></span>
        </div>
      </div>
        <h2>Ingredients</h2>
        <ItemList food={food}/>
        <h2>Instructions</h2>
      <div className="recipeInstructions">
        <ol>
        {food.analyzedInstructions[0].steps.map((step) => (
          <li>{step.step}</li>
        ))}
        </ol>
      </div>
    </div>
  );
}
