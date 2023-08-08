
function StatsBar({ value, ...props }: { value: number }) {
    return (
        <div className="flex items-center gap-2" {...props}>
            <div className={`rounded-full w-[60px] h-[16px] ${Math.round(value) >= 1 ? "bg-[#544439]" : "bg-[#e0e0e0]"}`} />
            <div className={`rounded-full w-[60px] h-[16px] ${Math.round(value) >= 2 ? "bg-[#544439]" : "bg-[#e0e0e0]"}`} />
            <div className={`rounded-full w-[60px] h-[16px] ${Math.round(value) >= 3 ? "bg-[#544439]" : "bg-[#e0e0e0]"}`} />
            <div className={`rounded-full w-[60px] h-[16px] ${Math.round(value) >= 4 ? "bg-[#544439]" : "bg-[#e0e0e0]"}`} />
            <div className={`rounded-full w-[60px] h-[16px] ${Math.round(value) >= 5 ? "bg-[#544439]" : "bg-[#e0e0e0]"}`} />            
        </div>
    )
}

export default StatsBar