import fetchImages from "./fetchImages";

export default async function fetchBreedData(breedId: string) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const breedsApiUrl = process.env.NEXT_PUBLIC_BREEDS_API_URL;
    const imagesApiUrl = process.env.NEXT_PUBLIC_IMAGES_API_URL;

    const response = await fetch(`${breedsApiUrl}api_key=${apiKey}`)
    if (!response.ok)
        return null;

    const data = await response.json()
    const breedData = data.filter((breed: any) => {
        if (breed.id == breedId) return breed
    })[0]
    
    const breedImages = await fetchImages(imagesApiUrl, apiKey, 8, breedData.id)

    return ({ breed: breedData, images: typeof breedImages == "string" ? [breedImages] : breedImages })
}