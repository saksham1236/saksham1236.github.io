import Image from "next/image"
import { Icon } from "@iconify-icon/react"
import { GiWheat } from "react-icons/gi"

import Pre from "@/components/ui/pre"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardGrid } from "@/components/markdown/card"
import { FileTree } from "@/components/markdown/filetree"
import { File, Folder } from "@/components/markdown/filetree/component"
import { Iframe } from "@/components/markdown/iframe"
import ImageViewer from "@/components/markdown/imageViewer"
import RoutedLink from "@/components/markdown/link"
import Mermaid from "@/components/markdown/mermaid"
import Note from "@/components/markdown/note"
import { Step, StepItem } from "@/components/markdown/step"
import Tag from "@/components/markdown/tag"
import VideoPlayer from "@/components/markdown/videoPlayer/videoPlayer"
import ContactForm from "@/components/ui/sections/form"

export const components = {
  a: RoutedLink,
  Card,
  CardGrid,
  FileTree,
  Folder,
  File,
  Mermaid,
  Note,
  pre: Pre,
  Step,
  StepItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  ImageViewer,
  Image,
  Icon,
  Iframe,
  VideoPlayer,
  GiWheat,
}
