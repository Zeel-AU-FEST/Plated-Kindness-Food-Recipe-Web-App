import FoodItem from "./FoodItem.jsx"
export default function FoodList({FoodData,SetFoodData,SetFoodId})
{
    return <div>
        {FoodData.map((food) => (<FoodItem key={food.id} food={food} SetFoodId={SetFoodId}/>))}
    </div>
}