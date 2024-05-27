import Link from "next/link";
import styles from "@/app/page.module.css"
import { Kantumruy_Pro } from "next/font/google";
import DummyNote from "./components/DummyNote1/DummyNote";
import { FetchApiNote } from "./config/data";
import { IngredientType, JokeType, MealType, TodoType } from "./components/Types/ApiTypes";


const kantumruyPro = Kantumruy_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function Home() {
  // fetcha fetch data from 3 diffetent API:s and display them on notes on the home page

  // endpoints for the API:s
  const todo: string = "https://dummyjson.com/todos/" + Math.floor(Math.random() * 253 );
  const joke: string = "https://some-random-api.com/others/joke";
  const ingerdients: string = "https://www.themealdb.com/api/json/v1/1/random.php";
  
  // the functions FetchApiNote to fetch the data 
  const fetchedTodo: TodoType= await FetchApiNote(todo) as TodoType;
   const fetchedJoke: JokeType = await FetchApiNote(joke) as JokeType;
  const fetchedIngerdients: MealType = await FetchApiNote(ingerdients) as MealType;
  const ingredientList: IngredientType = fetchedIngerdients["meals"][0];

  //console log the response data
  console.log(fetchedTodo);
 console.log(fetchedJoke);
  console.log(fetchedIngerdients);

  return (
    <main className={styles.main}>
      <Link href="/notes">
        <div className={styles.buttonBackground}>
          <h1 className={styles.myNotes}>To My Notes</h1>
        </div>
      </Link>
      <DummyNote
        title="Today's Task"
        content= {fetchedTodo.todo}
        tag="task"
        class="pictureOne"
      />
      <DummyNote
        title="Joke of the Day"
        content={fetchedJoke.joke}
        tag="funny"
        class="pictureTwo"
      />
      <DummyNote
        title= {ingredientList["strMeal"]}
        content={ [ingredientList["strIngredient1"], ingredientList["strIngredient2"], ingredientList["strIngredient3"], ingredientList["strIngredient4"] ] }
        tag="meal"
        class="pictureThree"
      />


      <h1 className={`${styles.slogun} ${kantumruyPro.className}`}>Never forget anything with StickIT!</h1>
    </main>
  );
}
