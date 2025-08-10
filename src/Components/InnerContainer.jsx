import "./InnerContainer.css"
import FoodList from "./FoodList.jsx"
export default function InnerContainer({FoodData,SetFoodData,SetFoodId})
{
    return <div className="Container">
            <FoodList FoodData={FoodData} SetFoodData={SetFoodData} className="Child1" SetFoodId={SetFoodId}/>
    </div>
}