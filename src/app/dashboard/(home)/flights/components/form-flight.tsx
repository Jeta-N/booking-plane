"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SubmitButtonForm from "../../components/submit-form-button"
import type { Airplane, Flight } from "@prisma/client"
import { useFormState } from "react-dom"
import { saveFlight, updateFlight } from "../lib/actions"
import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions"
import { dateFormat } from "@/lib/utils"

interface FormFlightProps {
    airplanes: Airplane[],
    type?: "ADD" | "EDIT"
    defaultValues?: Flight | null
}

const initialFormState: ActionResult = {
    errorTitle: null,
    errorDesc: []
}

export default function FormFlight({ airplanes, defaultValues, type }: FormFlightProps) {

    const updateFlightWithId = (_state: ActionResult, formData: FormData) => updateFlight(null, defaultValues.id, formData)

    const [state, formAction] = useFormState(type === "ADD" ? saveFlight : updateFlightWithId, initialFormState)

    return (
        <form action={formAction} className="space-y-6">
            {
                state?.errorTitle !== null && (
                    <div className="mt-7 bg-red-500 p-4 rounded-lg text-white">
                        <div className="font-bold mb-4">
                            {state.errorTitle}
                        </div>

                        <ul className="list-disc list-inside">
                            {state.errorDesc?.map((value, index) => (
                                <li key={index + value}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="planeId">
                        Pilih Pesawat
                    </Label>
                    <Select name="planeId" defaultValue={defaultValues?.planeId}>
                        <SelectTrigger id="planeId">
                            <SelectValue placeholder="Pilih pesawat" />
                        </SelectTrigger>
                        <SelectContent>
                            {airplanes.map((airplane) => (
                                <SelectItem key={airplane.id} value={airplane.id}>{airplane.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="price">
                        Harga Ticket
                    </Label>
                    <Input placeholder="Harga Ticket...." type="number" name="price" id="price" min={0} required defaultValue={defaultValues?.price} />
                    <span className="text-xs text-gray-900">Harga untuk kelas businness bertambah Rp 500.000 & Kelas first bertambah Rp 750.000</span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="departureCity">
                        Kota Keberangkatan
                    </Label>
                    <Input placeholder="Kota Keberangkatan...." name="departureCity" id="departureCity" required defaultValue={defaultValues?.departureCity} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="departureDate">
                        Tanggal Keberangkatan
                    </Label>
                    <Input placeholder="Tanggal Keberangkatan...." type="datetime-local" name="departureDate" id="departureDate" required className="block" defaultValue={dateFormat(defaultValues?.departureDate, "YYYY-MM-DDTHH:MM")} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="departureCityCode">
                        Kode Kota
                    </Label>
                    <Input placeholder="Kode Kota...." name="departureCityCode" id="departureCityCode" required defaultValue={defaultValues?.departureCityCode} />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="destinationCity">
                        Kota Tujuan
                    </Label>
                    <Input placeholder="Kota Tujuan...." name="destinationCity" id="departureCity" required defaultValue={defaultValues?.destinationCity} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="arrivalDate">
                        Tanggal Tiba
                    </Label>
                    <Input placeholder="Tanggal Tiba...." type="datetime-local" name="arrivalDate" id="arrivalDate" required className="block" defaultValue={dateFormat(defaultValues?.arrivalDate, "YYYY-MM-DDTHH:MM")} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="destinationCityCode">
                        Kode Kota
                    </Label>
                    <Input placeholder="Kode Kota...." name="destinationCityCode" id="destinationCityCode" required defaultValue={defaultValues?.destinationCityCode} />
                </div>
            </div>

            <SubmitButtonForm />
        </form>
    )
}
