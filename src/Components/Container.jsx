import "./Container.css"
import FoodDetail from "./FoodDetail.jsx"
import InnerContainer from "./InnerContainer.jsx"
export default function container({FoodData,SetFoodData,SetFoodId,FoodId})
{
    return <div className="Parent">
        <InnerContainer className="Child1" FoodData={FoodData} SetFoodData={SetFoodData} SetFoodId={SetFoodId} />
        <FoodDetail FoodId={FoodId} className="child2"/>
    </div>
}