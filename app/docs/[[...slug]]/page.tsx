import { notFound } from "next/navigation"

import { getDocument } from "@/lib/markdown"
import { Settings } from "@/lib/meta"
import { PageRoutes } from "@/lib/pageroutes"
import { Separator } from "@/components/ui/separator"
import { Typography } from "@/components/ui/typography"
import { BackToTop } from "@/components/navigation/backtotop"
import Feedback from "@/components/navigation/feedback"
import PageBreadcrumb from "@/components/navigation/pagebreadcrumb"
import Pagination from "@/components/navigation/pagination"
import Toc from "@/components/navigation/toc"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export default async function Pages({ params }: PageProps) {
  const { slug = [] } = await params
  const pathName = slug.join("/")
  const res = await getDocument(pathName)

  if (!res) notFound()

  const { frontmatter, content, tocs } = res

  return (
    <div className="flex justify-between gap-14">
      <section className="flex-[3] pt-10" >
        <PageBreadcrumb paths={slug} />
        <Typography>
          <h1 className="!mb-2 text-3xl !font-semibold">{frontmatter.title}</h1>
          <p className="-mt-4 text-sm">{frontmatter.description}</p>
          <Separator className="my-6" />
          <section className = "mobile-toc xl:hidden overflow-hidden [&>*]:max-h-75 [&>*]:box-border" aria-label="Table of contents">{Settings.toc && <Toc tocs={tocs} />}</section>
          <section>{content}</section>
          <Pagination pathname={pathName} />
        </Typography>
      </section>
      <BackToTop className="xl:hidden bg-primary/60 backdrop-blur-lg shadow-lg fixed bottom-4 right-4 z-40 mt-6 self-start rounded-full p-3 text-sm text-primary-foreground" />
      {Settings.rightbar && (
        <aside
          className="toc sticky top-16 hidden h-[94.5vh] w-[230px] gap-3 py-8 xl:flex xl:flex-col"
          aria-label="Table of contents"
        >
          {Settings.toc && <Toc tocs={tocs} />}
          {Settings.feedback && <Feedback />}
          {Settings.totop && (
            <BackToTop className="mt-6 self-start rounded-full border p-3 text-sm text-neutral-800 dark:text-neutral-300/85" />
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
