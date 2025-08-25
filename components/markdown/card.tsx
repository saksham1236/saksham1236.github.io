import { PropsWithChildren } from "react"
import Image from "next/image"
import { iconMap } from "@/settings/icons"
import clsx from "clsx"
import { Link } from "lib/transition"
import { Button } from "../ui/button"
import { LineMdArrowRight, LineMdMinus } from "../ui/icons/icons"
import { Badge } from "@/components/ui/badge"

type CardProps = PropsWithChildren & {
  subtitle?: string
  title: string
  description?: string
  href?: string
  image?: string
  className?: string
  external?: boolean
  icon?: keyof typeof iconMap
  variant?: "normal" | "small" | "image" | "bg"
  cta?: boolean
  ctaContent?: string
  tags?: Array<string>
  imgClassName?: string
  linkClassName?: string
  titleHidden?: boolean
}

type CardGridProps = PropsWithChildren & {
  className?: string
}

export function Card({
  subtitle,
  title,
  description,
  href,
  image,
  className,
  external = false,
  icon,
  variant = "normal",
  children,
  cta,
  ctaContent,
  tags,
  imgClassName,
  linkClassName,
  titleHidden,
}: CardProps) {
  const IconComponent = icon ? iconMap[icon] : null
  const ExternalIcon = iconMap["arrowUpRight"]

  const content = (
    <div
      className={clsx(
        "card-grp group relative flex justify-start overflow-hidden rounded-[48px] border-2 border-gray-300 bg-neutral-50 !transition transition-shadow duration-300 ease-in-out hover:scale-103 hover:bg-slate-200 dark:border-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        variant === "small"
          ? "items-center space-x-2 p-3"
          : variant === "image"
            ? "h-full flex-col p-4"
            : "h-full flex-col p-4",
        className
      )}
    >
      {image && variant === "image" && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className={clsx(
            "!m-0 !mb-2 h-[180px] w-full rounded-4xl !border-2 object-cover object-center",
            imgClassName
          )}
        />
      )}
      {external && href && variant !== "image" && (
        <div
          className={clsx(
            "absolute top-2 transform text-gray-500 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white",
            variant === "small" ? "right-0" : "right-2"
          )}
        >
          <ExternalIcon className="h-4 w-4" />
        </div>
      )}
      {IconComponent && (
        <IconComponent className="text-gray-500 dark:text-gray-300" />
      )}

      <div>
        {subtitle && (variant === "normal" || variant === "image") && (
          <p className="!my-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
        <div
          className={clsx(
            "font-semibold transition-all duration-300 group-hover:font-bold",
            variant === "small"
              ? "text-sm"
              : variant === "image"
                ? "text-lg"
                : "text-lg"
          )}
        >
          {!titleHidden && title}
        </div>
        <div className="tags flex flex-wrap gap-1 py-1">
          {tags &&
            tags?.map((tag, index) => (
              <Badge key={index} className={tag}>
                {tag}
              </Badge>
            ))}
        </div>
        {description && (variant === "normal" || variant === "image") && (
          <p className="!my-2 text-sm font-normal text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      {children}
        {cta && (
            <Button className="w-full lg:w-fit group cursor-pointer" variant="default">
              {ctaContent ? ctaContent: "View Project"}
              <div className="relative flex flex-row size-6 overflow-clip">
                <LineMdMinus className="absolute size-6 left-[0%] group-hover:left-[100%] transition-all duration-200 ease-in-out" />
                <LineMdArrowRight className="absolute size-6 left-[-100%] group-hover:left-[0%] transition-all duration-200 ease-in-out" />
              </div>
            </Button>
        )}
    </div>
  )

  return href ? (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={clsx("!no-underline", linkClassName)}
    >
      {content}
    </Link>
  ) : (
    content
  )
}

export function CardGrid({ children, className }: CardGridProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 justify-center gap-6 md:grid-cols-2 xl:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}
