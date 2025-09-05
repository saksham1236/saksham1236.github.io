import {Player} from "@lottiefiles/react-lottie-player"
export default function LottiePlayer({className}:{className:string}) {
    return(
        <Player className={className} autoplay loop src = "/images/lottie/uxDesign.json"/>
    )
}