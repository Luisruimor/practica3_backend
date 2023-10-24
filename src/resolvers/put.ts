import { ObjectId } from "mongo";
import {discosCollection} from "../db/mongo.ts";

export const putDisco = async (req:Request, res:Response) => {
    const updateDisco = req.body;
    await discosCollection.updateOne({_id: {$eq:new ObjectId(req.params._id)} },
        { $set: updateDisco});

    res.send (`Se ha llevado acabo tu actualización del disco con id: ${req.params._id}`)
}