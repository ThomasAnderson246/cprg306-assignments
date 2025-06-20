import Link from "next/link";


export default function Home() {

  let linkStyle = "hover:text-green-900 hover:font-bold";
  return (
   <main className="bg-amber-300">
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <p><Link className={linkStyle} href="week-2">Week 2 Assignment</Link></p>
    <p><Link className={linkStyle} href="week-3">Week 3 Assignment</Link></p>
    <p><Link className={linkStyle} href="week-4">Week 4 Assignment</Link></p>
    <p><Link className={linkStyle} href="week-5">Week 5 Assignment</Link></p>
    <p><Link className={linkStyle} href="week-6">Week 6 Assignment</Link></p>
    <p><Link className={linkStyle} href="week-7">Week 7 Assignment</Link></p>
   </main>
  );
}
