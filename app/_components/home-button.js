
import Link from "next/link";



export default function HomeButton() {


    return(

        <div>
            <Link href="./" className="bg-green-600 hover:bg-green-300 font-bold p-4 rounded">Home</Link>
        </div>
    );
}