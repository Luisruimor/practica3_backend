import {discosCollection} from "../db/mongo.ts";
import {ObjectId} from "https://deno.land/x/web_bson@v0.3.0/mod.js";

export const deleteDisco = async (req:Request, res:Response) => {
    const deleteDisco = await discosCollection.deleteOne({ _id: {$eq: new ObjectId(req.params._id) } } );
    deleteDisco>0? res.send("Se ha borrado correctamente"): res.send("No se ha encontrado ningún valor con ese id")
}