import Link from "next/link"
import NewItem from "./NewItem"



export default function Page(){
    return(
        <main>
            <NewItem></NewItem>
            <Link href="/">Home</Link>
        </main>
    )
};