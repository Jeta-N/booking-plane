"use server"

import prisma from "../../../../lib/prisma"

export const getCityFilter = async () => {
    try {
        const cities = await prisma.flight.groupBy({
            by: ['departureCity', 'destinationCity'],
            where: {
                departureDate: {
                    gt: new Date()
                }
            },
            _count: {
                departureCity: true,
                destinationCity: true
            }
        })

        return cities;
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getAirplanes = async () => {
    try {
        const airplanes = await prisma.airplane.findMany({
            where: {
                flight: {
                    every: {
                        id: undefined
                    }
                }
            }
        })

        return airplanes
    } catch (error) {
        console.log(error)
        return []
    }
}