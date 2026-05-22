import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";
import { DATABASE_ID, Query, TABLE_ID, tablesDB } from "../lib/appwrite";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetupsData, setMeetupsData] = useState([]);

    useEffect(() => {
        async function fetchMeetups() {
            setIsLoading(true);

            try {
                const response = await tablesDB.listRows({
                    databaseId: DATABASE_ID,
                    tableId: TABLE_ID,
                    queries: [Query.limit(100)],
                });

                const meetups = response.rows.map((row) => ({
                    id: row.$id,
                    title: row.title,
                    image: row.image,
                    address: row.address,
                    description: row.description,
                }));

                setMeetupsData(meetups);
            } catch (error) {
                console.error("Failed to load meetups:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMeetups();
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1 style={{ marginTop: "6rem" }}>All Meetups</h1>
            <MeetupList meetups={meetupsData} />
        </section>
    );
}

export default AllMeetupsPage;
