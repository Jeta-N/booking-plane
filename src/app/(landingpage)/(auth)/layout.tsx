import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../../globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import CompanyLogos from "../components/company-logos";

const geistSans = localFont({
    src: "./../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./../../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Website Booking Ticket",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white font-poppins bg-flysha-black`}>
                <section id="Signup" className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10 min-h-screen">
                    <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0 min-h-screen">
                        <Navbar />
                        <div className="flex flex-col justify-between min-h-[calc(100vh-78px)]">
                            {children}
                            <CompanyLogos />
                        </div>
                    </div>
                </section>
            </body>
        </html>
    );
}
