import Link from 'next/link';
import CatImagesGrid from "./CatImagesGrid"


function HomeSecondSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 gap-10">
            <div className="md:mt-[15vh]">
                <div className="w-[67px] h-[3px] border-full bg-[#4d270c] rounded-full" />
                <p className="text-5xl font-bold my-5">Why should you have a cat?</p>
                <p className="text-lg font-medium my-10">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leve</p>
                <p className="text-lg font-bold text-[#29150799] hover:text-[#291507] w-fit cursor-pointer transit duration-200">
                    <Link href="https://www.berkeleyvetcenter.com/blog/meow-benefits-of-owning-a-cat/" target="_blank" className="w-fit">
                        READ MORE →
                    </Link>
                </p>
            </div>

            <CatImagesGrid />
        </div>
    )
}

export default HomeSecondSection