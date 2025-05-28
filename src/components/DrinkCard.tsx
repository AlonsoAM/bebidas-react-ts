import type {Recipes} from "../types";

type DrinkCardProps = {
  drink: Recipes['drinks'][0]
}

const DrinkCard = ({drink}: DrinkCardProps) => {
  return (
    <div>
      <p>{drink.strDrink}</p>
    </div>
  )
}
export default DrinkCard
