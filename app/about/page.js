import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ABOUT PAGE
      <h2>
        <Link href="/">Click to HOME PAGE</Link>
      </h2>
    </main>
  )
}
