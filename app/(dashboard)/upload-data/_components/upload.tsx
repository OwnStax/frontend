import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useRef } from "react";
import lighthouse from '@lighthouse-web3/sdk';
import { toast } from "sonner"
import { useAddContentMutation } from "../mutations";

const LIGHTHOUS_APIKEY = process.env.NEXT_PUBLIC_LIGHTHOUSE_APIKEY;


export const Upload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { mutateAsync: addContent } = useAddContentMutation();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    const handleUploadAreaClick = () => {
        fileInputRef.current?.click();
    }

    const handleUpload = async () => {
        if (!file || !LIGHTHOUS_APIKEY) return;
        setUploading(true);
        try {
            const output = await lighthouse.upload([file], LIGHTHOUS_APIKEY);
            await addContent(output.data.Hash);
            toast.success(`File uploaded successfully ${output.data.Hash}`);
            setFile(null);
            setIsOpen(false);
        } catch (error) {
            console.log(error)
        } finally {
            setUploading(false);
        }
    };

   const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
        setFile(null);
    }
   }

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button>Upload</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload file</DialogTitle>
                    <DialogDescription className="mt-3">
                        Upload file to decentralised storage
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <div
                        onClick={handleUploadAreaClick}
                        className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors"
                        style={{
                            borderColor: 'var(--upload-border)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--upload-border-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--upload-border)';
                        }}
                    >
                        {file ? (
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-foreground">
                                    {file.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Click to change file
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <p className="text-lg font-medium text-foreground">
                                    Upload file
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Click to select a file
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button loading={uploading} onClick={handleUpload} disabled={!file}>
                        Upload
                    </Button>
                </div>
            </DialogContent>
        </Dialog> 
    )
}