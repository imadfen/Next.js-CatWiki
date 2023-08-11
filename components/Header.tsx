import Image from "next/image"
import CatWikiIcon from "../assets/CatwikiLogo.svg"
import { useRouter } from 'next/router';


function Header({ onGoHome }: { onGoHome?: () => void }) {
    const router = useRouter()
    const homeButtonStyle = "cursor-pointer transition-color duration-200"

    const handleGoHome = () => {
        router.push("/")
        onGoHome()
    }

    return (
        <div className="p-2">
            {onGoHome ?
                <Image src={CatWikiIcon} alt="CatWiki Icon" className={homeButtonStyle} priority onClick={handleGoHome} />
                :
                <Image src={CatWikiIcon} alt="CatWiki Icon" priority onClick={() => router.push("/")} />
            }
        </div>
    )
}

export default Header