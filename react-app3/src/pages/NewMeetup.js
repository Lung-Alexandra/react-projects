import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { DATABASE_ID, ID, TABLE_ID, tablesDB } from "../lib/appwrite";

function NewMeetupPage() {
    const navigate = useNavigate();

    async function addMeetupHandler(meetupData) {
        try {
            await tablesDB.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: ID.unique(),
                data: {
                    title: meetupData.title,
                    image: meetupData.image,
                    address: meetupData.address,
                    description: meetupData.description,
                },
            });

            navigate("/");
        } catch (error) {
            console.error("Failed to create meetup:", error);
        }
    }

    return (
        <section>
            <h1 style={{ marginTop: "6rem" }}>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
