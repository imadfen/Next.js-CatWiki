import Head from "next/head"
import Image from "next/image"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useEffect, useState } from "react"
import LoadingSpinner from "../../components/LoadingSpinner"
import { useRouter } from "next/router"
import ErrorMessage from "../../components/ErrorMessage"
import fetchTopBreeds from "../../utils/fetchTopBreeds"

interface catsObjType {
    order: number,
    cat: {
        id: string,
        name: string,
        description: string,
        image?: string
    }
}

function Cats() {
    const [topCatsList, setTopCatsList] = useState<catsObjType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorFetch, setErrorFetch] = useState(false)
    const router = useRouter()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setIsLoading(true)
        setErrorFetch(false)

        fetchTopBreeds()
            .then(data => {
                setTopCatsList(data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                setErrorFetch(true)
                console.log(err.message);
            })
    }

    const goToCat = (id: string) => {
        router.push("/cats/" + id)
    }

    return (
        <div className="px-4 sm:px-14 md:px-20 min-h-screen flex flex-col">
            <Head>
                <title>Top 10 Breeds | CatWiki</title>
            </Head>

            <Header goHome />
            <div className="flex-grow flex flex-col">
                <p className="text-4xl font-bold my-5">Top 10 most searched breeds</p>

                <div className="py-10 flex flex-col flex-grow">
                    {isLoading ? <LoadingSpinner color="#291507" />
                        :
                        errorFetch ? <ErrorMessage reload={fetchData} />
                            :
                            topCatsList.map((elem, i) => {
                                const cat = elem.cat
                                return (
                                    <div key={i} className="flex flex-col-reverse md:flex-row gap-10 mb-10">
                                        <div className="relative min-w-[170px] aspect-square md:h-[170px] rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => goToCat(cat.id)}>
                                            <Image src={cat.image} alt="" layout="fill" objectFit="cover" className="absolute top-0 left-0" />
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