import Image from "next/image"
import { useRouter } from 'next/router';
import CatWikiIcon from "../assets/CatwikiLogo.svg"


function Footer({ goHome }: { goHome?: boolean }) {
    const router = useRouter()
    const homeButtonStyle = "cursor-pointer transition-color duration-200"

    const handleGoHome = () => {
        router.push("/")
    }

    return (
        <div className="bg-black w-full rounded-tl-3xl rounded-tr-3xl min-h-[100px] flex flex-col md:flex-row md:items-center mt-auto px-8 py-3">
            <div className="flex-grow md:ml-28">
                {goHome ?
                    <Image src={CatWikiIcon} alt="CatWiki Icon" className={`w-1/11 invert contrast-[150%] ${homeButtonStyle}`} priority onClick={handleGoHome} />
                    :
                    <Image src={CatWikiIcon} alt="CatWiki Icon" className="w-1/11 invert contrast-[150%]" priority />
                }
            </div>

            <p className="text-white md:mr-10 text-sm sm:text-base">© created by <a href="https://github.com/imadfen" className="font-semibold">imadfen</a> - devChallenge.io 2023</p>
        </div>
    )
}

export default Footer