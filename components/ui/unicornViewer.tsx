import { useTheme } from "next-themes"
import UnicornScene from "unicornstudio-react"

export default function UnicornView() {
  let theme: string | undefined = "dark";
  theme = useTheme().theme;
  if (theme === "light") {
    return (
      <UnicornScene
        jsonFilePath="/images/scene/sceneDark.json"
        width="100%"
        height="100%"
        scale={0.75}
        dpi={2}
        className="contain-paint"
      />
    )
  } else {
    return (
      <UnicornScene
        jsonFilePath="/images/scene/sceneLight.json"
        width="100%"
        height="100%"
        scale={0.75}
        dpi={2}
        className="contain-paint"
      />
    )
  }
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


