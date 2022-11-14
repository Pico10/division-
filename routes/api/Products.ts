import { Router } from "express";
import productsController from "../../Controllers/Products";

const router = Router();


//Aquí utilizaremos las controladoras creadas para products.

//GET
router.get("/", productsController.get)
//Utilizar parametros para seleccionar un producto único
router.get('/:Nombre_Producto', productsController.getunique)

//POST
router.post("/", productsController.add)

//DELETE
router.delete("/:Nombre_Producto", productsController.delete)

export default router;