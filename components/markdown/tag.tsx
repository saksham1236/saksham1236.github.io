export default function Tag({ children }: React.PropsWithChildren) {
  return (
    <span className="tag bg-sheet-primary text-md !text-primary mr-2 mb-2 inline-flex h-12 flex-row items-center gap-1.5 rounded-xl px-3 font-semibold">
      {children}
    </span>
  )
}
