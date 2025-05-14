"use client"

import { useState } from "react"
import Image from "next/image"
import { FiXCircle } from "react-icons/fi";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

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
            onContextMenu={(e) => {
              e.preventDefault()
            }}
          />
        </DialogTrigger>

        {/* Dialog content */}
        <DialogContent className="w-88vh flex touch-auto items-center justify-center overflow-y-auto p-0">
          {/* Accessible title */}
          <DialogTitle className="sr-only">{altText}</DialogTitle>
          <div className="justify-top max-h-screen w-fit overflow-auto">
            <Image
              src={imageUrl}
              alt={altText}
              className="w-full overflow-y-auto rounded-md"
              width={1200}
              height={1200}
              onContextMenu={(e) => {
                e.preventDefault()
              }}
            />
          </div>
          <DialogClose className="absolute top-4 right-4 rounded-full bg-primary p-1 focus:outline-none">
            <span className="sr-only">Close</span>
            <FiXCircle className="h-6 w-6 text-primary-foreground" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}
