import mongoose from "mongoose";
import Products from "../models/products.js";

export const getAllProducts = async(req,res)=>{
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async(req,res)=>{
    const product = req.body;
    const newProduct = new Products({ ...product, creator: req.userId });
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id');
    try {
        await Products.findByIdAndDelete(id);
        res.json("Deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}