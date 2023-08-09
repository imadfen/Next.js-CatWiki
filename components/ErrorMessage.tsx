import DangerIcon from "./SVG Components/DangerIcon"

function ErrorMessage({ reload }: { reload: () => void }) {
    return (
        <div className="w-full h-full flex-grow flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <DangerIcon fill="#291507" />
                <p className="text-lg font-bold">Error Loading Data</p>
            </div>

            <button className="rounded-xl outline-none bg-[#e3e1dc] px-4 py-2 hover:scale-105 hover:bg-[#bbb9b5] transition-all duration-200 active:scale-95" onClick={reload}>
                Retry
            </button>
        </div>
    )
}

export default ErrorMessage