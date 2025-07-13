'use client'

import { Button } from "@/components/ui/button";
import { ListContents } from "./_components/list-contents";
import { Upload } from "./_components/upload";
import { useRouter } from "next/navigation";

export default function UploadData() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/user-type");
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Upload/>
        </div>
        <div>
          <Button onClick={handleBack}>Back</Button>
        </div>
      </div>
      <div className="mt-5">
        <ListContents/>
      </div>
    </div>
  );
}   