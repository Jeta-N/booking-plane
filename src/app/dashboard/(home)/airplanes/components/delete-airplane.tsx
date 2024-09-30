"use client"

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { type FC } from "react";
import { useFormStatus } from "react-dom";
import { deleteAirplane } from "../lib/actions";

interface DeleteAirplaneProps {
    id: string
}

function SubmitButton() {

    const { pending } = useFormStatus()

    return (
        <Button size='sm' disabled={pending} type="submit" variant='destructive'>
            <Trash className="w-4 h-4 mr-2" />
            Hapus
        </Button>
    )
}

const DeleteAirplane: FC<DeleteAirplaneProps> = ({ id }) => {
    const DeleteAirplaneWithId = deleteAirplane.bind(null, id)

    return (
        <form action={DeleteAirplaneWithId}>
            <SubmitButton />
        </form>
    )
}

export default DeleteAirplane;