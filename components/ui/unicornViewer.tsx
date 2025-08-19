import UnicornScene from "unicornstudio-react";
import { useTheme } from "next-themes"
export default function UnicornView() {
    const { theme, setTheme } = useTheme()
    if (theme === "dark") {
        return (
            <UnicornScene
                jsonFilePath="/images/scene/sceneLight.json"
                width="100%"
                height="100%"
                scale={0.8}
                dpi={2}
            />
        );
    } else {
        return (
            <UnicornScene
                jsonFilePath="/images/scene/sceneDark.json"
                width="100%"
                height="100%"
                scale={0.8}
                dpi={2}
            />
        );
    }
}