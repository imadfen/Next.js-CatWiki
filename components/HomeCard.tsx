import Image from "next/image"
import HeroImageLg from "../assets/HeroImagelg.png"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import HeroImageMd from "../assets/HeroImagemd.png"
import HeroImageSm from "../assets/HeroImagesm.png"
import CatWikiIcon from "../assets/CatwikiLogo.svg"
import getScreenSize from "../utils/getScreenSize"
import SearchBar from "./SearchBar"
import SearchIcon from "./SVG Components/SearchIcon"
import SearchDialog from "./SearchDialog"



function HomeCard() {
    const [screenSize, setScreenSize] = useState<"lg" | "md" | "sm">("md")
    const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
    
    const router = useRouter()

    useEffect(() => {
        setScreenSize(getScreenSize())

        const handleResize = () => {
            setScreenSize(getScreenSize())
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="overflow-hidden rounded-[40px] bg-[#E3E1DC] min-w-[340px]">
            <div className="relative">
                <Image src={screenSize == "lg" ? HeroImageLg : screenSize == "md" ? HeroImageMd : HeroImageSm} alt="" />

                <div className="absolute top-0 left-0 z-10 h-full w-full grid grid-cols-2 px-10">
                    <div className="relative w-full h-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center w-2/3">
                            <Image src={CatWikiIcon} alt="CatWiki Icon" className="w-2/3 invert contrast-[150%]" priority />

                            <p className="my-3 font-semibold text-white text-xs sm:text-sm md:text-md lg:text-2xl">Get to know more about your cat breed</p>

                            {/* <SearchBar suggestions={["American Bobtail", "American Curl", "American Shorthair"]} /> */}
                            {screenSize == "lg" ?
                                <SearchBar />
                                :
                                <button className="bg-white flex rounded-full overflow-hidden p-2" onClick={() => setIsSearchDialogOpen(true)}>
                                    <p className="flex-grow text-sm">Search</p>
                                    <SearchIcon className="" fill="#000" />
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-10 lg:px-20 py-5">
                <div>
                    <p className="text-lg font-medium">Most Searched Breeds</p>
                    <div className="w-[60px] h-[3px] bg-[#4d270c] rounded-full"></div>
                </div>

                <div className="flex w-full my-5 md:my-16">
                    <p className="font-bold text-2xl sm:text-3xl md:text-5xl max-w-[537px]">66+ Breeds For you to discover</p>
                    {screenSize == "lg" && <p className="font-bold text-lg ml-auto mt-auto cursor-pointer hover:text-[#8a5b39e1]" onClick={()=>router.push("/cats")}>SEE MORE →</p>}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center w-full mb-5">
                    <div className="hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95">
                        <div className="relative w-[134px] h-[134px] sm:w-[220px] sm:h-[220px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/k71ULYfRr.jpg" alt="Bengal" layout="fill" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <p className="text-sm md:text-lg font-semibold">Bengal</p>
                    </div>

                    <div className="hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95">
                        <div className="relative w-[134px] h-[134px] sm:w-[220px] sm:h-[220px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/k71ULYfRr.jpg" alt="Bengal" layout="fill" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <p className="text-sm md:text-lg font-semibold">Savannah</p>
                    </div>

                    <div className="hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95">
                        <div className="relative w-[134px] h-[134px] sm:w-[220px] sm:h-[220px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/k71ULYfRr.jpg" alt="Bengal" layout="fill" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <p className="text-sm md:text-lg font-semibold">Norwegian Forest Cat</p>
                    </div>

                    <div className="hover:scale-105 transition-transform duration-200 cursor-pointer active:scale-95">
                        <div className="relative w-[134px] h-[134px] sm:w-[220px] sm:h-[220px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/k71ULYfRr.jpg" alt="Bengal" layout="fill" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <p className="text-sm md:text-lg font-semibold">Selkirk Rex</p>
                    </div>
                </div>
            </div>

            <SearchDialog isOpen={screenSize != "lg" && isSearchDialogOpen} onClose={() => setIsSearchDialogOpen(false)} />
        </div>
    )
}

export default HomeCard