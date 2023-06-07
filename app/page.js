import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      MAIN PAGE
      <h2>
        <Link href="/about">Click to ABOUT PAGE</Link>
      </h2>
    </main>
  )
}
