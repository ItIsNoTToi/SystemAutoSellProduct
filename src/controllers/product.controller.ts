import { Request, Response } from "express";
import ProductService from "@servicesproduct.services";

class ProductController{
    static async createProduct(req: Request, res: Response){
        await ProductService.createProduct(req, res);
    }

    static async getAllProduct(req: Request, res: Response){
        await ProductService.getAllProducts(req, res);
    }

    static async getProductDetail(req: Request, res: Response): Promise<any>{
        await ProductService.getProductDetail(req, res);
    }

    static async get12Product(req: Request, res: Response){
        await ProductService.get12Products(req, res);
    }

    static async editPage(req: Request, res: Response){
        await ProductService.editPages(req, res);
    }

    static async Update(req: Request, res: Response){
        await ProductService.updateProduct(req, res);
    }

    static async Delete(req: Request, res: Response){
        await ProductService.deleteProduct(req, res);   
    }

    static async getRecentProducts(req: Request, res: Response){
        await ProductService.getRecentProducts(req, res);
    }
}

export default ProductController;