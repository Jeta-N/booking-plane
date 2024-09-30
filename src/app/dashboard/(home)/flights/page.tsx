import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { columns } from "./components/columns-flight";
import { getFlight } from "./lib/data";

export const metadata: Metadata = {
    title: 'Dashboard | Flights'
}

export default async function FlightPage() {
    const data = await getFlight()

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Flight</div>
                <Button asChild>
                    <Link href={'/dashboard/flights/create'}>
                        <Plus className='mr-2 w-4 h-4' />
                        Tambah Data
                    </Link>
                </Button>
            </div>
            <DataTable columns={columns} data={data} />
        </>
    )
}