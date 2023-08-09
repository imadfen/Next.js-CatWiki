import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import StatsBar from '../../components/StatsBar';
import { useState } from 'react';
import RedirectingScreen from '../../components/RedirectingScreen';

function CatById({ breedData }: any) {
    const [isRedirecting, setIsRedirecting] = useState(false)

    return (
        <div className="px-4 sm:px-14 md:px-20 min-h-screen flex flex-col">

            <Head>
                <title>{breedData.breed.name} - CatWiki</title>
            </Head>

            <Header onGoHome={() => setIsRedirecting(true)} />

            <div className='flex flex-col items-center my-10'>
                <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-24'>
                    <div className="relative min-w-[371px] h-[371px] rounded-3xl overflow-hidden bg-gray-50">
                        <Image src={breedData.breed.image?.url} alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className="text-4xl font-semibold cursor-default">{breedData.breed.name}</div>
                        <div className="text-lg font-medium cursor-default">{breedData.breed.description}</div>
                        <div className="font-medium flex gap-[1ch] cursor-default"><p className="font-bold">Temperament:</p>{breedData.breed.temperament}</div>
                        <div className="font-medium flex gap-[1ch] cursor-default"><p className="font-bold">Origin:</p>{breedData.breed.origin}</div>
                        <div className="font-medium flex gap-[1ch] cursor-default"><p className="font-bold">Life Span:</p>{breedData.breed.life_span} years</div>

                        {/* ========== Stats ========== */}
                        <div className='flex flex-col gap-5'>
                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold col-end-2">Adaptability:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.adaptability} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Affection level:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.affection_level} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Child Friendly:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.child_friendly} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Grooming:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.grooming} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Intelligence:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.intelligence} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Health issues:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.health_issues} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Social needs:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.social_needs} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Stranger friendly:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={breedData.breed.stranger_friendly} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col items-start gap-10 w-full my-20'>
                    <p className="text-4xl font-semibold">Other photos</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-10 self-center">
                        {breedData.images.map((img: string, i: number) =>
                            <div key={i} className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden border-transparent bg-gray-50">
                                <Image src={img} alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer onGoHome={() => setIsRedirecting(true)} />

            {isRedirecting && <RedirectingScreen />}
        </div>
    )
}

export async function getStaticProps({ params }) {
    const fetchBreeds = async () => {
        const response = await fetch(process.env.APP_URL + "/api/cats/" + params.id)

        if (response.ok) {
            const data = await response.json()
            return data
        }

        console.log("Error loading data");
        return null
    }

    const breedData = await fetchBreeds()

    return {
        props: {
            breedData,
        },
    };
}

export async function getStaticPaths() {
    const response = await fetch(process.env.APP_URL + "/api/breeds");

    if (!response.ok) {
        console.log("Error loading data");
        return
    }

    const catBreeds = await response.json()

    const paths = catBreeds.list.map((breed: any) => ({
        params: { id: breed.id },
    }));

    return {
        paths,
        fallback: false,
    };
}


export default CatById