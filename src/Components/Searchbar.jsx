import { useState } from "react";
import "./Searchbar.css";

export default function Searchbar({ FoodData, SetFoodData }) {
  const [query, setQuery] = useState("pizza");

  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = "";

  async function fetchFood() {
    try {
      const res = await fetch(`${url}?apiKey=${apiKey}&query=${query}`);
      const data = await res.json();
      SetFoodData(data.results || []);
    } catch (err) {
      console.error("Failed to fetch food:", err);
    }
  }

  return (
    <div className="container">
      <input
        className="Input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button onClick={fetchFood}>Search</button>
    </div>
  );
}
