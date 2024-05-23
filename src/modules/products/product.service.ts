import { Tproduct } from "./product.interface";
import { Product } from "./product.model";



const createProduct = async (payload: Tproduct) => {
    const result = await Product.create(payload);
    return result;
}

export const ProductServices = {
    createProduct,
}