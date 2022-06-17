import { useState } from "react"
import Layout from "../components/layout"

export default function ListYourShow() {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [eventType, setEventType] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    return (
        <Layout>
            <p className="mt-2" onChange={(e) => { setName(e.target.value) }}>Your Name</p>
            <input className="p-2 border-b" type="text" name="Organizer Name" placeholder="Full Name" />

            <p className="mt-2">Event City</p>
            <select name='Event City' onChange={(e) => { setCity(e.target.value) }} placeholder="Select City">
                <option value="New York" selected>New York</option>
                <option value="Los Angeles">Los Angeles</option>
            </select>

            <p className="mt-2">Event Type</p>
            <select name='Event Type' onChange={(e) => { setEventType(e.target.value) }} placeholder="Select Event Type">
                <option value="Exhibtition" selected>Exhibition</option>
                <option value="Workshop">Workshop</option>
                <option value="Meetup">Meetup</option>
            </select>

            <p className="mt-2">Max Number of People to attend</p>
            <input className="p-2 border-b" type="number" name="Number of People" placeholder="Number of People" />

            <p className="mt-2">Event Date</p>
            <input className="p-2 border-b" type="date" name="Event Date" placeholder="Select Event Date" />

            <p className="mt-2">Event Short Description</p>
            <input className="p-2 border-b" type="text" name="Event Description" placeholder="Minimum 50 Characters" />

        </Layout>
    )
}