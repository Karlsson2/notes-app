import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Link href="/notes">
        <h1>To My notes</h1>
      </Link>
    </main>
  );
}
