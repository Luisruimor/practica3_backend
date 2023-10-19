import { discosCollection } from "../db/mongo.ts";
import {ObjectId} from "https://deno.land/x/web_bson@v0.3.0/mod.js";

export const postAddDisco = async (req:Request,res:Response) => {
    const insertId:ObjectId = await discosCollection.insertOne({
        nombre:req.params.nombre,
        autor:req.params.autor,
        formato:req.params.formato,
        matriz:req.params.matriz,
        pais:req.params.pais,
    });
    insertId ? res.send(`Disco insertado con id : ${insertId}`) : res.send("Error al insertar disco");
}
