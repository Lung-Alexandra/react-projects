import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from "react";


function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [meetupsData, setMeetupsData] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch(
            `${process.env.REACT_APP_FIREBASE}/meetups.json`
        ).then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            const meetups = Object.entries(data).map(([id, details]) => {
                return {
                    id: id,
                    ...details,
                }
            })
            setMeetupsData(meetups);
        })

    },[]);

    if(isLoading){
        return (
            <section>
                <p>Loading... </p>
            </section>
        );
    }

    return (
        <section>
            <h1 style={{marginTop: '6rem'}}>All Meetups</h1>
            <MeetupList meetups={meetupsData}/>
        </section>
    );
}

export default AllMeetupsPage;