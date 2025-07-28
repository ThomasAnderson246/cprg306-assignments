import Link from "next/link";

export default function Home() {
  // Define a set of common Tailwind classes for button-like links
  const buttonLinkStyle = 
  "block w-full m-2 p-3 text-center text-lg font-semibold bg-green-500 rounded-lg shadow-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150 transform hover:scale-105";

  return (
    <div className=" bg-green-500 flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-md bg-amber-200 rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
          CPRG 306: Web Development 2
          <br />
          <span className="text-3xl sm:text-4xl text-gray-600 mt-2 block">Assignments</span>
        </h1>

        <div> 
          <Link className={buttonLinkStyle} href="week-2">Week 2 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-3">Week 3 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-4">Week 4 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-5">Week 5 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-6">Week 6 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-7">Week 7 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-8">Week 8 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-9">Week 9 Assignment</Link>
          <Link className={buttonLinkStyle} href="week-10">Week 10 Assignment</Link>
        </div>

        
        <p className="mt-8 text-gray-500 text-sm">© 2025 Thomas Anderson/School of Digital Technology/SAIT</p>
      </main>
    </div>
  );
}