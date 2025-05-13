import Link from "next/link";


export default function StudentInfo(){
    return(
        <div>
            <ul>
                <li>Thomas Anderson</li>
                <li><Link href="https://github.com/ThomasAnderson246/cprg306-assignments">GitHub Link</Link></li>
            </ul>
        </div>
    );
}