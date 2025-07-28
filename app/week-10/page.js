"use client"

import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {

    const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const router = useRouter();

    useEffect(() => {
        if(user) {
            router.push('/week-10/shopping-list/')
        }
    }, [user, router])

    async function HandleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

  

    return(
        <main>
            <header>Shopping List Signin</header>

            {user ? (
                <section>
                    <div>
                        <p>Welcome {user.displayName} ({user.email})</p>
                    </div>
                    <div>
                        <button 
                        onClick={handleSignOut}
                        className="text-lg bg-green-700 rounded text-white px-2 py-1 mt-4"
                        type="button">Sign Out</button>
                    </div>
                </section>
            ) : (
                <section>
                    <button
                    onClick={HandleSignIn}
                    type="button"
                    className="text-lg bg-green-700 rounded text-white px-2 py-1 mt-4">
                        Sign in with GitHub
                    </button>
                </section>
            ) }
        </main>
    );
}