import {Schema , model} from "mongoose";

//Creación del Schema products
const productsSchema = new Schema({
    Nombre_Producto: {type: String, required: true, unique: true},
    Cantidad: {type: Number, required: true},
    Precio: {type: Number, required: true}
});

export default model("products", productsSchema);