'use client'

import Navbar from "@/components/Navbar"
import EventsHeader from "@/components/events/EventsHeader"
import UpcomingEvents from "@/components/events/UpcomingEvents"
import PastEvents from "@/components/events/PastEvents"
import Footer from "@/components/Footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="fixed inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary-purple/10 rounded-full blur-[100px]" />
      </div>
      
      <Navbar />
      
      <main className="relative z-10 container mx-auto px-4 py-20">
        <EventsHeader />
        <UpcomingEvents />
        <PastEvents />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}