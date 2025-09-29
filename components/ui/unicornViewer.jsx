import UnicornScene from "unicornstudio-react";
export default function UnicornView() {
    return (<>
      <UnicornScene lazyLoad={true} jsonFilePath="/images/scene/sceneHero.json" width="100%" height="100%" scale={0.75} dpi={1.5} fps={24} className="hidden min-[2000px]:block contain-paint"/>
      <UnicornScene lazyLoad={true} jsonFilePath="/images/scene/sceneHero.json" width="100%" height="100%" scale={1} dpi={1.5} fps={24} className="block min-[2000px]:hidden contain-paint"/>
    </>);
}
export function UnicornContact() {
    return (<UnicornScene lazyLoad={true} jsonFilePath="/images/scene/sceneContact.json" width="100%" height="100%" scale={1} dpi={1.5} className="contain-paint"/>);
}
