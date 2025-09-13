import Image from "next/image";
import { iconMap } from "@/settings/icons";
import clsx from "clsx";
import { Link } from "lib/transition";
import { Button } from "../ui/button";
import { LineMdArrowRight, LineMdMinus } from "../ui/icons/icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
export function Card({ subtitle, title, description, href, image, className, external = false, icon, variant = "normal", children, cta, ctaContent, tags, imgClassName, linkClassName, titleHidden, }) {
    const IconComponent = icon ? iconMap[icon] : icon;
    const content = (<div className={clsx("card-grp fade-in group relative flex gap-4 justify-start contain-paint rounded-[48px] !transition duration-300 bg-white ease-in-out hover:bg-hover-b dark:bg-black dark:hover:bg-hover-b", variant === "small"
            ? "items-center space-x-2 p-4"
            : variant === "image"
                ? "h-full flex-col p-6"
                : "h-full flex-col p-6", className)}>
      {image && variant === "image" && (<Image src={image} alt={title} width={400} height={400} className={clsx("!m-0 w-full aspect-3/2 rounded-4xl object-cover object-center border-1", imgClassName)}/>)}
      <div className={cn("flex flex-col flex-grow gap-4", image ? "" : "pt-2")}>
        <div className="flex flex-col gap-2">
          {subtitle && (variant === "normal" || variant === "image") && (<span className={cn("flex flex-row !text-md lg:!text-lg font-bold text-muted items-center gap-2")}>
              {subtitle}
              {IconComponent && (<IconComponent />)}
            </span>)}
          {tags && (<div className="tags flex flex-wrap gap-1 py-1">
              {tags === null || tags === void 0 ? void 0 : tags.map((tag, index) => (<Badge key={index} className={tag}>
                  {tag}
                </Badge>))}
            </div>)}
          <div className={clsx("font-bold transition-all duration-300 text-primary", variant === "small"
            ? "text-lg"
            : variant === "image"
                ? "text-3xl"
                : "text-3xl", image ? "" : "pt-2")}>
            {!titleHidden && title}
          </div>
        </div>
        {description && (variant === "normal" || variant === "image") && (<p className="!m-0 text-lg font-normal opacity-85">
            {description}
          </p>)}
      </div>
      {children}
      {cta && (<Button className="w-full lg:w-fit cursor-pointer" variant="default">
          {ctaContent ? ctaContent : "View Project"}
          <div className="relative flex flex-row size-6 overflow-clip">
            <LineMdMinus className="absolute size-6 left-[0%] group-hover:left-[100%] transition-all duration-200 ease-in-out"/>
            <LineMdArrowRight className="absolute size-6 left-[-100%] group-hover:left-[0%] transition-all duration-200 ease-in-out"/>
          </div>
        </Button>)}
    </div>);
    return href ? (<Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={clsx("!no-underline", linkClassName)}>
      {content}
    </Link>) : (content);
}
export function CardGrid({ children, className }) {
    return (<div className={clsx("grid grid-cols-1 justify-center gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {children}
    </div>);
}
