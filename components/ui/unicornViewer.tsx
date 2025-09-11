import UnicornScene from "unicornstudio-react"

export default function UnicornView() {
    return (
      <UnicornScene
        jsonFilePath="/images/scene/sceneHero.json"
        width="100%"
        height="100%"
        scale={1}
        dpi={1.5}
        className="contain-paint"
      />
    )
}

export function UnicornContact() {
    return (
      <UnicornScene
        jsonFilePath="/images/scene/sceneContact.json"
        width="100%"
        height="100%"
        scale={0.75}
        dpi={2}
        className="contain-paint"
      />
    )
}


