import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/newsList";

export default function LatestPage() {
    const latestNews = getLatestNews();

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews}/>
        </>
    )
}