import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>MAIN PAGE</div>
      <div>MID PAGE</div>
      <div className="md:flex md:gap-4">
        <h2 className="flex justify-center">
          <Link
            href="/about"
            className="hover:border-2 p-2 border-black dark:border-white"
          >
            Click to ABOUT PAGE
          </Link>
        </h2>
        <h2 className="flex justify-center">
          <Link
            href="/project"
            className="hover:border-2 p-2 border-black dark:border-white"
          >
            Click to PROJECT PAGE
          </Link>
        </h2>
        <h2 className="flex justify-center">
          <Link
            href="/contact"
            className="hover:border-2 p-2 border-black dark:border-white"
          >
            Click to CONTACT PAGE
          </Link>
        </h2>
        <h2 className="flex justify-center">
          <Link
            href="/gallery"
            className="hover:border-2 p-2 border-black dark:border-white"
          >
            Click to GALLERY PAGE
          </Link>
        </h2>
      </div>
    </main>
  );
}
