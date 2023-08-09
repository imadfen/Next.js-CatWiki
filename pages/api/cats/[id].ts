import { NextApiRequest, NextApiResponse } from "next";
import fetchImages from "../../../utils/fetchImages";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiKey = process.env.API_KEY;
    const breedsApiUrl = process.env.BREEDS_API_URL;
    const imagesApiUrl = process.env.IMAGES_API_URL;

    const breedId = req.query.id



    const response = await fetch(`${breedsApiUrl}api_key=${apiKey}`)
    if (!response.ok)
        return res.status(response.status).json({ error: "failed to fetch data" })

    const data = await response.json()
    const breedData = data.filter((breed: any) => {
        if (breed.id == breedId) return breed
    })

    if (breedData.length == 0) return res.status(200).json(null)

    if (breedData.length == 0)
        return res.status(200).json(null)

    const breedImages = await fetchImages(imagesApiUrl, apiKey, 8, breedData[0].id)

    res.status(200).json({breed: breedData[0], images: breedImages})
}