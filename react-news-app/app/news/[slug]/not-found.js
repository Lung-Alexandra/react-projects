import Link from "next/link";

export default function NotFound() {
    return (
        <div className={"section"}>
            <h1 className={"error"}>404</h1>
            <div className={"page"}>Ooops!!! Unfortunately we didn't find the article you are looking for</div>
            <div className={"backHome"}>
                <Link href='/'>Back to News</Link>
            </div>
        </div>
    );
}