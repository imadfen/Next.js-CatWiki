import Image from "next/image"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

interface catsObjType {
    name: string,
    description: string,
    imageSrc: string
}

function Cats() {
    const catsList: catsObjType[] = [
        { name: "Bengal", description: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.", imageSrc: "https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" },
        { name: "Chartreux", description: "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.", imageSrc: "https://cdn2.thecatapi.com/images/iY76694gN.jpg" },
        { name: "Khao Manee", description: "The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.", imageSrc: "https://cdn2.thecatapi.com/images/iyFN2mF8l.jpg" },
    ]

    return (
        <div className="px-4 sm:px-14 md:px-20 min-h-screen flex flex-col">
            <Header goHome />

            <div className="flex-grow">
                <p className="text-4xl font-bold my-5">Top 10 most searched breeds</p>

                <div className="py-10 flex flex-col">
                    {catsList.map((cat, i) => {
                        return (
                            <div className="flex gap-10 mb-10">
                                <div className="relative min-w-[170px] min-h-[170px] rounded-3xl overflow-hidden">
                                    <Image src={cat.imageSrc} alt="" layout="fill" objectFit="cover" className="absolute top-0 left-0" />
                                </div>

                                <div>
                                    <p className="text-4xl font-semibold">{`${i + 1}. ${cat.name}`}</p>
                                    <p className="text-lg font-medium">{cat.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <Footer goHome />
        </div>
    )
}

export default Cats