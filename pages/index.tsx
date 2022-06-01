import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from "../components/layout"

const events = [
  { id: 1, name: "Excuse Me Brother! By Aakash Gupta", venue: "HK Hall: Ahmedabad", type: "Comedy Shows", price: "499", img: "excuseme-brother.png" },
  { id: 2, name: "Supermoon ft B Praak King of Hearts Tour", venue: "YMCA International Centre: Ahmedabad", type: "Concerts", price: "799", img: "bpraak.png" },
  { id: 3, name: "Jasleen royal live concert", venue: "YMCA International Centre: Ahmedabad", type: "Concerts", price: "499", img: "jasleen-royal.png" },
  { id: 4, name: "Lost Stories at Hungrito Food Fest 4.0", venue: "Lavish Green By Nirvanaa Corp: Ahmedabad", type: "Music Shows", price: "199", img: "lost-stories.png" }
]

const Home: NextPage = () => {

  const [eventID, setEventID] = useState(0)

  const handleEventClick = (id: number) => {
    setEventID(id)
  }

  return (
    <Layout>
      <div className="flex flex-wrap border">
        {events.map((event) => (
          <div className="px-[1%] basis-1/4 overflow-hidden" key={event.id} onClick={() => {handleEventClick(event.id)}}>
            <img src={`/events/${event.img}`} alt="" className="" />
            <div>
              <p className="text-lg font-bold">{event.name}</p>
              <p className="text-gray-600 truncate">{event.venue}</p>
              <p className="text-sm text-gray-500">{event.type}</p>
              <p className="text-sm text-gray-500">{event.price} XTZ</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
