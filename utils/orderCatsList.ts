export default function orderCatsList(list: {order: number, [key: string]: any}[]) {
    return list.sort((a, b) => a.order - b.order);
}