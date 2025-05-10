export default function Tag({ children }: React.PropsWithChildren) {
    return (
        <span className="tag h-12 inline-flex flex-row items-center gap-1.5 rounded-xl bg-sheet-primary px-3 mr-2 mb-2 text-md font-semibold !text-primary">
            {children}
        </span>
    )
}