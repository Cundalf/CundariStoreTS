export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        [k:string]:string
    },
}

export interface ResponseProducts {
    site_id: string;

    results: Product[],
    sort: { [k: string]: string | number }
}