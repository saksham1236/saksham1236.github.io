import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function LottiePlayer({ className }) {
    return (<DotLottieReact className={className} autoplay loop src="/images/lottie/uxDesign.json"/>);
}
