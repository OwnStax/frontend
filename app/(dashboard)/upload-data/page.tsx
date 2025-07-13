'use client'

import { ListContents } from "./_components/list-contents";
import { Upload } from "./_components/upload";

export default function UploadData() {
  return (
    <div>
      <div>
        <Upload/>
      </div>
      <div className="mt-5">
        <ListContents/>
      </div>
    </div>
  );
}   