"use client"

import { useState } from "react"
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ImageViewer({ imageUrl, altText }: { imageUrl: string; altText: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Trigger to open the dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Image
            src={imageUrl}
            alt={altText}
            className="cursor-pointer w-full rounded-md hover:opacity-80"
            width={500}
            height={500}
          />
        </DialogTrigger>

        {/* Dialog content */}
        <DialogContent className="flex w-88vh items-center justify-center p-0 overflow-y-auto">
          <div className="w-fit max-h-screen overflow-auto justify-top">
            <Image
              src={imageUrl}
              alt={altText}
              className="w-full rounded-md overflow-y-auto"
              width={1200}
              height={1200}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}