import { notFound } from "next/navigation"
import { getDocument } from "@/lib/markdown"
import { Settings } from "@/lib/meta"
import { PageRoutes } from "@/lib/pageroutes"
import { Separator } from "@/components/ui/separator"
import { Typography } from "@/components/ui/typography"
import { BackToTop } from "@/components/navigation/backtotop"
import PageBreadcrumb from "@/components/navigation/pagebreadcrumb"
import Pagination from "@/components/navigation/pagination"
import Toc from "@/components/navigation/toc"
import ContactForm from "@/components/ui/sections/form"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export default async function Pages({ params }: PageProps) {
  const { slug = [] } = await params
  const pathName = slug.join("/")
  const res = await getDocument(pathName)
  if (!res) notFound()

  const { frontmatter, content, tocs } = res

  function Timeline() {
    return (
      <div className="mt-2 inline-flex flex-row flex-wrap items-center gap-2 !text-[16px] md:!text-xl">
        {frontmatter.timeline && (
          <span className="w-fit font-medium text-muted">
            {frontmatter.timeline}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="flex justify-center lg:justify-between gap-6">
      <section className="flex-[3] pt-4 md:px-12">
        <PageBreadcrumb paths={slug} />
        <Separator />
        <Typography className="mt-4">
          {(frontmatter.timeline || frontmatter.tags) && <Timeline/>}
          <h1 className="!mb-2 pt-2 md:pt-5 !text-4xl md:!text-6xl !font-semibold">{frontmatter.title}</h1>
          <p className="text-xl md:text-2xl leading-relaxed !text-primary/75">{frontmatter.description}</p>
          <Separator className="my-6" />
          <section
            className="mobile-toc mb-4 overflow-hidden xl:hidden [&>*]:box-border [&>*]:max-h-75"
            aria-label="Table of contents"
          >
            {Settings.toc && <Toc tocs={tocs} />}
          </section>
          <section>{content}</section>
        </Typography>
        <ContactForm />
        <Pagination pathname={pathName} />
      </section>
      <BackToTop className=" bg-nav-noise text-primary fixed right-4 bottom-4 z-40 mt-6 self-start rounded-full p-3 text-md shadow-lg backdrop-blur-lg xl:hidden" />
      {Settings.rightbar && (
        <aside
          className="toc sticky top-16 hidden h-[94.5vh] w-[230px] gap-3 py-8 xl:flex xl:flex-col"
          aria-label="Table of contents"
        >
          {Settings.toc && <Toc tocs={tocs} />}
          {Settings.totop && (
            <BackToTop className="mt-6 self-start self rounded-full border p-3 text-md bg-nav-noise" />
          )}
        </aside>
      )}
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params
  const pathName = slug.join("/")
  const res = await getDocument(pathName)

  if (!res) return null

  const { frontmatter, lastUpdated } = res

  return {
    title: `${frontmatter.title} - ${Settings.title}`,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    ...(lastUpdated && {
      lastModified: new Date(lastUpdated).toISOString(),
    }),
  }
}

export function generateStaticParams() {
  return PageRoutes.filter((item) => item.href).map((item) => ({
    slug: item.href.split("/").slice(1),
  }))
}
