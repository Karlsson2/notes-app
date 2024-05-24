import Link from "next/link";
import styles from "@/app/page.module.css"
import { Kantumruy_Pro } from "next/font/google";
import DummyNote from "./components/dummyNote/DummyNote";
import { FetchApiNote } from "./config/data";


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
  const fetchedTodo= await FetchApiNote(todo);
   const fetchedJoke = await FetchApiNote(joke);
  const fetchedIngerdients = await FetchApiNote(ingerdients);

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
        title="Note 1"
        content="Content 1"
        tag="tag1"
        class="pictureOne"
      />
      <DummyNote
        title="Note 2"
        content="Content 2"
        tag="tag2"
        class="pictureTwo"
      />
      <DummyNote
        title="Note 3"
        content="Content 3"
        tag="tag3"
        class="pictureThree"
      />
      <h1 className={`${styles.slogun} ${kantumruyPro.className}`}>Never forget anything with NoteIT!</h1>
    </main>
  );
}
