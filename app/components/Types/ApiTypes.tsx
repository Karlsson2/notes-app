//types for the data that is returned by the API:s

type TodoType = {
id: number;
todo: string;
completed: boolean;
userId: number;
}
type JokeType = {
joke: string;
}
type MealType = {
    meals: IngredientType[]
} 
type IngredientType = {
    strMeal: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
}
export type { TodoType, JokeType,MealType,  IngredientType}