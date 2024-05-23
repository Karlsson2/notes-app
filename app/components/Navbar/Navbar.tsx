import Link from "next/link";
import styles from "./navbar.module.css";
import { Kantumruy_Pro } from "next/font/google";

const kantumruyPro = Kantumruy_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    <div>
      <Link href="/">
        <h1 className={`${styles.title} ${kantumruyPro.className}`}>Stick<span className={styles.gradient}>IT</span></h1>
      </Link>
    </div>
  );
}
