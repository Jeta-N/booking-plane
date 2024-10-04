"use client"

import React, { useContext } from 'react'
import FlightItem from './flight-item'
import { type Fcontext, FlightContext } from '../providers/flight-provider'
import LoadingListFlights from './loading-list-flights'

export default function ListFlight() {

    const { flights, isLoading } = useContext(FlightContext) as Fcontext

    if (isLoading) {
        return <LoadingListFlights />
    }

    return (
        <div className="ticket-container flex flex-col w-full gap-6">
            {
                flights.map((val) => (
                    <FlightItem key={val.id} data={val} />
                ))
            }
            <p className="text-center text-sm text-[#A0A0AC] h-fit">You’ve reached the end of results.</p>
        </div>
    )
}
