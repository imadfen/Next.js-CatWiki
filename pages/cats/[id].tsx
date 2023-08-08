import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import StatsBar from '../../components/StatsBar';

function CatById() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="px-4 sm:px-14 md:px-20 min-h-screen flex flex-col">
            <Header goHome />

            <div className='flex flex-col items-center my-10'>
                <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-24'>
                    <div className="relative min-w-[371px] h-[371px] rounded-3xl overflow-hidden">
                        <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className="text-4xl font-semibold">Bengal</div>
                        <div className="text-lg font-medium">Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</div>
                        <div className="font-medium flex gap-[1ch]"><p className="font-bold">Temperament:</p> Alert, Agile, Energetic, Demanding, Intelligent</div>
                        <div className="font-medium flex gap-[1ch]"><p className="font-bold">Origin:</p> United States</div>
                        <div className="font-medium flex gap-[1ch]"><p className="font-bold">Life Span:</p> 12 - 15 years</div>

                        {/* ========== Stats ========== */}
                        <div className='flex flex-col gap-5'>
                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold col-end-2">Adaptability:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={5} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Affection level:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={5} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Affection level:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={4} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Grooming:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={1} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Intelligence:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={5} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Health issues:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={3} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Social needs:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={5} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-0">
                                <div className='col-start-1'>
                                    <p className="font-bold">Stranger friendly:</p>
                                </div>

                                <div className='col-start-2 col-end-4 self-center'>
                                    <StatsBar value={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col items-start gap-10 w-full my-20'>
                    <p className="text-4xl font-semibold">Other photos</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-10 self-center">
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        <div className="relative min-w-[134px] h-[134px] md:min-w-[278px] md:h-[278px] rounded-3xl overflow-hidden">
                            <Image src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="" priority layout="fill" sizes="170x170" objectFit="cover" className="absolute top-0 left-0" />
                        </div>
                        
                    </div>
                </div>

            </div>

            <Footer goHome />
        </div>
    )
}

export default CatById