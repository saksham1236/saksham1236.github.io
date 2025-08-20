"use client"

import { useState } from "react"
import Image from "next/image"
import { FiMaximize2, FiX } from "react-icons/fi"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
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
          <div className="group relative cursor-pointer transition-opacity duration-200 hover:opacity-80">
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
            <button className="bg-primary/70 animate-in fade-in absolute right-4 bottom-4 rounded-full p-2 shadow-lg backdrop-blur-lg focus:outline-none">
              <span className="sr-only">Open image</span>
              <FiMaximize2 className="text-primary-foreground h-6 w-6" />
            </button>
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
          <button>
            <DialogClose className="bg-primary/70 animate-in fade-in absolute top-4 right-4 cursor-pointer rounded-full p-1 shadow-lg backdrop-blur-lg focus:outline-none">
              <span className="sr-only">Close</span>
              <FiX className="text-primary-foreground h-6 w-6" />
            </DialogClose>
          </button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
