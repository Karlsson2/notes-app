import Link from "next/link";
import styles from "@/app/page.module.css"
import { Kantumruy_Pro } from "next/font/google";
import DummyNote from "./components/dummyNote/DummyNote";

const kantumruyPro = Kantumruy_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Home() {
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
