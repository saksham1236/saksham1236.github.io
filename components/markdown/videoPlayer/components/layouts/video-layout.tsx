"use client"

import * as Tooltip from "@radix-ui/react-tooltip"
import { Controls } from "@vidstack/react"

import * as Buttons from "../buttons"
import * as Sliders from "../sliders"
import { TimeGroup } from "../time-group"

// Offset tooltips/menus/slider previews in the lower controls group so they're clearly visible.
const popupOffset = 30

export default function VideoLayout() {
  return (
    <div>
      <Controls.Root className="media-controls-layer absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent transition-opacity">
        <Tooltip.Provider>
          <div className="flex-1" />
          <Controls.Group className="-mt-0.5 flex w-full items-center gap-1 px-2 pb-2">
            <div className="bg-sheet-primary flex h-12 rounded-full p-1 shadow-lg backdrop-blur-lg">
              <div className="play">
                <Buttons.Play
                  tooltipAlign="start"
                  tooltipOffset={popupOffset}
                />
              </div>
              <div className="flex items-center justify-center pr-3">
                <TimeGroup />
              </div>
            </div>
            <div className="volume bg-sheet-primary flex rounded-full p-1 shadow-md backdrop-blur-lg">
              <Buttons.Mute tooltipOffset={popupOffset} />
              {/* <div className='w-24 vol-hover:w-56 transition-all'><Sliders.Volume /></div> */}
            </div>
            <div className="slider bg-sheet-primary flex w-full rounded-full px-5 py-1.5 shadow-md backdrop-blur-lg">
              <Sliders.Time />
            </div>
            <div className="flex-1" />
            <div className="bg-sheet-primary flex rounded-full p-1 shadow-md backdrop-blur-lg">
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

// function Gestures() {
//   return (
//     <>
//       <Gesture
//         className="absolute inset-0 z-0 block h-full w-full"
//         event="pointerup"
//         action="toggle:paused"
//       />
//       <Gesture
//         className="absolute inset-0 z-0 block h-full w-full"
//         event="dblpointerup"
//         action="toggle:fullscreen"
//       />
//       <Gesture
//         className="absolute top-0 left-0 z-10 block h-full w-1/5"
//         event="dblpointerup"
//         action="seek:-10"
//       />
//       <Gesture
//         className="absolute top-0 right-0 z-10 block h-full w-1/5"
//         event="dblpointerup"
//         action="seek:10"
//       />
//     </>
//   )
// }
