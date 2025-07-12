"use client";

import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if(address) {
      router.push("/upload-data");
    }
  }, [address]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ConnectKitButton />
    </div>
  );
}
