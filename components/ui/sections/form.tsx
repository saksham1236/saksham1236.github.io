import { Button } from '../atoms/button'
import { Emoji } from '../icons/icons'
export default function ContactForm() {
    return (
        <div className="flex flex-col gap-6 form contain-paint">
            <h2 className="flex items-center gap-4 text-muted text-3xl font-medium md:text-5xl">Contact Me<Emoji className="size-12 lg:size-18" emoji="📞" /></h2>
            <Button>Linkedin</Button>
            <Button>Behance</Button>
             <Button>Github</Button>
        </div>
    )
}