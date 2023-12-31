import { discosCollection } from "../db/mongo.ts";
import {ObjectId} from "https://deno.land/x/web_bson@v0.3.0/mod.js";

export const postAddDisco = async (req:Request,res:Response) => {
    const data = req.body;
    const insertId = await discosCollection.insertOne(data);
    insertId? res.send(`Disco insertado con id : ${insertId}`) : res.send("Error al insertar disco");
}
