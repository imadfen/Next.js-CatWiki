export default async function fetchImages(imagesApiUrl: string, apiKey: string, imagesNumber: number = 8, id?: string) {
    if (id && imagesNumber > 0) {
        let imagesList: string[] = []
        const response = await fetch(`${imagesApiUrl}limit=${imagesNumber}&breed_ids=${id}&api_key=${apiKey}`)
        if (response.ok) {
            const data = await response.json()
            data.map((cat: any) => {
                imagesList.push(cat.url)
            })
        } else {
            throw new Error("failed to fetch");
        }

        return imagesNumber == 1 ? imagesList[0] : imagesList
    }

    return null
}