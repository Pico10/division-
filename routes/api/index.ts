import expressRoutes, { Router } from "express";
import productsRoutes from "./Products";
import carritodetailsRoutes from "./Carrito-Details";
import carritoRoutes from "./Carrito"

//Creación de variable para enrutar los distintos modelss 
//Esto serán las rutas donde nos podremos comunicar con la API
const router = Router();

router.use("/products", productsRoutes)
router.use("/carrito-details", carritodetailsRoutes)
router.use("/carritolist", carritoRoutes)


export default router;