import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>MAIN PAGE</div>
      <div className="flex gap-4">
        <h2>
          <Link href="/about">Click to ABOUT PAGE</Link>
        </h2>
        <h2>
          <Link href="/project">Click to PROJECT PAGE</Link>
        </h2>
        <h2>
          <Link href="/contact">Click to CONTACT PAGE</Link>
        </h2>
        <h2>
          <Link href="/gallery">Click to GALLERY PAGE</Link>
        </h2>
      </div>
    </main>
  );
}
