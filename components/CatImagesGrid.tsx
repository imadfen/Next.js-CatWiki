import Image from "next/image"
import image1 from "../assets/image 1.png"
import image2 from "../assets/image 2.png"
import image3 from "../assets/image 3.png"


function CatImagesGrid() {
    return (
        <div className="grid grid-cols-5 grid-rows-3 gap-2 lg:gap-7">
            <div className="overflow-hidden rounded-3xl col-start-1 col-end-4 row-start-1 row-end-2 w-ful h-full justify-self-end">
                <Image src={image2} alt="" />
            </div>

            <div className="overflow-hidden rounded-3xl col-start-4 col-end-6 row-start-1 row-end-3 h-full">
                <Image src={image3} alt="" />
            </div>

            <div className="overflow-hidden rounded-3xl col-start-2 col-end-4 row-start-2 row-end-4 w-ful h-full justify-self-end">
                <Image src={image1} alt="" />
            </div>
        </div>
    )
}

export default CatImagesGrid