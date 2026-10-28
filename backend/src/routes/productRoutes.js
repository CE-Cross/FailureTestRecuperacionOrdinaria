import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProductByBarcode,
  updateProductByBarcode,
  getallProducts,
  updateVariantStock,
} from "../controllers/productController.js";

const router = Router();

router.route("/").get(getProducts).post(createProduct);
router.delete("/barcode/:barcode", deleteProductByBarcode);
router.put("/barcode/:barcode", updateProductByBarcode);
router.route("/allProducts").get(getallProducts);
router.put("/:productId/variant-stock", updateVariantStock);
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
