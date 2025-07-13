"use client";

import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { Toaster } from "@/components/ui/sonner"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { address } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (!address) {
            router.push("/");
        }
    }, [address, router]);

    return (
        <div className="h-screen flex flex-col">
            <div className="flex justify-between items-center p-5">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">Ownstax</h1>
                </div>
                <ConnectKitButton />
            </div>
            <div className="flex-1 p-5">
                {children}
                <Toaster />
            </div>
        </div>
    );
}