import type { CHECKOUT } from "@/lib/utils"
import { useEffect, useState } from "react"

const useCheckoutData = () => {
    const [data, setData] = useState<CHECKOUT | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const value = window.sessionStorage.getItem('CHECKOUT_KEY')

            if (value) {
                setData(JSON.parse(value))
            }
        }
    }, [])

    return {
        data
    }
}

export default useCheckoutData