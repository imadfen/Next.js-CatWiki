export default async function fetchImages(imagesApiUrl: string, apiKey: string, imagesNumber: number = 8, id?: string) {
    if (id && imagesNumber > 0) {
        let imagesList: string[] = []
        const response = await fetch(`${imagesApiUrl}limit=${imagesNumber}&breed_ids=${id}&api_key=${apiKey}`)
        if (!response.ok)
            throw new Error("failed in fetching images ulrs");

        const data = await response.json()
        data.map((cat: any) => {
            imagesList.push(cat.url)
        })

        return imagesList
    }

    return null
}