import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProductController = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);

  res.json({
    success: true,
    message: "created successfully!",
    data: result,
  });
};

export const ProductControllers = {
    createProductController,
}