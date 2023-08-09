import Image from "next/image"
import sadCat from "../assets/sad-cat.png"

function Page404() {
  return (
    <div className="bg-[#e3e1dc] w-full h-screen flex flex-col gap-10 lg:gap-3 justify-center items-center">
        <p className="text-5xl font-bold text-center">404 - meow not found</p>
        <Image src={sadCat} alt="" width={150} />
    </div>
  )
}

export default Page404