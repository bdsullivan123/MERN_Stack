const ProductsController = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/products/", ProductsController.findAllProducts);
    app.get("/api/products/:id", ProductsController.findOneSingleProduct);
    app.put("/api/products/update/:id", ProductsController.updateExistingProduct);
    app.post("/api/products/new", ProductsController.createNewProduct);
    app.delete("/api/products/delete/:id", ProductsController.deleteAnExistingProduct);
};