import { NextApiRequest, NextApiResponse } from "next";

interface breedType {
    id: number;
    name: string;
    image?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiKey = process.env.API_KEY;
    const breedsApiUrl = process.env.BREEDS_API_URL;

    const response = await fetch(`${breedsApiUrl}api_key=${apiKey}`)
    if (!response.ok) {
        return res.status(response.status).json({ error: "failed to fetch data" })
    }

    const data = await response.json()

    const breedsList: breedType[] = data.map((breed: any) => ({
        id: breed.id,
        name: breed.name,
        image: breed.image?.url
    }))

    const breedsWithImages = breedsList.filter(obj => obj.image);
    let breedExamples = [...breedsWithImages]

    for (let i = breedExamples.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [breedExamples[i], breedExamples[j]] = [breedExamples[j], breedExamples[i]];
    }
    breedExamples = breedExamples.slice(0, 4);

    res.status(200).json({ list: breedsList, examples: breedExamples })
}