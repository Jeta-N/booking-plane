"use client"

import { Airplane } from '@prisma/client'
import React, { type FC, useContext, type ChangeEvent } from 'react'
import { type Fcontext, FilterActionKind, FlightContext } from '../providers/flight-provider'

interface CheckboxAirlineProps {
    airplane: Airplane
}

const CheckboxAirline: FC<CheckboxAirlineProps> = ({ airplane }) => {

    const { dispatch } = useContext(FlightContext) as Fcontext

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const isChecked = event.target.checked

        dispatch({
            type: isChecked ? FilterActionKind.ADD_PLANE : FilterActionKind.REMOVE_PLANE,
            payload: {
                planeId: value
            }
        })
    }

    return (
        <label htmlFor={airplane.name} className="font-semibold flex items-center gap-[10px] text-white">
            <input type="checkbox" name="airlines" value={airplane.id} id={airplane.name} onChange={handleChange} className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-[6px] checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white" />
            {airplane.name}
        </label>
    )
}

export default CheckboxAirline