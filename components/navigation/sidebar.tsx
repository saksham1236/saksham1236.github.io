import { LuAlignLeft } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavMenu, SocialLinks } from "@/components/navigation/navbar"
import PageMenu from "@/components/navigation/pagemenu"

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
          className="bg-primary-foreground bg-nav-noise flex size-14 cursor-pointer md:hidden"
        >
          <LuAlignLeft className="!size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-nav-noise flex flex-col justify-between gap-0 px-0 pt-3"
        side="right"
      >
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <ScrollArea className="flex flex-col gap-4">
          <div className="bg-accent-foreground/20 mx-4 mt-12 flex flex-col gap-2.5 rounded-4xl p-4">
            <NavMenu isSheet />
          </div>
        </ScrollArea>
        <div className="bg-accent-foreground/20 mr-4 mb-4 ml-auto flex w-fit flex-col items-end rounded-full p-4">
          <SocialLinks />
        </div>
      </SheetContent>
    </Sheet>
  )
}
