import { useState } from "react"
import Layout from "../components/layout"

export default function ListYourShow() {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')

    return (
        <Layout>
            <p className="mt-2">Your Name</p>
            <input className="p-2 border-b" type="text" name="Your Name" placeholder="Full Name" />
            <p className="mt-2">Event City</p>
            <select name='Event City' onChange={(e) => { setCity(e.target.value) }}>


                <option value="New York" selected>New York</option>

                <option value="Los Angeles">Los Angeles</option>

            </select>
        </Layout>
    )
}