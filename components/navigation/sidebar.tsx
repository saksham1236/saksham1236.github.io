import { LuAlignLeft } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import { DialogClose, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavMenu } from "@/components/navigation/navbar"
import PageMenu from "@/components/navigation/pagemenu"
import { SocialLinks } from "@/components/navigation/navbar"
export function Sidebar() {
  return (
    <aside
      className="sticky top-16 hidden h-[94.5vh] min-w-[230px] flex-[1] flex-col overflow-y-auto md:flex"
      aria-label="Page navigation"
    >
      <ScrollArea className="py-4">
        <PageMenu />
      </ScrollArea>
    </aside>
  )
}

export function SheetLeft() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex cursor-pointer md:hidden bg-primary-foreground size-14 bg-nav-noise"
        >
          <LuAlignLeft className="!size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-0 px-0 bg-nav-noise pt-3 justify-between" side="right">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <ScrollArea className="flex flex-col gap-4">
          <div className="mx-4 rounded-4xl flex flex-col gap-2.5 p-4 mt-12 bg-accent-foreground/20">
            <NavMenu isSheet />
          </div>
          <div className="mx-0 px-5">
            <PageMenu isSheet />
          </div>
        </ScrollArea>
        <div className="ml-auto mr-4 rounded-full flex flex-col items-end mb-4 p-4 bg-accent-foreground/20 w-fit">
          <SocialLinks isSheet />
        </div>
      </SheetContent>
    </Sheet>
  )
}
