import Link from "next/link";
import styles from "@/app/page.module.css"
import Image from "next/image";
import { Kantumruy_Pro } from "next/font/google";

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
      <Image className={styles.pictureOne} src="/kurs.svg" alt="Kurs Image" width={300} height={300} />
      <Image className={styles.pictureTwo} src="/mote.svg" alt="Mote Image" width={300} height={300} />
      <Image className={styles.pictureThree} src="/handlingslista.svg" alt="Handlingslista Image" width={400} height={400} />
      <h1 className={`${styles.slogun} ${kantumruyPro.className}`}>Never forget anything with NoteIT!</h1>
    </main>
  );
}
