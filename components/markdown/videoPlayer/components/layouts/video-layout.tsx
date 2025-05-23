"use client"

import * as Tooltip from "@radix-ui/react-tooltip"
import { Controls, Gesture } from "@vidstack/react"

import * as Buttons from "../buttons"
// import * as Sliders from "../sliders"
import { TimeGroup } from "../time-group"
import { VideoTitle } from "../title"

// Offset tooltips/menus/slider previews in the lower controls group so they're clearly visible.
const popupOffset = 30

export default function VideoLayout() {
  return (
    <div>
      <Gestures />
      <Controls.Root className="media-controls-layer !text-primary-foreground absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent transition-opacity">
        <Tooltip.Provider>
          <Controls.Group className="text-md absolute z-10 top-4 left-4 items-center justify-center py-1.5 px-3 bg-primary/60 flex rounded-full shadow-md backdrop-blur-lg">
            <VideoTitle />
          </Controls.Group>
          <div className="flex-1" />
          <Controls.Group className="-mt-0.5 flex w-full items-center justify-center gap-1 px-4 pb-4">
            <div className="bg-primary/60 flex h-10 rounded-full shadow-lg backdrop-blur-lg">
              <div className="play items-center justify-center">
                <Buttons.Play
                  tooltipAlign="start"
                  tooltipOffset={popupOffset}
                />
              </div>
              <div className="flex w-[92px] items-center justify-center p-3 ">
                <TimeGroup />
              </div>
            </div>
            <div className="volume bg-primary/60 flex rounded-full shadow-md backdrop-blur-lg">
              <Buttons.Mute tooltipOffset={popupOffset} />
              {/* <div className='w-24 vol-hover:w-56 transition-all'><Sliders.Volume /></div> */}
            </div>
            {/* <div className="slider bg-sheet-primary flex w-full rounded-full px-5 py-1.5 shadow-md backdrop-blur-lg">
              <Sliders.Time />
            </div> */}
            <div className="flex-1" />
            <div className="bg-primary/60 flex rounded-full shadow-md backdrop-blur-lg">
              <Buttons.Fullscreen
                tooltipAlign="end"
                tooltipOffset={popupOffset}
              />
            </div>
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Root>
    </div>
  )
}

function Gestures() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute top-0 left-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute top-0 right-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  )
}
