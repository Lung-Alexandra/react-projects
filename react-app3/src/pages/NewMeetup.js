import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate } from 'react-router-dom'

function NewMeetupPage() {
    const history = useNavigate ();
    function addMeetupHandler(meetupData) {
        fetch(
            `${process.env.REACT_APP_FIREBASE}/meetups.json`,
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers:{
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            history('/');
        })
    }

    return (
        <section>
            <h1 style={{marginTop: '6rem'}}>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;