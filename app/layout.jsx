import { GoogleTagManager } from "@next/third-parties/google";
import { Settings } from "@/lib/meta";
import { Footer } from "@/components/navigation/footer";
import { Navbar } from "@/components/navigation/navbar";
import { Providers } from "@/components/providers";
import "@/styles/globals.css";
const baseUrl = Settings.metadataBase;
export const metadata = {
    title: Settings.title,
    metadataBase: new URL(baseUrl),
    description: Settings.description,
    keywords: Settings.keywords,
    openGraph: {
        type: Settings.openGraph.type,
        url: baseUrl,
        title: Settings.openGraph.title,
        description: Settings.openGraph.description,
        siteName: Settings.openGraph.siteName,
        images: Settings.openGraph.images.map((image) => (Object.assign(Object.assign({}, image), { url: `${baseUrl}${image.url}` }))),
    },
    alternates: {
        canonical: baseUrl,
    },
};
export default function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      {Settings.gtmconnected && <GoogleTagManager gtmId={Settings.gtm}/>}
      <body className="bg-background transition-gpu transition-colors duration-500 ease-in-out">
        <Providers>
          <Navbar />
          <main className="mx-auto h-auto max-w-400 px-5 sm:px-6">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>);
}
