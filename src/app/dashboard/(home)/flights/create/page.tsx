import type { Metadata } from "next";
import { type FC } from "react";
import FormFlight from "../components/form-flight";
import { getAirplanes } from "../../airplanes/lib/data";

export const metadata: Metadata = {
    title: 'Dashboard | Create data flight'
}

const CreateFlightPage: FC = async () => {

    const airplanes = await getAirplanes();

    return (
        <div>
            <div>
                <div className="flex flex-row items-center justify-between">
                    <div className="my-5 text-2xl font-bold">Tambah data flight</div>
                </div>
                <FormFlight type="ADD" airplanes={airplanes} />
            </div>
        </div>
    )
}

export default CreateFlightPage