import {discosCollection} from "../db/mongo.ts";

export const putDisco = async (req:Request, res:Response) => {
    const { matchedCount, modifiedCount, upsertedId } = await discosCollection.updateOne(
        { id: { $eq: req.params.id } },
        { $set: { nombre: req.params.nombre,
            autor: req.params.autor,
            formato: req.params.formato,
            matriz:req.params.matriz,
            pais:req.params.pais }
        });
    res.send (`Se ha llevado acabo tu actualización del disco con id ${req.params.id}`)
}