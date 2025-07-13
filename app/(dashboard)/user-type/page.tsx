"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function UserType() {
    const router = useRouter();
    const handleUserClick = () => {
        router.push("/upload-data");
    }
    const handleSocialMediaClick = () => {
        router.push("/social-media");
    }
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-4">
                <Button onClick={handleUserClick}>User</Button>
                <Button onClick={handleSocialMediaClick}>Social Media</Button>
            </div>
        </div>
    )
}