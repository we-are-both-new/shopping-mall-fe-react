import api from "./api";

export interface IData {
    _id: string;
    sku: string;
    name: string;
    size: ("S" | "M" | "L")[];
    thumbnail: string;
    detailImages: string;
    category: ("woman" | "man")[];
    description: string;
    price: number;
    stock: {
        S: number;
        M: number;
        L: number;
    };
    status: string;
    isDeleted: boolean;
}
interface Product {
    status: string;
    data: IData[];
}
export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get("/product/list");
        return response.data;
    } catch (error) {
        throw new Error("Error fetching products: " + (error instanceof Error ? error.message : "Unknown error"));
    }
};
