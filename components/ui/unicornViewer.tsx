"use client"

import React, { useEffect, useState } from "react"
import UnicornScene from "unicornstudio-react"

export default function UnicornView() {
  // Use Tailwind responsive utilities to show the appropriate scene
  // Desktop scene is hidden below `lg` and shown at `lg` and up.
  // Mobile scene is shown below `lg` and hidden at `lg` and up.
  // Both scenes use `lazyLoad` so the renderer shouldn't fetch the JSON until visible.
  return (
    <>
      <UnicornScene
        lazyLoad={true}
        jsonFilePath="/images/scene/sceneHero.json"
        width="100%"
        height="100%"
        scale={0.75}
        dpi={1.5}
        fps={24}
        className="hidden min-[2000px]:block contain-paint"
      />
      <UnicornScene
        lazyLoad={true}
        jsonFilePath="/images/scene/sceneHero.json"
        width="100%"
        height="100%"
        scale={1}
        dpi={1.5}
        fps={24}
        className="block min-[2000px]:hidden contain-paint"
      />
    </>
  )
}

export function UnicornContact() {
  return (
    <UnicornScene
      lazyLoad={true}
      jsonFilePath="/images/scene/sceneContact.json"
      width="100%"
      height="100%"
      scale={1}
      dpi={1.5}
      className="contain-paint"
    />
  )
}


