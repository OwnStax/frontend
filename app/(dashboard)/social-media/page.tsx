"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SocialMedia() {
    const router = useRouter();
    const handleBack = () => {
        router.push("/user-type");
    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Register your social media</h1>
            <div className="flex gap-2 justify-between">
                <Button>Register</Button>
                <Button onClick={handleBack}>Back</Button>
            </div>
        </div>
    )
}