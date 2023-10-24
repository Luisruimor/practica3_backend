import { ObjectId } from "mongo";
import {discosCollection} from "../db/mongo.ts";

export const putDisco = async (req:Request, res:Response) => {
    const updateDisco = req.body;
    await discosCollection.updateOne({_id: new ObjectId(req.params.id)},
        { $set: updateDisco});

    res.send (`Se ha llevado acabo tu actualización del disco con id ${new ObjectId(req.params.id)}`)
}