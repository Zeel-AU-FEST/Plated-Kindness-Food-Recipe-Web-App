import "./FoodItem.css"
export default function FoodItem({food,SetFoodId})
{
    return <div className="ItemContainer">
        <img src={food.image} alt="Image" />
        <h1 key={food.title}>{food.title}</h1>
        <button onClick={(e)=>{SetFoodId(food.id)}}>View Recipe</button> 
    </div>
}