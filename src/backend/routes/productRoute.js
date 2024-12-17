const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });


router.post("/create", upload.array("images", 5), productController.createProduct); 
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById); 
router.put("/update-status/:id", productController.updateProductStatus);
router.delete("/:id", productController.deleteProduct);

module.exports = router;