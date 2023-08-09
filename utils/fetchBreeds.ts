interface breedsListType {
    list: {
        id: string;
        name: string;
        image?: string;
    }[],
    examples: {
        id: string;
        name: string;
        image?: string;
    }[],
}


export default async function fetchBreeds() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const breedsApiUrl = process.env.NEXT_PUBLIC_BREEDS_API_URL;

    const response = await fetch(`${breedsApiUrl}api_key=${apiKey}`)
    if (!response.ok) {
        throw new Error("failed to fetch data")
    }

    const data = await response.json()

    const breedsList: { id: string, name: string, image?: string }[] = data.map((breed: any) => ({
        id: breed.id,
        name: breed.name,
        image: breed.image?.url
    }))

    const breedsWithImages = breedsList.filter(obj => obj.image);
    let breedExamples: { id: string, name: string, image?: string }[] = [...breedsWithImages]

    for (let i = breedExamples.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [breedExamples[i], breedExamples[j]] = [breedExamples[j], breedExamples[i]];
    }
    breedExamples = breedExamples.slice(0, 4);

    const dataList: breedsListType = { list: breedsList, examples: breedExamples }
    return dataList
}