import Image from "next/image"
import CatWikiIcon from "../assets/CatwikiLogo.svg"
import { useRouter } from 'next/router';


function Header({ goHome }: { goHome?: boolean }) {
    const router = useRouter()
    const homeButtonStyle = "cursor-pointer transition-color duration-200"

    return (
        <div className="p-2">
            {goHome ?
                <Image src={CatWikiIcon} alt="CatWiki Icon" className={homeButtonStyle} priority onClick={() => router.push("/")} />
                :
                <Image src={CatWikiIcon} alt="CatWiki Icon" priority onClick={() => router.push("/")} />
            }
        </div>
    )
}

export default Header