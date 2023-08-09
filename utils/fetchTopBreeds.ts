import orderCatsList from "./orderCatsList";

export default async function fetchTopBreeds() {
    const topCatsIds = [
        { order: 1, id: "siam" },
        { order: 2, id: "mcoo" },
        { order: 3, id: "ragd" },
        { order: 4, id: "sphy" },
        { order: 5, id: "beng" },
        { order: 6, id: "pers" },
        { order: 7, id: "sfol" },
        { order: 8, id: "abys" },
        { order: 9, id: "rblu" },
        { order: 10, id: "bslo" },
    ]
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const breedsApiUrl = process.env.NEXT_PUBLIC_BREEDS_API_URL;

    const response = await fetch(`${breedsApiUrl}api_key=${apiKey}`)
    if (!response.ok) {
        throw new Error("failed to fetch data")
    }

    const data = await response.json()
    const topCatsData: any[] = []
    data.map((cat: any) => {
        for (let i = 0; i < topCatsIds.length; i++) {
            const topCat = topCatsIds[i];
            if (topCat.id == cat.id) {
                topCatsData.push({
                    order: topCat.order,
                    cat: {
                        id: cat.id,
                        name: cat.name,
                        description: cat.description,
                        image: cat.image.url
                    }
                })
            }
        }
    })

    return orderCatsList(topCatsData) as {order: number, cat: any}[]
}