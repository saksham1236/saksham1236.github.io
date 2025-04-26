"use client"

import { useState } from "react"
import Image from "next/image"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ImageViewer({
  imageUrl,
  altText,
}: {
  imageUrl: string
  altText: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Trigger to open the dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Image
            src={imageUrl}
            alt={altText}
            className="w-full cursor-pointer rounded-md hover:opacity-80"
            width={500}
            height={500}
          />
        </DialogTrigger>

        {/* Dialog content */}
        <DialogContent className="w-88vh flex items-center justify-center overflow-y-auto p-0">
          <div className="justify-top max-h-screen w-fit overflow-auto">
            <Image
              src={imageUrl}
              alt={altText}
              className="w-full overflow-y-auto rounded-md"
              width={1200}
              height={1200}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
