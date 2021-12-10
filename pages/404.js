import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <article className="not-found">
            <h1>Oh no.......</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link> and try again!</p>
        </article>
    );
}

export default NotFound;