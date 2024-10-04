"use client"
import type { TypeSeat } from '@prisma/client'
import React, { ChangeEvent, useContext } from 'react'
import { type Fcontext, FlightContext, FilterActionKind } from '../providers/flight-provider'

const SEAT_OPTIONS: TypeSeat[] = ['ECONOMY', 'BUSINESS', 'FIRST']

export default function FilterClass() {
    const { dispatch } = useContext(FlightContext) as Fcontext

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FilterActionKind.SET_SEAT,
            payload: {
                planeId: "",
                seat: event.target.value
            }
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <p className="font-semibold">Seat Class</p>

            {SEAT_OPTIONS.map((val, i) => (
                <label htmlFor={val} className="font-semibold flex items-center gap-[10px] has-[:checked]:text-white" key={`${val} ${i}`}>
                    <input type="radio" name="seat" id={val} value={val} onChange={handleChange}
                        className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-full checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white" />
                    {val}
                </label>
            ))}
        </div>
    )
}
