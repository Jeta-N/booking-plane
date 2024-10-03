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
