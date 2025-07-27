
"use client";

import { CldImage } from "next-cloudinary";

export default function Page() {
  return (
    <div className="p-6 flex justify-center">
      <CldImage
        src="cld-sample-5" // or your own public_id like "my-folder/my-image"
        width={500}
        height={500}
        alt="Sample"
        crop="fill"       // valid crop type
        gravity="auto"    // smart cropping based on focus
      />
    </div>
  );
}
