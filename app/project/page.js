import Link from "next/link";

export default function Project() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      Project PAGE
      <h2>
        <Link href="/">Click to HOME PAGE</Link>
      </h2>
    </main>
  );
}
