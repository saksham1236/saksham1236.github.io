"use client"

import { useState } from "react"
import Image from "next/image"
import { FiX } from "react-icons/fi";
import { FiMaximize2 } from "react-icons/fi";
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
          <div className="group relative hover:opacity-80 cursor-pointer transition-opacity duration-200">
            <Image
              src={imageUrl}
              alt={altText}
              className="w-full rounded-md"
              width={500}
              height={500}
              onContextMenu={(e) => {
                e.preventDefault()
              }}
            />
            <div className="absolute bottom-4 right-4 rounded-full bg-primary/70 backdrop-blur-lg shadow-lg p-2 focus:outline-none animate-in fade-in">
              <span className="sr-only">Open image</span>
              <FiMaximize2 className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </DialogTrigger>

        {/* Dialog content */}
        <DialogContent className="group w-88vh flex touch-auto items-center justify-center overflow-y-auto p-0">
          {/* Accessible title */}
          <DialogTitle className="sr-only">{altText}</DialogTitle>
          <div className="justify-top max-h-[95svh] w-fit overflow-auto">
            <Image
              src={imageUrl}
              alt={altText}
              className="w-full rounded-md"
              width={1200}
              height={1200}
              onContextMenu={(e) => {
                e.preventDefault()
              }}
            />
          </div>
          <DialogClose className="absolute top-4 right-4 rounded-full bg-primary/70 backdrop-blur-lg shadow-lg p-1 cursor-pointer focus:outline-none animate-in fade-in">
            <span className="sr-only">Close</span>
            <FiX className="h-6 w-6 text-primary-foreground" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}
