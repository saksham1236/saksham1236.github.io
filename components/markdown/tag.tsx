export default function Tag({ children }: React.PropsWithChildren<{}>) {
    return (
        <span className="tag h-16 inline-flex flex-row items-center gap-1 rounded-xl bg-sheet-primary px-2 py-1 mr-2 mb-2 text-lg font-semibold !text-primary">
            {children}
        </span>
    )
}