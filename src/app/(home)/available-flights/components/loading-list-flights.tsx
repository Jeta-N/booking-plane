import React from 'react'
import LoadingFlightItem from './loading-flight-item'

export default function LoadingListFlights() {
  return (
    <div className='flex flex-col w-full gap-6'>
      <LoadingFlightItem />
      <LoadingFlightItem />
      <LoadingFlightItem />
    </div>
  )
}
