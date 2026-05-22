import {
    getAllNews,
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth
} from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/newsList";

export default function FilterNewsPage({params}) {

    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let newsFilter = getAvailableNewsYears();

    let news;

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        newsFilter = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        newsFilter = ['<<']
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news}/>
    }

    if ((selectedYear && !getAvailableNewsYears().includes(+selectedYear))
        ||
        (selectedMonth && !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth)))
        throw new Error('Invalid filter!')

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {newsFilter.map((filter) => {
                            const href = selectedMonth
                                ? '/archive'
                                : (selectedYear
                                    ? `/archive/${selectedYear}/${filter}`
                                    : `/archive/${filter}`)

                            return (
                                <li key={filter}>
                                    <Link
                                        href={href}>
                                        {filter}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>

            {newsContent}
        </>
    )
}