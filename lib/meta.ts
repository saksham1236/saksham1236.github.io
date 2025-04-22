import {
  branding,
  companylink,
  companyname,
  description,
  feedbackedit,
  gtm,
  gtmconnected,
  imagealt,
  keywords,
  loadfromgithub,
  rightsidebar,
  siteicon,
  sitename,
  tableofcontent,
  totopscroll,
  url,
  urlimage,
} from "@/settings/settings"

import { OpenGraph } from "@/lib/metadata"

export const Company = {
  name: companyname,
  link: companylink,
  branding: branding,
}

export const Settings = {
  gtm: gtm,
  gtmconnected: gtmconnected,
  rightbar: rightsidebar,
  toc: tableofcontent,
  feedback: feedbackedit,
  totop: totopscroll,
  gitload: loadfromgithub,

  title: sitename,
  metadataBase: url,
  description: description,
  siteicon: siteicon,
  keywords: keywords,
  openGraph: {
    type: "website",
    title: sitename,
    description: description,
    siteName: sitename,
    images: [
      {
        url: urlimage,
        width: 1200,
        height: 630,
        alt: imagealt,
      },
    ],
  } as OpenGraph,
  canonical: url,
}
